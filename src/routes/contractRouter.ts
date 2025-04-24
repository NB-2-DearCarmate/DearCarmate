import { Router } from "express";
import {
  createContract,
  deleteContract,
  getContractCheckList,
  getContractFailList,
  getContractPriceList,
  getContractSuccessList,
  updateContract,
  updatePrice,
} from "../controllers/contractController";

const contractRouter = Router();

contractRouter.get("/VEHICLE_CHECK", getContractCheckList);
contractRouter.get("/PRICE_NEGOTIATION", getContractPriceList);
contractRouter.get("/SUCCESS", getContractSuccessList);
contractRouter.get("/FAIL", getContractFailList);
contractRouter.post("/", createContract);
contractRouter.patch("/:id", updateContract);
contractRouter.patch("/price/:id", updatePrice);
contractRouter.delete("/:id", deleteContract);

export default contractRouter;
