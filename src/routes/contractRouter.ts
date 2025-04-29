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
import { asyncHandler } from "../lib/asyncHandler";

const contractRouter = Router();

contractRouter.get("/", authMiddleware, asyncHandler(getContractList));
contractRouter.get("/customers", authMiddleware, asyncHandler(getCustomerList));
contractRouter.get("/cars", authMiddleware, asyncHandler(getCarList));
contractRouter.get("/users", authMiddleware, asyncHandler(getUserList));
contractRouter.post("/", authMiddleware, asyncHandler(createContract));
contractRouter.patch("/:id", authMiddleware, asyncHandler(updateContract));
contractRouter.delete("/:id", authMiddleware, asyncHandler(deleteContract));

export default contractRouter;
