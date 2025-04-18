import { Router } from "express";
import { asyncHandler } from "../lib/asyncHandler";
import {
  createContract,
  deleteContract,
  updateContract,
} from "../controllers/contractController";

const contractRouter = Router();

contractRouter.post("/", asyncHandler(createContract));
contractRouter.patch("/", asyncHandler(updateContract));
contractRouter.delete("/", asyncHandler(deleteContract));

export default contractRouter;
