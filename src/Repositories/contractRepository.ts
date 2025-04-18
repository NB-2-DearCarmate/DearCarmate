import prisma from "../lib/prisma";
import NotFoundError from "../errors/NotFoundError";
import { ContractType } from "../typings/contract";

async function getContractList(where: {}, { cursor, limit }: any) {
  const contractWithCursor = await prisma.contract.findMany({
    cursor: cursor ? { id: cursor } : undefined,
    take: limit + 1,
    orderBy: { createdAt: "desc" },
  });
  const contracts = contractWithCursor.slice(0, limit);
  const cursorContract = contractWithCursor[contractWithCursor.length - 1];
  const nextCursor = cursorContract ? cursorContract.id : null;

  return {
    list: contracts,
    nextCursor,
  };
}

async function save(
  data: Omit<ContractType, "id" | "createdAt" | "updatedAt">
) {
  const creatContract = await prisma.contract.create({
    data,
  });

  return creatContract;
}

async function getCarId(id: number) {
  const car = await prisma.car.findUnique({ where: { id } });
  if (!car) {
    throw new NotFoundError(id);
  }

  return car;
}

async function getCustomerId(id: number) {
  const customer = await prisma.customer.findUnique({ where: { id } });
  if (!customer) {
    throw new NotFoundError(id);
  }

  return customer;
}

async function getById(id: number) {
  const contract = await prisma.contract.findUnique({ where: { id } });
  if (!contract) {
    throw new NotFoundError(id);
  }

  return contract;
}

async function update(id: number, data: Partial<ContractType>) {
  const updatedContract = await prisma.contract.update({
    where: { id },
    data,
  });

  if (!updatedContract) {
    throw new NotFoundError(id);
  }

  return updatedContract;
}

async function deleteById(id: number) {
  const contract = await prisma.contract.delete({
    where: { id },
  });

  if (!contract) {
    throw new NotFoundError(id);
  }

  return contract;
}

export default {
  getContractList,
  getCarId,
  getCustomerId,
  save,
  getById,
  update,
  deleteById,
};
