import NotFoundError from "../errors/NotFoundError";
import BadRequestError from "../errors/BadRequestError";
import ForbiddenError from "../errors/ForbiddenError";
import { carRepository } from "../Repositories/carsRepository";

export const carService = {
  async createCar(carData: {
    carNumber: string;
    manufacturerId: number;
    modelId: number;
    type: "SEDAN" | "COMPACT" | "SUV";
    mileage: number;
    price: number;
    accidentCount: number;
    explanation: string;
    accidentDetails: string;
    status: "POSSESSION" | "FOR_SALE";
  }) {
    return carRepository.createCar(
      carData.carNumber,
      carData.manufacturerId,
      carData.modelId,
      carData.type,
      carData.mileage,
      carData.price,
      carData.accidentCount,
      carData.explanation,
      carData.accidentDetails,
      carData.status
    );
  },
};
