import { NextFunction, Request, Response } from "express";
import { create } from "superstruct";
import { CarPaginationParams, SearchByCar } from "../typings/pagination";
import {
  CarStruct,
  UpdateCarStruct,
  CarQueryStruct,
} from "../validators/CarsStructs";
import { Car } from "../typings/car";
import {
  CreateCarDTO,
  CreateCarResponseDTO,
  CarListResponseDTO,
  CarByIdDTO,
  GetCarByIdResponseDTO,
  GetAllCarModelsResponseDTO,
  UpdateCarDTO,
  UpdateCarResponseDTO,
  UploadCarDTO,
  UploadCarResponseDTO,
} from "../dto/carsDTO";
import carService from "../services/carsService";
import csv from "csv-parser";
import fs from "fs";

//차량 등록
export const createCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const carData: CreateCarDTO = create(req.body, CarStruct);
  const car: CreateCarResponseDTO = await carService.createCar(carData);
  res.status(201).json(car);
};

// 차량 목록 조회
export const getCarList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    page = 1,
    pageSize = 3,
    status,
    orderBy,
    searchBy,
    keyword,
  } = create(req.query, CarQueryStruct);

  const carList: CarListResponseDTO = await carService.getCarList({
    page,
    pageSize,
    status: status as
      | "POSSESSION"
      | "CONTRACT_PROCEEDING"
      | "CONTRACT_COMPLETED",
    orderBy: orderBy as "recent" | "oldest",
    searchBy: searchBy as SearchByCar,
    keyword: keyword as string,
  });

  res.status(200).json(carList);
};

//차량 아이디 검색
export const getCarById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const carId: CarByIdDTO = { id: Number(req.params.id) };

  const car: GetCarByIdResponseDTO = await carService.getCarById(carId.id);

  res.status(200).json(car);
};

// 전체 제조사와 그에 속한 모델들을 조회하는 컨트롤러
export const getAllCarModels = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 서비스에서 제조사와 모델 정보를 가져옴
  const manufacturersWithModels: GetAllCarModelsResponseDTO =
    await carService.getAllCarModels();

  // 성공적으로 데이터를 가져오면 JSON 형태로 응답
  res.status(200).json(manufacturersWithModels);
};

// 차량 수정
export const updateCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const carId: CarByIdDTO = { id: Number(req.params.id) };
  const updateData: UpdateCarDTO = UpdateCarStruct.create(req.body);

  const updatedCar: UpdateCarResponseDTO = await carService.updateCar(
    carId.id,
    updateData
  );
  res.status(200).json(updatedCar);
};

//차량 삭제
export const deleteCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const carId: CarByIdDTO = { id: Number(req.params.id) };
  await carService.deleteCar(carId.id);
  res.status(204).send();
};

// CSV 업로드 및 차량 등록
export const uploadCarsFromCSV = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) {
    res.status(400).json({ message: "CSV 파일이 없습니다." });
    return;
  }

  const results: any[] = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      // 필드 매핑 등 데이터 가공 필요 (예: 문자열 -> 숫자)
      const cars: UploadCarDTO[] = results.map((row: Car) => ({
        carNumber: row.carNumber,
        manufacturerId: Number(row.manufacturerId),
        modelId: Number(row.modelId),
        companyId: Number(row.companyId),
        type: row.type,
        mileage: Number(row.mileage),
        price: Number(row.price),
        accidentCount: Number(row.accidentCount) || 0,
        explanation: row.explanation || null,
        accidentDetails: row.accidentDetails || null,
        status: row.status || null,
      }));

      const saved: UploadCarResponseDTO =
        await carService.bulkCreateCarsService(cars);
      res.status(201).json(saved);
    });
};
