import companiesRepo from "../repositories/companiesRepository";
import * as usersRepo from "../repositories/usersRepository";
import {
  PaginationParams,
  SearchByCompany,
  SearchByCompanyUsers,
} from "../typings/pagination";
import { UserWhereInput } from "../typings/user";
import { GetAllCompaniesResponse } from "../typings/company";
import { Company } from "@prisma/client";
import {
  RegisterCompany,
  UpdateCompany,
  UpdateCompanyUserCount,
  RegitsterCompanyInput,
} from "../typings/company";
import NotFoundError from "../errors/NotFoundError";
import BadRequestError from "../errors/BadRequestError";

// 일반유저x 관리자 전용 기능
// 회사 등록
export const registerCompany = async (
  data: RegitsterCompanyInput
): Promise<RegisterCompany> => {
  const newCompany = await companiesRepo.createCompany(data);

  if (!newCompany) {
    throw new BadRequestError("잘못된 요청입니다.");
  }
  const userCount = await companiesRepo.getUserCount(newCompany.id);
  return {
    ...newCompany,
    userCount,
  };
};

// 목록조회
export const getAllCompanies = async ({
  page,
  pageSize,
  orderBy,
  searchBy,
  keyword,
}: PaginationParams<SearchByCompany>): Promise<GetAllCompaniesResponse> => {
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
    totalPages: Math.ceil(totalCount / pageSize),
    totalItemCount: totalCount,
    data: companyUserCount,
  };
};

// 회사 별 유저 리스트
export const getUserByCompanies = async ({
  page,
  pageSize,
  orderBy,
  searchBy,
  keyword,
}: PaginationParams<SearchByCompanyUsers>) => {
  const where: UserWhereInput = {};

  if (keyword && searchBy) {
    switch (searchBy) {
      case "name":
        where.name = { contains: keyword };
        break;
      case "email":
        where.email = { contains: keyword };
        break;
      case "companyName":
        where.company = { companyName: { contains: keyword } };
        break;
    }
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
};

// 회사정보 수정
export const updatedCompany = async (
  id: number,
  data: UpdateCompany
): Promise<UpdateCompanyUserCount> => {
  if (!id || id <= 0) {
    throw new NotFoundError("회사");
  }
  if (!data.companyCode?.trim() || !data.companyName?.trim()) {
    throw new BadRequestError("필수 입력 값이 없습니다.");
  }
  const newCompany = await companiesRepo.patchCompany(id, data);
  const userCount = await companiesRepo.getUserCount(id);

  const { createdAt, updatedAt, ...rest } = newCompany;

  return { ...rest, userCount };
};

// 삭제
export const deleteCompany = async (id: number): Promise<Company> => {
  if (!id || id <= 0) {
    throw new NotFoundError("회사");
  }

  const deleteCompany = await companiesRepo.removeCompany(id);
  return deleteCompany;
};
