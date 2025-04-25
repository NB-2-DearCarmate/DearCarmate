import { RequestHandler } from "express";
import contractService from "../services/contractService";
import UnauthorizedError from "../errors/UnauthorizedError";
import {
  ContractStruct,
  UpdateContractStruct,
  ContractListStruct,
  updatePriceStruct,
} from "../validators/ContractStructs";
import { create } from "superstruct";
import { IdParamsStruct } from "../validators/CommonStruct";
import { ContractStatus } from "../typings/contract";
import meetingService from "../services/meetingService";
import alarmService from "../services/alarmService";

type MeetingInput = {
  date: string;
  alarms?: string[];
};

// 시간 변환
const parseDate = (str: string): Date => new Date(str.replace(" ", "T"));

//상태별 계약 조회
export const getContractCheckList: RequestHandler = async (req, res) => {
  const params = create(req.query, ContractListStruct);
  const contractStatus = "VEHICLE_CHECK";
  const contracts = await contractService.getContractList(
    contractStatus,
    params
  );

  const contractList = {};

  res.status(200).send(contracts);
};

export const getContractPriceList: RequestHandler = async (req, res) => {
  const params = create(req.query, ContractListStruct);
  const contractStatus = "PRICE_NEGOTIATION";
  const contracts = await contractService.getContractList(
    contractStatus,
    params
  );

  res.status(200).send(contracts);
};

export const getContractSuccessList: RequestHandler = async (req, res) => {
  const params = create(req.query, ContractListStruct);
  const contractStatus = "SUCCESS";
  const contracts = await contractService.getContractList(
    contractStatus,
    params
  );

  res.status(200).send(contracts);
};

export const getContractFailList: RequestHandler = async (req, res) => {
  const params = create(req.query, ContractListStruct);
  const contractStatus = "FAIL";
  const contracts = await contractService.getContractList(
    contractStatus,
    params
  );

  res.status(200).send(contracts);
};

//계약 생성
export const createContract: RequestHandler = async (req, res) => {
  const user = 1;

  if (!user) {
    throw new UnauthorizedError("Unauthorized");
  }

  const userId = user;
  const userData = await contractService.getUserId(userId);

  const parsedData = create(req.body, ContractStruct);
  const car = await contractService.getCarId(parsedData.carId);
  const customer = await contractService.getCustomerId(parsedData.customerId);
  const model = await contractService.getModelId(car.modelId);

  const contractData = {
    ...parsedData,
    status: "VEHICLE_CHECK" as ContractStatus,
    userId,
    resolutionDate: null,
    contractPrice: car.price,
  };

  const contract = await contractService.create(contractData);
  const contractId = contract.id;

  const updateCarStatus = await contractService.updateCarStatus(car.id);

  const meetingResult: { date: Date; alarms: Date[] }[] = [];
  if (req.body.meetings) {
    const meetingsData = Array.isArray(req.body.meetings)
      ? req.body.meetings
      : [req.body.meetings];

    if (meetingsData.length > 3) {
      res
        .status(400)
        .send({ message: "미팅은 최대 3개까지만 등록 가능합니다." });
    }

    for (const meeting of meetingsData) {
      const meetingDate = new Date(meeting.date.replace(" ", "T"));
      const createdMeeting = await meetingService.create(
        contractId,
        meetingDate
      );
      const meetingId = createdMeeting.id;
      const alarms: Date[] = [];
      if (meeting.alarms) {
        const alarmData = Array.isArray(meeting.alarms)
          ? meeting.alarms
          : [meeting.alarms];

        if (alarmData.length > 2) {
          res
            .status(400)
            .send({ message: "알람은 최대 2개까지만 등록 가능합니다." });
        }

        for (const alarmAt of alarmData) {
          const alarmDate = new Date(alarmAt.replace(" ", "T"));
          await alarmService.create(meetingId, meetingDate, alarmDate);
          alarms.push(alarmDate);
        }
      }

      meetingResult.push({
        date: meetingDate,
        alarms,
      });
    }
  }

  const contractResult = {
    id: contract.id,
    status: contract.status,
    resolutionDate: contract.resolutionDate,
    meetings: meetingResult,
    user: {
      id: userId,
      name: userData.name,
    },
    customer: {
      id: customer.id,
    },
    car: {
      id: car.id,
      model: model.name,
    },
  };

  res.status(201).send(contractResult);
};

//계약 수정
export const updateContract: RequestHandler = async (req, res) => {
  const { meetings, ...contractData } = req.body;

  const user = 1;

  if (!user) {
    throw new UnauthorizedError("Unauthorized");
  }

  const userId = user;
  const userData = await contractService.getUserId(userId);

  const { id } = create(req.params, IdParamsStruct);
  const parsedData = create(contractData, UpdateContractStruct);

  if (parsedData.status === "SUCCESS" && !parsedData.resolutionDate) {
    throw new Error("계약일은 필수 입력 요소입니다.");
  }

  const updatedContract = await contractService.update(id, {
    ...parsedData,
    userId,
  });

  if (updatedContract.status === "SUCCESS") {
    await contractService.complectedCar(updatedContract.carId);
  }

  const customer = await contractService.getCustomerId(
    updatedContract.customerId
  );

  const car = await contractService.getCarId(updatedContract.carId);

  const model = await contractService.getModelId(car.modelId);

  const meetingResult: { date: Date; alarms: Date[] }[] = [];
  if (req.body.meetings) {
    const meetingsData = Array.isArray(req.body.meetings)
      ? req.body.meetings
      : [req.body.meetings];

    if (meetingsData.length > 3) {
      throw new Error("미팅은 최대 3개까지 등록할 수 있습니다.");
    }

    for (const m of meetingsData) {
      if (Array.isArray(m.alarms) && m.alarms.length > 2) {
        throw new Error("한 미팅에는 최대 2개의 알람만 설정할 수 있습니다.");
      }
    }

    const existingMeetings = await meetingService.findAllByContractId(id);
    const requestedDates = meetingsData.map((m: MeetingInput) =>
      parseDate(m.date).getTime()
    );

    for (const existing of existingMeetings) {
      if (!requestedDates.includes(new Date(existing.date).getTime())) {
        await alarmService.deleteByMeetingId(existing.id);
        await meetingService.deleteById(existing.id);
      }
    }

    for (const meeting of meetingsData) {
      const meetingDate = parseDate(meeting.date);
      const existingMeeting = await meetingService.getByDate(id, meetingDate);

      let meetingId: number;

      if (existingMeeting) {
        meetingId = existingMeeting.id;
        await meetingService.update(meetingId, meetingDate);
      } else {
        const createdMeeting = await meetingService.create(id, meetingDate);
        meetingId = createdMeeting.id;
      }

      const alarms: Date[] = [];
      if (meeting.alarms) {
        await alarmService.deleteByMeetingId(meetingId);
        const alarmData = Array.isArray(meeting.alarms)
          ? meeting.alarms
          : [meeting.alarms];

        for (const alarmAt of alarmData) {
          const alarmDate = parseDate(alarmAt);
          await alarmService.create(meetingId, meetingDate, alarmDate);
          alarms.push(alarmDate);
        }
      }

      meetingResult.push({
        date: meetingDate,
        alarms,
      });
    }
  }

  const updatedContractResult = {
    id: updatedContract.id,
    status: updatedContract.status,
    resolutionDate: updatedContract.resolutionDate,
    contractPrice: updatedContract.contractPrice,
    meetings: meetingResult,
    user: {
      id: userId,
      name: userData.name,
    },
    customer: {
      id: customer.id,
      name: customer.name,
    },
    car: {
      id: car.id,
      modle: model.name,
    },
  };

  res.status(200).send(updatedContractResult);
};

//계약 삭제
export const deleteContract: RequestHandler = async (req, res) => {
  const userId = 1;

  if (!userId) {
    throw new UnauthorizedError("Unauthorized");
  }

  const { id } = create(req.params, IdParamsStruct);
  const contract = await contractService.deleteById(id);

  res.status(204);
};
