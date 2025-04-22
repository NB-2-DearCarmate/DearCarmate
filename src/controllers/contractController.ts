import { RequestHandler } from "express";
import contractService from "../services/contractService";
import UnauthorizedError from "../errors/UnauthorizedError";
import {
  ContractStruct,
  UpdateContractStruct,
  ContractListStruct,
  ContractStatus,
} from "../validators/ContractStructs";
import { create } from "superstruct";
import { IdParamsStruct } from "../validators/CommonStruct";

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

  if (typeof req.body.meeting === "string") {
    req.body.meeting = new Date(req.body.meeting);
  }

  const data = create(req.body, ContractStruct);

  const userId = user;
  const contract = await contractService.create({
    ...data,
    status: "VEHICLE_CHECK",
    userId,
  });

  res.status(201).send(contract);
};

export const updateContract: RequestHandler = async (req, res) => {
  const user = 1;

  if (!user) {
    throw new UnauthorizedError("Unauthorized");
  }

  const { id } = create(req.params, IdParamsStruct);
  const data = create(req.body, UpdateContractStruct);
  const userId = user;
  const contract = await contractService.update(id, { ...data, userId });
  res.status(201).send(contract);
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
