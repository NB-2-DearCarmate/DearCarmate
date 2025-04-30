import { Request, Response } from "express";
import UnauthorizedError from "../errors/UnauthorizedError";
import dashboardService from "../services/dashboardService";

export const dashboardResult = async (req: Request, res: Response) => {
  const userId = req.user.id;
  if (!userId) {
    throw new UnauthorizedError();
  }

  const monthlySales = await dashboardService.getMonthly(userId);
  const lastMonthSales = await dashboardService.getLastMonthly(userId);

  let growthRate = 0;

  if (lastMonthSales === 0) {
    growthRate = monthlySales > 0 ? 1 : 0;
  } else {
    growthRate = monthlySales / lastMonthSales;
  }

  const proceedingContractsCount = await dashboardService.proceedingContracts(
    userId
  );
  const completedContractsCount = await dashboardService.completedContracts(
    userId
  );
  const contractsByCarType = await dashboardService.contractsByCarType(userId);
  const salesByCarType = await dashboardService.salesByCarType(userId);

  const result = {
    monthlySales: monthlySales,
    lastMonthSales: lastMonthSales,
    growthRate: growthRate,
    proceedingContractsCount: proceedingContractsCount,
    completedContractsCount: completedContractsCount,
    contractsByCarType: contractsByCarType,
    salesByCarType: salesByCarType,
  };

  return result;
};
