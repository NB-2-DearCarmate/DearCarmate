import prisma from "../lib/prisma";
import { CreateCarDTO } from "../typings/car";

export const carRepository = {
  async createCar(carData: CreateCarDTO) {
    return prisma.car.create({
      data: carData,
    });
  },

  async findByCarNumber(carNumber: string) {
    return prisma.car.findFirst({
      //findUnique로 변경해야함. 임시 테스트
      where: { carNumber },
    });
  },
};
