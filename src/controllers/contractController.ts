import { RequestHandler } from "express";
import contractService from "../services/contractService";
import UnauthorizedError from "../errors/UnauthorizedError";
import {
  ContractStruct,
  UpdateContractStruct,
} from "../validators/ContractStructs";
import { create } from "superstruct";
import { IdParamsStruct } from "../validators/CommonStruct";

export const createContract: RequestHandler = async (req, res) => {
  const user = req.user;
  if (!user) {
    throw new UnauthorizedError("Unauthorized");
  }
  const data = create(req.body, ContractStruct);
  const userId = user.id;
  const contract = await contractService.create(data);

  res.status(201).send(contract);
};

export const updateContract: RequestHandler = async (req, res) => {
  const user = req.user;

  if (!user) {
    throw new UnauthorizedError("Unauthorized");
  }

  const { id } = create(req.params, IdParamsStruct);
  const data = create(req.body, UpdateContractStruct);
  const userId = user.id;
  const contract = await contractService.update(id, { ...data, userId });
  res.status(201).send(contract);
};

export const deleteContract: RequestHandler = async (req, res) => {
  const userId = req.user;

  if (!userId) {
    throw new UnauthorizedError("Unauthorized");
  }

  const { id } = create(req.params, IdParamsStruct);
  const contract = await contractService.deleteById(id);

  res.status(204);
};
