import prisma from "../lib/prisma";
import { ContractStatus } from "../typings/contract";

const getMonthcompleted = async (companyId: number, start: Date, end: Date) => {
  const thisMonth = await prisma.contract.findMany({
    where: {
      companyId,
      status: "contractSuccessful" as ContractStatus,
      resolutionDate: {
        gte: start,
        lt: end,
      },
    },
    select: {
      contractPrice: true,
    },
  });

  return thisMonth;
};

const getLastCompleted = async (companyId: number, start: Date, end: Date) => {
  const lastMonth = await prisma.contract.findMany({
    where: {
      companyId,
      status: "contractSuccessful" as ContractStatus,
      resolutionDate: {
        gte: start,
        lt: end,
      },
    },
    select: {
      contractPrice: true,
    },
  });

  return lastMonth;
};

const proceedingContract = async (companyId: number) => {
  const contractCount = await prisma.contract.count({
    where: {
      companyId,
      status: {
        in: [
          "carInspection",
          "contractDraft",
          "priceNegotiation" as ContractStatus,
        ],
      },
    },
  });

  return contractCount;
};

const completedContract = async (companyId: number) => {
  const cotractCount = await prisma.contract.count({
    where: {
      companyId,
      status: "contractSuccessful" as ContractStatus,
    },
  });

  return cotractCount;
};

const getCompletedCarType = async (companyId: number) => {
  const carType = await prisma.contract.findMany({
    where: {
      companyId,
      status: "contractSuccessful" as ContractStatus,
    },
    select: {
      car: {
        select: {
          model: true,
        },
      },
    },
  });
  return carType;
};

const getSaleCarType = async (companyId: number) => {
  const carType = await prisma.contract.findMany({
    where: {
      companyId,
      status: "contractSuccessful" as ContractStatus,
    },
    select: {
      contractPrice: true,
      car: {
        select: {
          model: {
            select: {
              type: true,
            },
          },
        },
      },
    },
  });

  console.log(carType);
  return carType;
};

export default {
  getMonthcompleted,
  getLastCompleted,
  proceedingContract,
  completedContract,
  getCompletedCarType,
  getSaleCarType,
};
