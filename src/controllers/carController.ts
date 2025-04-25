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

// 전체 제조사와 그에 속한 모델들을 조회하는 컨트롤러
export const getAllCarModels = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // 서비스에서 제조사와 모델 정보를 가져옴
    const manufacturersWithModels = await carService.getAllCarModels();

    // 성공적으로 데이터를 가져오면 JSON 형태로 응답
    res.status(200).json(manufacturersWithModels);
  } catch (error) {
    next(error);
  }
};

// 차량 수정
export const updateCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const carId = Number(req.params.id);
    const updateDate = UpdateCarStruct.create(req.body);

    const updatedCar = await carService.updateCar(carId, updateDate);
    res.status(200).json(updatedCar);
  } catch (error) {
    next(error);
  }
};

//차량 삭제
export const deleteCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const carId = Number(req.params.id);
    await carService.deleteCar(carId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
