import * as companiesRepo from "../1/companiesRepository";
import { Company } from "@prisma/client";
import { PaginationParams, SearchByCompany } from "../typings/pagination";
import {
  RegisterCompany,
  CompanyList,
  companyByUserList,
  UpdateCompany,
} from "../typings/company";

import BadRequestError from "../errors/BadRequestError";
import NotFoundError from "../errors/NotFoundError";
import UnauthorizedError from "../errors/UnauthorizedError";

// 일반유저x 관리자 전용 기능
// 회사 등록
export async function registerCompany(
  data: Omit<Company, "id" | "updatedAt" | "createdAt">
): Promise<RegisterCompany> {
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
): Promise<CompanyList> {
  return await companiesRepo.getAllCompanies(params);
}

// 회사 별 유저 리스트
export async function getUserByCompanies(
  params: PaginationParams<"name" | "email" | "companyName">
): Promise<companyByUserList> {
  return await companiesRepo.getUserByCompany(params);
}

// 회사정보 수정
export async function updatedCompany(
  id: number,
  data: Partial<Company>
): Promise<UpdateCompany> {
  if (!id || id <= 0) {
    throw new NotFoundError(id);
  }
  // if(!isUser) {
  //   throw new UnauthorizedError(user);
  // } 로그인기능완성되면 수정
  const newCompany = await companiesRepo.patchCompany(id, data);
  return newCompany;
}

// 삭제
export async function deleteCompany(id: number) {
  if (!id || id <= 0) {
    throw new NotFoundError(id);
  }
  // if(!isUser) {
  //   throw new UnauthorizedError(user);
  // }
  const deleteCompany = await companiesRepo.removeCompany(id);
  return deleteCompany;
}
