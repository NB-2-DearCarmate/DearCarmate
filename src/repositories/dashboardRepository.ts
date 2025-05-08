import NotFoundError from "../errors/NotFoundError";
import prisma from "../lib/prisma";

const getCompanyIdByUser = async (userId: number) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new NotFoundError("유저");
  }

  const companyId = user.companyId;

  if (!companyId) {
    throw new NotFoundError("회사");
  }
  return companyId;
};

const getMonthcompleted = async (companyId: number) => {
  const now = new Date();
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfThisMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const thisMonth = await prisma.contract.findMany({
    where: {
      companyId,
      status: "contractSuccessful",
      resolutionDate: {
        gte: startOfLastMonth,
        lt: startOfThisMonth,
      },
    },
    select: {
      contractPrice: true,
    },
  });

  const totalPrice = thisMonth.reduce((sum, contract) => {
    return sum + (contract.contractPrice ?? 0);
  }, 0);

  return totalPrice;
};

const getLastCompleted = async (companyId: number) => {
  const now = new Date();
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const lastMonth = await prisma.contract.findMany({
    where: {
      companyId,
      status: "contractSuccessful",
      resolutionDate: {
        gte: startOfLastMonth,
        lt: startOfThisMonth,
      },
    },
    select: {
      contractPrice: true,
    },
  });

  const totalPrice = lastMonth.reduce((sum, contract) => {
    return sum + (contract.contractPrice ?? 0);
  }, 0);

  return totalPrice;
};

const proceedingContract = async (companyId: number) => {
  const contractCount = await prisma.contract.count({
    where: {
      companyId,
      status: { in: ["carInspection", "contractDraft", "priceNegotiation"] },
    },
  });

  return contractCount;
};

const completedContract = async (companyId: number) => {
  const cotractCount = await prisma.contract.count({
    where: {
      companyId,
      status: "contractSuccessful",
    },
  });

  return cotractCount;
};

const getCompletedCarType = async (companyId: number) => {
  const carType = await prisma.contract.findMany({
    where: {
      companyId,
      status: "contractSuccessful",
    },
    select: {
      car: {
        select: {
          model: true,
        },
      },
    },
  });

  const counts: Record<string, number> = {};

  carType.forEach((carType) => {
    const type = carType.car.model.type;
    if (type) {
      counts[type] = (counts[type] || 0) + 1;
    }
  });

  const result = Object.entries(counts).map(([type, count]) => ({
    carType: type,
    count,
  }));

  return result;
};

const getSaleCarType = async (companyId: number) => {
  const carType = await prisma.contract.findMany({
    where: {
      companyId,
      status: "contractSuccessful",
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

  const salesMap: Record<string, number> = {};

  for (const item of carType) {
    const modelName = item.car.model.type;
    const price = item.contractPrice ?? 0;

    salesMap[modelName] = (salesMap[modelName] || 0) + price;
  }

  const result = Object.entries(salesMap).map(([model, total]) => ({
    carType: model,
    count: total,
  }));

  return result;
};

export default {
  getCompanyIdByUser,
  getMonthcompleted,
  getLastCompleted,
  proceedingContract,
  completedContract,
  getCompletedCarType,
  getSaleCarType,
};
