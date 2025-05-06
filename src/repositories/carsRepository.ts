import prisma from "../lib/prisma";
import { Car, UpdateCar } from "../typings/car";
import { CarPaginationParams } from "../typings/pagination";
import { CarStatus, Prisma } from "@prisma/client";

// Car 등록
async function createCar(carData: Car) {
  return prisma.car.create({
    data: carData,
  });
}

// carNumber 일치 비교
async function findByCarNumber(carNumber: string) {
  return prisma.car.findUnique({
    where: { carNumber },
  });
}

// Car carNumber, model로 정보 조회
async function getCarList({
  page,
  pageSize,
  status = CarStatus.possession,
  orderBy,
  searchBy,
  keyword,
}: CarPaginationParams) {
  const where: Prisma.CarWhereInput = {};

  if (status) {
    where.status = status as CarStatus;
  }

  if (searchBy && keyword) {
    if (searchBy === "carNumber") {
      where.carNumber = { contains: keyword, mode: "insensitive" };
    } else if (searchBy === "model") {
      where.model = {
        name: { contains: keyword, mode: "insensitive" },
      };
    }
  }

  const totalCount = await prisma.car.count({ where });

  const order = orderBy === "oldest" ? "asc" : "desc";

  const cars = await prisma.car.findMany({
    where,
    orderBy: { createdAt: order },
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: {
      model: true,
    },
  });

  return {
    currentPage: page,
    totalPage: Math.ceil(totalCount / pageSize),
    totalItemCount: totalCount,
    data: cars,
  };
}

// Car ID로 정보 조회
async function getCarById(id: number) {
  const car = await prisma.car.findUnique({ where: { id } });
  return car;
}

// 전체 제조사와 그에 속한 모델들을 조회
async function getAllCarModels() {
  const manufacturers = await prisma.manufacturers.findMany({
    include: {
      Models: {
        include: {
          manufacturer: true,
        },
      },
    },
  });

  return manufacturers;
}

// Car 수정
async function updateCar(id: number, updateDate: UpdateCar) {
  return prisma.car.update({
    where: { id },
    data: updateDate,
  });
}

// Car 삭제
async function deleteCar(id: number) {
  return prisma.car.delete({
    where: { id },
  });
}

// 대량 차량 등록
async function bulkCreateCars(carList: Car[]) {
  return prisma.car.createMany({
    data: carList,
    skipDuplicates: true,
  });
}

export default {
  createCar,
  findByCarNumber,
  getCarList,
  getCarById,
  getAllCarModels,
  updateCar,
  deleteCar,
  bulkCreateCars,
};
