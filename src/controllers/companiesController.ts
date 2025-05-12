import { NextFunction, Request, Response } from "express";
import { create } from "superstruct";
import { SearchByCompany } from "../typings/pagination";
import {
  CreateCompanyStruct,
  PatchCompanyStruct,
  QueryStruct,
} from "../validators/CompanyStructs";
import {
  CreateCompanyDTO,
  GetCompanyListQueryDTO,
  GetCompanyListResponseDTO,
  GetCompanyByUserListDTO,
  RegisterCompanyResponseDTO,
  UpdateCompanyResponseDTO,
} from "../dto/companies.dto";
import * as companyService from "../services/companiesService";

export const createCompanyHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const data: CreateCompanyDTO = create(req.body, CreateCompanyStruct);
  const newCompany: RegisterCompanyResponseDTO =
    await companyService.registerCompany(data);
  res.status(201).json(newCompany);
};

export const getCompanyListHandler = async (
  req: Request<GetCompanyListQueryDTO, GetCompanyListResponseDTO>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const {
    page = 1,
    pageSize = 10,
    orderBy,
    searchBy,
    keyword,
  } = create(req.query, QueryStruct);

  const result = await companyService.getAllCompanies({
    page: Number(page),
    pageSize: Number(pageSize),
    orderBy: orderBy as "recent" | "oldest",
    searchBy: searchBy as SearchByCompany,
    keyword: keyword as string | undefined,
  });

  res.status(200).json(result);
};

export const getUserByCompaniesHandler = async (
  req: Request<GetCompanyListQueryDTO, GetCompanyByUserListDTO>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const {
    page = 1,
    pageSize = 10,
    orderBy,
    keyword,
    searchBy,
  } = create(req.query, QueryStruct);

  const result = await companyService.getUserByCompanies({
    page: Number(page),
    pageSize: Number(pageSize),
    orderBy: orderBy as "recent" | "oldest",
    keyword: keyword as string,
    searchBy: searchBy as "name" | "email" | "companyName",
  });

  res.status(200).json(result);
};

export const updateCompanyHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const data = create(req.body, PatchCompanyStruct);
  const id = Number(req.params.id);
  const updatedData: UpdateCompanyResponseDTO =
    await companyService.updatedCompany(id, data);
  res.status(200).json(updatedData);
};

export const deleteCompanyHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id = Number(req.params.id);
  await companyService.deleteCompany(id);
  res.status(200).json({ message: "delete!" });
};
