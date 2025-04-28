import { Request, Response } from "express";
import contractService from "../services/contractService";
import {
  ContractStruct,
  UpdateContractStruct,
  ContractListStruct,
  updateMeetings,
} from "../validators/ContractStructs";
import { create } from "superstruct";
import { IdParamsStruct } from "../validators/CommonStruct";
import meetingService from "../services/meetingService";
import { ContractStatus, CONTRACT_STATUS_ORDER } from "../typings/contract";
import {
  CreateContractResponseDTO,
  MeetingDTO,
  UpdateContractResponseDTO,
} from "../dto/contractDTO";

//계약 조회
export const getContractList = async (req: Request, res: Response) => {
  const user = req.user;

  if (!user) {
    res.status(400).send({ message: "로그인이 필요합니다." });
  }

  const userId = user.id;
  const params = create(req.query, ContractListStruct);

  const contractByStatus = CONTRACT_STATUS_ORDER.reduce((acc, status) => {
    acc[status] = { totalItemCount: 0, data: [] };
    return acc;
  }, {} as Record<ContractStatus, { totalItemCount: number; data: any[] }>);

  for (const status of CONTRACT_STATUS_ORDER) {
    const contracts = await contractService.getContractList(
      userId,
      { cursor: params.cursor, limit: params.limit },
      status
    );

    contractByStatus[status] = {
      totalItemCount: contracts.totalContract,
      data: contracts.list,
    };
  }

  res.status(200).send(contractByStatus);
};

//계약 생성
export const createContract = async (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    res.status(400).send({ message: "로그인이 필요합니다." });
    return;
  }

  const userId = user.id;
  const userData = await contractService.getUserId(userId);
  const parsedData = create(req.body, ContractStruct);

  const contractData = {
    carId: parsedData.carId,
    customerId: parsedData.customerId,
    userId,
    status: "CARINSPECTION" as ContractStatus,
    resolutionDate: null,
    contractPrice: 0,
    meeting: parsedData.meetings,
  };

  const { contract, customer, model } = await contractService.create(
    contractData
  );
  const contractId = contract.id;

  let meetingResult: MeetingDTO[] = [];

  if (parsedData.meetings) {
    meetingResult = await meetingService.createWithAlarms(
      contractId,
      parsedData.meetings
    );
  }

  const contractResult: CreateContractResponseDTO = {
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
      id: contract.carId,
      model: model.name,
    },
  };

  res.status(201).send(contractResult);
};

//계약 수정
export const updateContract = async (req: Request, res: Response) => {
  const { meetings, ...contractData } = req.body;
  const user = req.user;

  if (!user) {
    res.status(400).send({ message: "로그인이 필요합니다." });
    return;
  }

  const userId = user.id;

  const userData = await contractService.getUserId(userId);
  const { id } = create(req.params, IdParamsStruct);
  const parsedData = create(contractData, UpdateContractStruct);
  const parsedMeeting = create(meetings, updateMeetings);

  if (
    parsedData.status === "CONTRACTSUCCESSFUL" &&
    !parsedData.resolutionDate
  ) {
    throw new Error("계약일은 필수 입력 요소입니다.");
  }

  if (userId !== parsedData.userId) {
    res.status(400).send({ message: "userId 를 확인해주세요" });
  }

  const updatedContract = await contractService.update(id, userId, parsedData);

  if (updatedContract.status === "CONTRACTSUCCESSFUL") {
    await contractService.complectedCar(updatedContract.carId);
  }

  const [customer, car] = await Promise.all([
    contractService.getCustomerId(updatedContract.customerId),
    contractService.getCarId(updatedContract.carId),
  ]);

  const model = await contractService.getModelId(car.modelId);

  const meetingResult = parsedMeeting
    ? await meetingService.updateMeetings(id, parsedMeeting)
    : [];

  const updatedContractResult: UpdateContractResponseDTO = {
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
      model: model.name,
    },
  };

  res.status(200).send(updatedContractResult);
};

//계약 삭제
export const deleteContract = async (req: Request, res: Response) => {
  const user = req.user;

  if (!user) {
    res.status(400).send({ message: "로그인이 필요합니다." });
  }

  const userId = user.id;
  const { id } = create(req.params, IdParamsStruct);
  const contract = await contractService.deleteById(id, userId);

  res.status(200).send({ message: "계약 삭제 성공" });
};
