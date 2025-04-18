import { RequestHandler } from "express";
import contractService from "../services/contractService";
import UnauthorizedError from "../errors/UnauthorizedError";

export const createContract: RequestHandler = async (req, res) => {
  if (!req.user) {
    throw new UnauthorizedError("Unauthorized");
  }
  const data = req.body;

  const contract = await contractService.create({
    data,
    userId: req.user.Id,
  });

  res.status(201).send(contract);
};

export const updateContract: RequestHandler = async (req, res) => {
  const userId = req.user;

  if (!req.user) {
    throw new UnauthorizedError("Unauthorized");
  }

  const id = req.params;
  const data = req.body;

  const contract = await contractService.update(id, userId, data);
  res.status(201).send(contract);
};

export const deleteContract: RequestHandler = async (req, res) => {
  const userId = req.user;

  if (!req.user) {
    throw new UnauthorizedError("Unauthorized");
  }

  const id = req.params;
  const contract = await contractService.deleteById(id);

  res.status(204);
};
