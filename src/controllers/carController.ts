import { NextFunction, Request, Response } from "express";
import { create } from "superstruct";
import { IdParamsStruct } from "../validators/CommonStruct";
import {
  CarStruct,
  UpdateCarStruct,
  GetCarListParamsStruct,
} from "../validators/CarsStructs";
import { carService } from "../services/carsService";

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
