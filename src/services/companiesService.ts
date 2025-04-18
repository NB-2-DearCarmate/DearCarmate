import * as companiesRepo from "../Repositories/companiesRepository";
import { Company } from "@prisma/client";
import BadRequestError from "../errors/BadRequestError";
import NotFoundError from "../errors/NotFoundError";
import { PaginationParams, SearchByCompany } from "../typings/pagination";

// 회사 등록
export async function registerCompany(
  data: Omit<Company, "id" | "updatedAt" | "createdAt">
) {
  const newCompany = await companiesRepo.createCompany(data);
  const userCount = await companiesRepo.getUserCount(newCompany.id);

  if (!newCompany) {
  }

  return {
    ...newCompany,
    userCount,
  };
}

// 목록조회
export async function getCompanyList(
  params: PaginationParams<SearchByCompany>
) {
  return await companiesRepo.getAllCompanies(params);
}
