import { Router } from "express";
import { dashboardController } from "../controllers/dashboardController";
import authMiddleware from "../middlewares/authMiddleware";
import { asyncHandler } from "../lib/asyncHandler";

const dashboardRouter = Router();

dashboardRouter.get("/", authMiddleware, asyncHandler(dashboardController));

export default dashboardRouter;
