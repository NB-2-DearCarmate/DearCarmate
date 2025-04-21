import { Request, Response, NextFunction } from "express";
import { create } from "superstruct";
import { SearchByCompany } from "../typings/pagination";
import { createCompanyStruct } from "../validators/CompanyStructs";
import * as companyService from "../services/companiesService";

// 회사 등록
export async function createCompanyHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = create(req.body, createCompanyStruct);
    const newCompany = await companyService.registerCompany(data);
    res.status(201).json({ newCompany });
  } catch (error) {
    next(error);
  }
}

// 회사 목록조회
export async function getCompanyListHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { page = 1, pageSize = 3, orderBy, keyword, searchBy } = req.query;

    const result = await companyService.getCompanyList({
      page: Number(page),
      pageSize: Number(pageSize),
      orderBy: orderBy as "recent" | "oldest",
      keyword: keyword as string,
      searchBy: searchBy as SearchByCompany,
    });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

// 회사 별 유저 목록조회
export async function getUserByCompaniesHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { page = 1, pageSize = 8, orderBy, keyword, searchBy } = req.query;
    const result = await companyService.getUserByCompanies({
      page: Number(page),
      pageSize: Number(pageSize),
      orderBy: orderBy as "recent" | "oldest",
      keyword: keyword as string,
      searchBy: searchBy as "name" | "email" | "companyName",
    });
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
}

// 회사정보 수정
export async function updateCompanyHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body;
    const id = Number(req.params.id);
    const updatedData = await companyService.updatedCompany(id, data);
    res.status(200).json({ updatedData });
  } catch (error) {
    next(error);
  }
}

// 삭제
export async function deleteCompanyHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const data = await companyService.deleteCompany(id);
    res.status(200).json({ message: "delete!" });
  } catch (err) {
    next(err);
  }
}
