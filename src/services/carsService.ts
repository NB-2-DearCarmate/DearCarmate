import NotFoundError from "../errors/NotFoundError";
import BadRequestError from "../errors/BadRequestError";
import ForbiddenError from "../errors/ForbiddenError";
import { carRepository } from "../Repositories/carsRepository";
import { CreateCarDTO } from "../typings/car";

export const carService = {
  async createCar(carData: CreateCarDTO) {
    // 차량 번호 중복 체크
    const existingCar = await carRepository.findByCarNumber(carData.carNumber);
    if (existingCar) {
      throw new BadRequestError("이미 등록된 차량 번호입니다.");
    }

    return carRepository.createCar(carData);
  },
};
