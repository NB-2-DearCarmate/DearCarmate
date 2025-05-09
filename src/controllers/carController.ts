import { NextFunction, Request, Response } from "express";
import { create } from "superstruct";
import { SearchByCar } from "../typings/pagination";
import {
  CarStruct,
  UpdateCarStruct,
  CarQueryStruct,
} from "../validators/CarsStructs";
import { CarRequest } from "../typings/car";
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
import { mapToCarResponse } from "../utils/CarResponse";
import carService from "../services/carsService";
import csv from "csv-parser";
import fs from "fs";

// 차량 등록
export const createCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const carRequest: CreateCarDTO = create(req.body, CarStruct);

    const newCar = await carService.createCar(carRequest, req.user.companyId);
    const response: CreateCarResponseDTO = mapToCarResponse(newCar);

    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
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

  const user = req.user;
  const companyId = user?.companyId;

  const carList: CarListResponseDTO = await carService.getCarList({
    page,
    pageSize,
    status: status as
      | "possession"
      | "contract_proceeding"
      | "contract_completed",
    orderBy: orderBy as "recent" | "oldest",
    searchBy: searchBy as SearchByCar,
    keyword: keyword as string,
    companyId,
  });

  res.status(200).json(carList);
};

//차량 아이디 검색
export const getCarById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const carId: CarByIdDTO = { id: Number(req.params.id) };

    const car: GetCarByIdResponseDTO = await carService.getCarById(carId.id);

    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
};

export const getAllCarModels = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const manufacturersWithModels: GetAllCarModelsResponseDTO =
    await carService.getAllCarModels();

  res.status(200).json(manufacturersWithModels);
};

// 차량 수정
export const updateCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const carRequest: UpdateCarDTO = create(req.body, UpdateCarStruct);

    const carId: number = Number(req.params.id);

    const updatedCar = await carService.updateCar(carId, carRequest);

    const response: UpdateCarResponseDTO = mapToCarResponse(updatedCar);

    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

//차량 삭제
export const deleteCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const carId: CarByIdDTO = { id: Number(req.params.id) };
    await carService.deleteCar(carId.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
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

  const companyId = req.user.companyId;

  const results: any[] = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      try {
        const cars: UploadCarDTO[] = results.map((row: CarRequest) => ({
          carNumber: String(row.carNumber),
          manufacturer: String(row.manufacturer),
          model: String(row.model),
          manufacturingYear: Number(row.manufacturingYear),
          mileage: Number(row.mileage),
          price: Number(row.price),
          accidentCount: Number(row.accidentCount) || 0,
          explanation: row.explanation,
          accidentDetails: row.accidentDetails,
        }));

        if (companyId !== undefined) {
          await carService.bulkCreateCarsService(cars, companyId);
        } else {
          throw new Error("회사의 ID가 없습니다.");
        }

        const saved: UploadCarResponseDTO =
          await carService.bulkCreateCarsService(cars, companyId);
        res.status(201).json(saved);
      } catch (err) {
        next(err);
      }
    });
};
