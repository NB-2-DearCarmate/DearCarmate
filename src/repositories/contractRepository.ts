import prisma from "../lib/prisma";
import NotFoundError from "../errors/NotFoundError";
import { ContractType } from "../typings/contract";
import { CursorPaginationParams } from "../typings/pagination";
import { ContractStatus } from "../typings/contract";

const getContractList = async (
  companyId: number,
  { cursor, limit }: CursorPaginationParams,
  status: ContractStatus
) => {
  const contractWithCursor = await prisma.contract.findMany({
    where: { user: { companyId }, status },
    include: {
      car: true,
      customer: true,
      user: true,
      meetings: {
        include: { alarms: true },
      },
    },
    cursor: cursor ? { id: cursor } : undefined,
    take: limit + 1,
    orderBy: { createdAt: "desc" },
  });
  const contracts = contractWithCursor.slice(0, limit);
  const cursorContract = contractWithCursor[contractWithCursor.length - 1];
  const nextCursor = cursorContract ? cursorContract.id : null;
  const totalContract = await prisma.contract.count({
    where: { user: { companyId }, status },
  });

  return {
    list: contracts,
    nextCursor,
    totalContract,
  };
};

const save = async (
  data: Omit<ContractType, "id" | "createdAt" | "updatedAt">
) => {
  const createContract = await prisma.contract.create({
    data: {
      carId: data.carId,
      customerId: data.customerId,
      userId: data.userId,
      status: data.status,
      contractPrice: data.contractPrice,
    },
  });

  return createContract;
};

const getCarId = async (id: number) => {
  const car = await prisma.car.findUnique({ where: { id } });
  if (!car) {
    throw new NotFoundError(id);
  }

  return car;
};

const updateCarStatus = async (carId: number) => {
  const createContract = await prisma.car.update({
    where: { id: carId },
    data: {
      status: "CONTRACT_PROCEEDING",
    },
  });

  return createContract;
};

const getCustomerId = async (id: number) => {
  const customer = await prisma.customer.findUnique({ where: { id } });
  if (!customer) {
    throw new NotFoundError(id);
  }

  return customer;
};

const getUserId = async (id: number) => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new NotFoundError(id);
  }

  return user;
};

const getModelId = async (id: number) => {
  const model = await prisma.models.findUnique({ where: { id } });
  if (!model) {
    throw new NotFoundError(id);
  }

  return model;
};

const getById = async (id: number) => {
  const contract = await prisma.contract.findUnique({ where: { id } });
  if (!contract) {
    throw new NotFoundError(id);
  }

  return contract;
};

const update = async (id: number, data: Partial<ContractType>) => {
  const updatedContract = await prisma.contract.update({
    where: { id },
    data
  });

  return updatedContract;
};

const completedCar = async (carId: number) => {
  const updateStatus = await prisma.car.update({
    where: { id: carId },
    data: {
      status: "CONTRACT_COMPLETED",
    },
  });

  return updateStatus;
};

const deleteById = async (id: number) => {
  const contract = await prisma.contract.delete({
    where: { id },
  });

  return contract;
};

export default {
  getContractList,
  getCarId,
  getCustomerId,
  save,
  getById,
  update,
  deleteById,
  updateCarStatus,
  getUserId,
  completedCar,
  getModelId,
};
