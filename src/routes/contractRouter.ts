import { Router } from "express";
import {
  createContract,
  deleteContract,
  getContractList,
  updateContract,
} from "../controllers/contractController";

const contractRouter = Router();

contractRouter.get("/VEHICLE_CHECK", getContractList);
contractRouter.post("/", createContract);
contractRouter.patch("/:id", updateContract);
contractRouter.delete("/:id", deleteContract);

export default contractRouter;
