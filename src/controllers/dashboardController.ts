import { Request, Response } from "express";
import UnauthorizedError from "../errors/UnauthorizedError";
import dashboardService from "../services/dashboardService";
import NotFoundError from "../errors/NotFoundError";
import { DashboardDTO } from "../dto/dashboardDTO";

export const dashboardController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const companyId = req.user.companyId;
  if (!userId) {
    throw new UnauthorizedError();
  }

  if (!companyId) {
    throw new NotFoundError("회사");
  }

  const data: DashboardDTO = await dashboardService.getDashboardData(companyId);

  res.status(200).send(data);
};
