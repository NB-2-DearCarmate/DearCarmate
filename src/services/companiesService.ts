import * as companiesRepo from "../Repositories/companiesRepository";
import { Company } from "@prisma/client";
import { Prisma } from "@prisma/client";
import * as usersRepo from "../Repositories/usersRepository";
import { PaginationParams, SearchByCompany } from "../typings/pagination";
import {
  RegisterCompany,
  CompanyList,
  companyByUserList,
  UpdateCompany,
} from "../typings/company";

import NotFoundError from "../errors/NotFoundError";

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
export async function getAllCompanies({
  page,
  pageSize,
  orderBy,
  searchBy,
  keyword,
}: PaginationParams<SearchByCompany>) {
  const where =
    keyword && searchBy ? { [searchBy]: { contains: keyword } } : {};

  const totalCount = await companiesRepo.countCompanies(where);
  const order = orderBy === "oldest" ? "asc" : "desc";
  const companies = await companiesRepo.findCompanies(
    where,
    order,
    (page - 1) * pageSize,
    pageSize
  );

  const companyUserCount = await Promise.all(
    companies.map(async (c) => {
      const userCount = await companiesRepo.getUserCount(c.id);
      return {
        id: c.id,
        companyName: c.companyName,
        companyCode: c.companyCode,
        userCount,
      };
    })
  );

  return {
    currentPage: page,
    totalPage: Math.ceil(totalCount / pageSize),
    totalItemCount: totalCount,
    data: companyUserCount,
  };
}

// 회사 별 유저 리스트
export async function getUserByCompanies({
  page,
  pageSize,
  orderBy,
  searchBy,
  keyword,
}: {
  page: number;
  pageSize: number;
  orderBy: "recent" | "oldest";
  searchBy?: "name" | "email" | "companyName";
  keyword?: string;
}) {
  const where: Prisma.UserWhereInput = {};

  if (keyword && searchBy === "companyName") {
    where.company = {
      companyName: {
        contains: keyword,
      },
    };
  } else if (keyword && (searchBy === "name" || searchBy === "email")) {
    where[searchBy] = {
      contains: keyword,
    };
  }

  const order = orderBy === "oldest" ? "asc" : "desc";
  const skip = (page - 1) * pageSize;
  const take = pageSize;

  const totalItemCount = await usersRepo.getAllUserCount(where);
  const totalPage = Math.ceil(totalItemCount / pageSize);

  const users = await usersRepo.findUsers(where, order, skip, take);

  return {
    currentPage: page,
    totalPage,
    totalItemCount,
    data: users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      employeeNumber: user.employeeNumber,
      phoneNumber: user.phoneNumber,
      company: {
        companyName: user.company?.companyName,
      },
    })),
  };
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
