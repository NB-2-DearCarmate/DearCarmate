import { RequestHandler } from "express";
import contractService from "../services/contractService";
import UnauthorizedError from "../errors/UnauthorizedError";
import {
  ContractStruct,
  UpdateContractStruct,
  ContractListStruct,
} from "../validators/ContractStructs";
import { create } from "superstruct";
import { IdParamsStruct } from "../validators/CommonStruct";
import { ContractStatus } from "../typings/contract";
import meetingService from "../services/meetingService";
import alarmService from "../services/alarmService";

export const getContractList: RequestHandler = async (req, res) => {
  const params = create(req.query, ContractListStruct);
  const contractStatus = "VEHICLE_CHECK";
  const contracts = await contractService.getContractList(
    contractStatus,
    params
  );

  res.status(200).send(contracts);
};

export const createContract: RequestHandler = async (req, res) => {
  const user = 1;

  if (!user) {
    throw new UnauthorizedError("Unauthorized");
  }

  const userId = user;
  const meetingDate = new Date(req.body.meeting);
  const alarmAt = new Date(req.body.alarmAt);

  const parsedData = create(req.body, ContractStruct);
  const contractData = {
    ...parsedData,
    status: "VEHICLE_CHECK" as ContractStatus,
    userId,
    resolutionDate: null,
  };

  const contract = await contractService.create(contractData);
  const contractId = contract.id;

  if (req.body.meeting) {
    const meetingDate = new Date(req.body.meeting);
    const meeting = await meetingService.create(contractId, meetingDate);
    const meetingId = meeting.id;

    if (req.body.alarmAt) {
      const alarmAt = new Date(req.body.alarmAt);
      const updatedAlarmAt = await alarmService.create(
        meetingId,
        meetingDate,
        alarmAt
      );
    }
  }

  res.status(201).send(contract);
};

export const updateContract: RequestHandler = async (req, res) => {
  const user = 1;

  if (!user) {
    throw new UnauthorizedError("Unauthorized");
  }

  const userId = user;

  const { id } = create(req.params, IdParamsStruct);
  const parsedData = create(req.body, UpdateContractStruct);

  if (parsedData.status === "SUCCESS" && !parsedData.resolutionDate) {
    throw new Error("계약일은 필수 입력 요소입니다.");
  }

  const updatedContract = await contractService.update(id, {
    ...parsedData,
    userId,
  });

  if (req.body.meeting) {
    const meetingDate = new Date(req.body.meeting);
    const updatedMeeting = await meetingService.update(id, meetingDate);
    const meetingId = updatedMeeting.id;

    if (req.body.alarmAt) {
      const alarmAt = new Date(req.body.alarmAt);
      const updatedAlarmAt = await alarmService.update(
        meetingId,
        meetingDate,
        alarmAt
      );
    }
  }

  res.status(201).send(updatedContract);
};

export const deleteContract: RequestHandler = async (req, res) => {
  const userId = 1;

  if (!userId) {
    throw new UnauthorizedError("Unauthorized");
  }

  const { id } = create(req.params, IdParamsStruct);
  const contract = await contractService.deleteById(id);

  res.status(204);
};
