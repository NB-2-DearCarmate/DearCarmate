import { Router } from "express";
import { createCar } from "../controllers/carController";
import { asyncHandler } from "../lib/asyncHandler";
const carsRouter = Router();

// 차량 생성 라우터
carsRouter.post("/", asyncHandler(createCar));

export default carsRouter;
