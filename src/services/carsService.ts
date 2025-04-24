import NotFoundError from "../errors/NotFoundError";
import BadRequestError from "../errors/BadRequestError";
import { CarPaginationParams } from "../typings/pagination";
import carRepository from "../1/carsRepository";
import { CreateCarDTO, CarList } from "../typings/car";

async function createCar(carData: CreateCarDTO) {
  const existingCar = await carRepository.findByCarNumber(carData.carNumber);
  if (existingCar) {
    throw new BadRequestError("이미 등록된 차량 번호입니다.");
  }

  return carRepository.createCar(carData);
}

async function getCarList(params: CarPaginationParams): Promise<CarList> {
  return carRepository.getCarList(params);
}

async function getCarById(id: number) {
  const car = await carRepository.getCarById(id);
  if (!car) {
    throw new NotFoundError(id);
  }
  return car;
}

async function getAllCarModels() {
  return getAllCarModels();
}

export default {
  createCar,
  getCarList,
  getCarById,
  getAllCarModels,
};
