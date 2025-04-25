import { Router } from "express";
import {
  createContract,
  deleteContract,
  getContractList,
  updateContract,
} from "../controllers/contractController";
import authMiddleware from "../middlewares/authMiddleware";

const contractRouter = Router();

contractRouter.get("/", authMiddleware, getContractList);
contractRouter.post("/", authMiddleware, createContract);
contractRouter.patch("/:id", authMiddleware, updateContract);
contractRouter.delete("/:id", authMiddleware, deleteContract);

export default contractRouter;
