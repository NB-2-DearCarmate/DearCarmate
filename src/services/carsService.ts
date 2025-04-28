import NotFoundError from "../errors/NotFoundError";
import BadRequestError from "../errors/BadRequestError";
import { CarPaginationParams } from "../typings/pagination";
import carRepository from "../repositories/carsRepository";
import { Car, CarList, UpdateCar } from "../typings/car";
import carsRepository from "../repositories/carsRepository";

async function createCar(carData: Car) {
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
  const manufacturers = await carRepository.getAllCarModels();

  const result = manufacturers.map((manufacturer) => ({
    manufacturer: manufacturer.name,
    model: manufacturer.Models.map((model) => model.name),
  }));

  return { data: result };
}

async function updateCar(id: number, updateDate: UpdateCar) {
  const existingCar = await carsRepository.getCarById(id);
  if (!existingCar) {
    throw new NotFoundError(id);
  }

  const updateCar = await carsRepository.updateCar(id, updateDate);
  return updateCar;
}

async function deleteCar(id: number) {
  const existingCar = await carRepository.getCarById(id);
  if (!existingCar) {
    throw new NotFoundError(id);
  }
  return await carsRepository.deleteCar(id);
}

async function bulkCreateCarsService(carList: Car[]) {
  if (!carList.length) {
    throw new Error("등록할 차량 정보가 없습니다.");
  }
  return await carRepository.bulkCreateCars(carList);
}

export default {
  createCar,
  getCarList,
  getCarById,
  getAllCarModels,
  updateCar,
  deleteCar,
  bulkCreateCarsService,
};
