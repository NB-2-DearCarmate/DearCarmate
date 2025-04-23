import { Router } from "express";
import {
  createCar,
  getCarList,
  getCarById,
  getAllCarModels,
} from "../controllers/carController";
import { asyncHandler } from "../lib/asyncHandler";
import authMiddleware from "../middlewares/authMiddleware";

const carsRouter = Router();

// 차량 생성 라우터
carsRouter.post("/", authMiddleware, asyncHandler(createCar));

//차량 목록 조회 라우터
carsRouter.get("/", authMiddleware, asyncHandler(getCarList));

//차량 상세 조회 라우터
carsRouter.get("/:id", authMiddleware, asyncHandler(getCarById));

//차량 제조사 및 모델 조회 라우터
carsRouter.get("/models", authMiddleware, asyncHandler(getAllCarModels));

export default carsRouter;
