import prisma from "../lib/prisma";

export const carRepository = {
  async createCar(
    carNumber: string,
    manufacturerId: number,
    modelId: number,
    type: "SEDAN" | "COMPACT" | "SUV",
    mileage: number,
    price: number,
    accidentCount: number,
    explanation: string,
    accidentDetails: string,
    status: "POSSESSION" | "FOR_SALE"
  ) {
    return prisma.car.create({
      data: {
        carNumber,
        modelId,
        manufacturerId,
        type,
        mileage,
        price,
        accidentCount,
        explanation,
        accidentDetails,
        status,
      },
    });
  },
};
