import { Router } from "express";
import {
  createContract,
  deleteContract,
  getContractList,
  getCustomerList,
  getUserList,
  getCarList,
  updateContract,
} from "../controllers/contractController";
import authMiddleware from "../middlewares/authMiddleware";

const contractRouter = Router();

contractRouter.get("/", authMiddleware, getContractList);
contractRouter.get("/customers", authMiddleware, getCustomerList);
contractRouter.get("/cars", authMiddleware, getCarList);
contractRouter.get("/users", authMiddleware, getUserList);
contractRouter.post("/", authMiddleware, createContract);
contractRouter.patch("/:id", authMiddleware, updateContract);
contractRouter.delete("/:id", authMiddleware, deleteContract);

export default contractRouter;
