import dashboardRepository from "../repositories/dashboardRepository";
import prisma from "../lib/prisma";

const getDashboardData = async (companyId: number) => {
  return await prisma.$transaction(async (tx) => {
    const now = new Date();
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    const [
      thisMonthContract,
      lastMonthContract,
      proceedingContractsCount,
      completedContractsCount,
      contractsByCarTypeRaw,
      salesByCarTypeRaw,
    ] = await Promise.all([
      dashboardRepository.getMonthcompleted(
        companyId,
        startOfThisMonth,
        startOfNextMonth
      ),
      dashboardRepository.getLastCompleted(
        companyId,
        startOfLastMonth,
        startOfThisMonth
      ),
      dashboardRepository.proceedingContract(companyId),
      dashboardRepository.completedContract(companyId),
      dashboardRepository.getCompletedCarType(companyId),
      dashboardRepository.getSaleCarType(companyId),
    ]);

    console.log("Data retrieved from database successfully");

    const monthlySales = thisMonthContract.reduce(
      (sum, c) => sum + (c.contractPrice ?? 0),
      0
    );

    console.log(monthlySales);
    const lastMonthSales = lastMonthContract.reduce(
      (sum, c) => sum + (c.contractPrice ?? 0),
      0
    );

    console.log(lastMonthSales);
    const growthRate =
      lastMonthSales === 0
        ? monthlySales > 0
          ? 1
          : 0
        : ((monthlySales - lastMonthSales) / lastMonthSales) * 100;

    console.log(growthRate);
    const contractsByCarTypeMap: Record<string, number> = {};
    contractsByCarTypeRaw.forEach(({ car }) => {
      const type = car.model.type;
      contractsByCarTypeMap[type] = (contractsByCarTypeMap[type] || 0) + 1;
    });
    console.log(contractsByCarTypeMap);

    const salesByCarTypeMap: Record<string, number> = {};
    salesByCarTypeRaw.forEach(({ contractPrice, car }) => {
      const type = car.model.type;
      salesByCarTypeMap[type] =
        (salesByCarTypeMap[type] || 0) + (contractPrice ?? 0);
    });
    console.log(salesByCarTypeMap);

    return {
      monthlySales,
      lastMonthSales,
      growthRate,
      proceedingContractsCount,
      completedContractsCount,
      contractsByCarType: Object.entries(contractsByCarTypeMap).map(
        ([type, count]) => ({ carType: type, count })
      ),
      salesByCarType: Object.entries(salesByCarTypeMap).map(
        ([type, count]) => ({ carType: type, count })
      ),
    };
  });
};

export default {
  getDashboardData,
};
