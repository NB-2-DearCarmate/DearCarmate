import { NextFunction, Request, Response } from "express";
import { create } from "superstruct";
import { CarPaginationParams, SearchByCar } from "../typings/pagination";
import {
  CarStruct,
  UpdateCarStruct,
  CarQueryStruct,
} from "../validators/CarsStructs";
import carService from "../services/carsService";

//차량 등록
export const createCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const carData = create(req.body, CarStruct);
    const car = await carService.createCar(carData);
    res.status(201).json(car);
  } catch (error) {
    next(error);
  }
};

// 차량 목록 조회
export const getCarList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      page = 1,
      pageSize = 3,
      status,
      orderBy,
      searchBy,
      keyword,
    } = create(req.query, CarQueryStruct);

    const carList = await carService.getCarList({
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
  } catch (error) {
    next(error);
  }
};

//차량 아이디 검색
export const getCarById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const carId = Number(req.params.id);

    const car = await carService.getCarById(carId);

    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
};

// 차량 모델 및 제조사 조회
export const getAllCarModels = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const carModels = await carService.getAllCarModels();
    res.status(200).json(carModels);
  } catch (error) {
    next(error);
  }
};
