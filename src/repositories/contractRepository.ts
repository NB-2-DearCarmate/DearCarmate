import prisma from "../lib/prisma";
import NotFoundError from "../errors/NotFoundError";
import { ContractType, ContractStatus } from "../typings/contract";
import { ContractStatus as PrismaContractStatus } from "@prisma/client";
const getContractList = async (
  companyId: number,
  {
    searchBy,
    keyword,
  }: { searchBy: "customerName" | "userName"; keyword: string },
  status: ContractStatus
) => {
  const whereClause: any = {
    user: { companyId },
    status,
  };

  if (keyword && searchBy) {
    if (searchBy === "customerName") {
      whereClause.customer = {
        name: {
          contains: keyword,
          mode: "insensitive",
        },
      };
    } else if (searchBy === "userName") {
      whereClause.user = {
        name: {
          contains: keyword,
          mode: "insensitive",
        },
      };
    }
  }
  const contractWithCursor = await prisma.contract.findMany({
    where: whereClause,
    include: {
      car: {
        include: { model: true },
      },
      customer: true,
      user: true,
      meetings: {
        include: { alarms: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const contracts = contractWithCursor.slice(0, 5);
  const totalContract = await prisma.contract.count({
    where: { user: { companyId }, status },
  });

  return {
    list: contracts,
    totalContract,
  };
};

const getCustomerList = async (companyId: number) => {
  const customerList = await prisma.customer.findMany({
    where: { companyId, deletedAt: null },
    select: {
      id: true,
      name: true,
    },
  });

  return customerList;
};

const getCarList = async (companyId: number) => {
  const carList = await prisma.car.findMany({
    where: { companyId, status: "possession" },
    select: {
      id: true,
      carNumber: true,
      model: {
        select: {
          name: true,
        },
      },
    },
  });

  const carListResult = carList.map((car) => ({
    id: car.id,
    name: `${car.model.name}(${car.carNumber})`,
  }));

  return carListResult;
};

const getUserList = async (companyId: number) => {
  const userList = await prisma.user.findMany({
    where: { companyId, deletedAt: null },
    select: {
      id: true,
      name: true,
    },
  });

  return userList;
};

const save = async (
  data: Omit<ContractType, "id" | "createdAt" | "updatedAt">
) => {
  const {
    carId,
    customerId,
    userId,
    companyId,
    status,
    resolutionDate,
    contractPrice,
  } = data;

  const createContract = await prisma.contract.create({
    data: {
      carId,
      customerId,
      userId,
      companyId,
      status: PrismaContractStatus.carInspection,
      resolutionDate,
      contractPrice,
    },
    select: {
      id: true,
      status: true,
      resolutionDate: true,
      contractPrice: true,
      meetings: {
        select: {
          date: true,
          alarms: {
            select: {
              alarmAt: true,
            },
          },
        },
      },
      user: {
        select: {
          id: true,
          name: true,
        },
      },
      customer: {
        select: {
          id: true,
          name: true,
        },
      },
      car: {
        select: {
          id: true,
          model: {
            select: { name: true },
          },
        },
      },
    },
  });

  return createContract;
};

const getCarId = async (id: number) => {
  const car = await prisma.car.findUnique({ where: { id } });
  if (!car) {
    throw new NotFoundError("차량");
  }

  return car;
};

const updateCarStatus = async (carId: number) => {
  const createContract = await prisma.car.update({
    where: { id: carId },
    data: {
      status: "contractProceeding",
    },
  });

  return createContract;
};

const getCustomerId = async (id: number) => {
  const customer = await prisma.customer.findUnique({ where: { id } });
  if (!customer) {
    throw new NotFoundError("고객");
  }

  return customer;
};

const getUserId = async (id: number) => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new NotFoundError("유저");
  }

  return user;
};

const getModelId = async (id: number) => {
  const model = await prisma.models.findUnique({ where: { id } });
  if (!model) {
    throw new NotFoundError("모델");
  }

  return model;
};

const getById = async (id: number) => {
  const contract = await prisma.contract.findUnique({ where: { id } });
  if (!contract) {
    throw new NotFoundError("미팅");
  }

  return contract;
};

const update = async (id: number, data: Partial<ContractType>) => {
  const updatedContract = await prisma.contract.update({
    where: { id },
    data,
    select: {
      id: true,
      status: true,
      resolutionDate: true,
      contractPrice: true,
      meetings: {
        select: {
          date: true,
          alarms: {
            select: {
              alarmAt: true,
            },
          },
        },
      },
      user: {
        select: {
          id: true,
          name: true,
        },
      },
      customer: {
        select: {
          id: true,
          name: true,
        },
      },
      car: {
        select: {
          id: true,
          model: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return updatedContract;
};

const verifyDocumentsExist = async (documentIds: number[]) => {
  const found = await prisma.contractDocument.findMany({
    where: {
      id: { in: documentIds },
    },
    select: { id: true },
  });

  const foundIds = new Set(found.map((doc) => doc.id));
  const missingIds = documentIds.filter((id) => !foundIds.has(id));

  if (missingIds.length > 0) {
    throw new NotFoundError("계약서");
  }
};

const updateContractDocuments = async (
  contractId: number,
  newDocumentIds: number[]
) => {
  const contract = await prisma.contract.findUnique({
    where: { id: contractId },
    select: { documents: { select: { id: true } } },
  });

  if (!contract) throw new Error("Contract not found");

  const currentIds = contract.documents.map((doc) => doc.id);

  const toDisconnect = currentIds.filter((id) => !newDocumentIds.includes(id));
  const toConnect = newDocumentIds.filter((id) => !currentIds.includes(id));

  return await prisma.contract.update({
    where: { id: contractId },
    data: {
      documents: {
        disconnect: toDisconnect.map((id) => ({ id })),
        connect: toConnect.map((id) => ({ id })),
      },
    },
  });
};

const completedCar = async (carId: number) => {
  const updateStatus = await prisma.car.update({
    where: { id: carId },
    data: {
      status: "contractCompleted",
    },
  });

  return updateStatus;
};

const failedCar = async (carId: number) => {
  const updateStatus = await prisma.car.update({
    where: { id: carId },
    data: {
      status: "possession",
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

const carStatus = async (id: number) => {
  const update = await prisma.car.update({
    where: { id },
    data: {
      status: "possession",
    },
  });

  return update;
};

export default {
  getContractList,
  save,
  getById,
  update,
  deleteById,
  updateCarStatus,
  getUserId,
  completedCar,
  getModelId,
  getCustomerId,
  getUserList,
  getCustomerList,
  getCarList,
  getCarId,
  failedCar,
  updateContractDocuments,
  verifyDocumentsExist,
  carStatus,
};
