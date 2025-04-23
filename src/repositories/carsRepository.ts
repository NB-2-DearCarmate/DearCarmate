import prisma from "../lib/prisma";
import { CreateCarDTO } from "../typings/car";
import { CarPaginationParams } from "../typings/pagination";
import { VehicleStatus, Prisma } from "@prisma/client";

// Car 등록
async function createCar(carData: CreateCarDTO) {
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
  status = VehicleStatus.POSSESSION,
  orderBy,
  searchBy,
  keyword,
}: CarPaginationParams) {
  const where: Prisma.CarWhereInput = {};

  if (status) {
    where.status = status as VehicleStatus;
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
        select: {
          name: true,
        },
      },
    },
  });

  const result = manufacturers.map((manufacturer) => ({
    manufacturer: manufacturer.name,
    model: manufacturer.Models.map((model) => model.name),
  }));

  return { data: result };
}

export default {
  createCar,
  findByCarNumber,
  getCarList,
  getCarById,
  getAllCarModels,
};
