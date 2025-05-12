import prisma from "../lib/prisma";
import { CarData } from "../typings/car";
import { CarPaginationParams } from "../typings/pagination";
import { CarStatus, Prisma } from "@prisma/client";

// Car 등록
async function createCar(carData: CarData) {
  return prisma.car.create({
    data: carData,
    include: {
      model: {
        include: {
          manufacturer: true,
        },
      },
    },
  });
}

// DB에서 Model정보 조회
async function findModel({
  name,
  manufacturerName,
}: {
  name: string;
  manufacturerName: string;
}) {
  return prisma.models.findFirst({
    where: {
      name,
      manufacturer: {
        name: manufacturerName,
      },
    },
    include: {
      manufacturer: true,
    },
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
  status,
  orderBy,
  searchBy,
  keyword,
  companyId,
}: CarPaginationParams) {
  const where: Prisma.CarWhereInput = {
    deletedAt: null,
    companyId,
  };

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
      model: {
        include: {
          manufacturer: true,
        },
      },
    },
  });

  return {
    currentPage: page,
    totalPages: Math.ceil(totalCount / pageSize),
    totalItemCount: totalCount,
    data: cars,
  };
}

// Car ID로 정보 조회
async function getCarById(id: number) {
  const car = await prisma.car.findUnique({
    where: { id },
    include: {
      model: {
        include: {
          manufacturer: true,
        },
      },
    },
  });
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
async function updateCar(id: number, updateData: Partial<CarData>) {
  return prisma.car.update({
    where: { id },
    data: updateData,
    include: {
      model: {
        include: {
          manufacturer: true,
        },
      },
    },
  });
}

// Car 삭제
async function deleteCar(id: number) {
  return prisma.car.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
}

// 대량 차량 등록
async function bulkCreateCars(
  tx: Prisma.TransactionClient,
  carList: CarData[]
) {
  return tx.car.createMany({
    data: carList,
    skipDuplicates: true,
  });
}

async function bulkFindModel(
  tx: Prisma.TransactionClient,
  options: { name: string; manufacturerName: string }
) {
  return tx.models.findFirst({
    where: {
      name: options.name,
      manufacturer: {
        name: options.manufacturerName,
      },
    },
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
  findModel,
  bulkFindModel,
};
