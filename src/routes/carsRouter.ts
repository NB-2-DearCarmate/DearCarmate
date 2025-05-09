import { Router } from "express";
import {
  createCar,
  getCarList,
  getCarById,
  getAllCarModels,
  updateCar,
  deleteCar,
  uploadCarsFromCSV,
} from "../controllers/carController";
import { asyncHandler } from "../lib/asyncHandler";
import authMiddleware from "../middlewares/authMiddleware";
import upload from "../middlewares/upload";

const carsRouter = Router();

// 차량 생성 라우터
carsRouter.post("/", authMiddleware, asyncHandler(createCar));

//차량 목록 조회 라우터
carsRouter.get("/", authMiddleware, asyncHandler(getCarList));

//차량 제조사 및 모델 조회 라우터
carsRouter.get("/models", authMiddleware, asyncHandler(getAllCarModels));

//차량 대용량 파일 업로드
carsRouter.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  asyncHandler(uploadCarsFromCSV)
);

//차량 상세 조회 라우터
carsRouter.get("/:id", authMiddleware, asyncHandler(getCarById));

// 차량 수정 라우터
carsRouter.patch("/:id", authMiddleware, asyncHandler(updateCar));

// 차량 삭제 라우터
carsRouter.delete("/:id", authMiddleware, asyncHandler(deleteCar));

export default carsRouter;
