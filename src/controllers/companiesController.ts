import { Request, Response, NextFunction } from "express";
import { createCompanyService } from "../services/companiesService";

export async function createCompanyController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { companyName, companyCode } = req.body;

    const newCompany = await createCompanyService({
      companyCode,
      companyName,
    });

    return res.status(201).json({ newCompany });
  } catch (error) {
    next(error);
  }
}
