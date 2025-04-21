import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";
import { Company } from "@prisma/client";
import {
  PaginationParams,
  SearchByCompany,
  SearchByUser,
} from "../typings/pagination";

// 회사 등록
export async function createCompany(
  data: Omit<Company, "id" | "createdAt" | "updatedAt">
) {
  return await prisma.company.create({ data });
}

// 회사에 속한 유저 카운트
export async function getUserCount(companyId: number) {
  return prisma.user.count({
    where: { companyId },
  });
}

// 목록 조회
export async function getAllCompanies({
  page,
  pageSize,
  orderBy,
  searchBy,
  keyword,
}: PaginationParams<SearchByCompany>) {
  const where =
    keyword && searchBy ? { [searchBy]: { contains: keyword } } : {};
  // 키워드 서치바이 모두 있으면 키워드 생성하기 없으면 ㅌ
  // {기준: 찾는값}
  const totalCount = await prisma.company.count({ where });
  const order = orderBy === "oldest" ? "asc" : "desc";
  const companies = await prisma.company.findMany({
    where,
    orderBy: { createdAt: order },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const companyUserCount = await Promise.all(
    companies.map(async (c) => {
      const userCount = await getUserCount(c.id);
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

// 회사 별 유저조회
export async function getUserByCompany({
  page,
  pageSize,
  orderBy,
  searchBy,
  keyword,
}: PaginationParams<"name" | "email" | "companyName">) {
  // 유저 -> 컴퍼니
  // 회사 기준
  const where: Prisma.UserWhereInput = {};
  if (keyword && searchBy === "companyName") {
    where.company = {
      companyName: {
        contains: keyword,
      },
    };
    //유저 이름, 이메일
  } else if (keyword && (searchBy === "name" || searchBy === "email")) {
    where[searchBy] = {
      contains: keyword,
    };
  }
  keyword && searchBy ? { [searchBy]: { contains: keyword } } : {};
  const totalCount = await prisma.user.count({ where });
  const order = orderBy === "oldest" ? "asc" : "desc";
  const users = await prisma.user.findMany({
    where: {
      ...where,
    },
    include: {
      company: {
        select: {
          companyName: true,
        },
      },
    },
    orderBy: {
      createdAt: order,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  return {
    totalCount,
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
export async function patchCompany(id: number, data: Partial<Company>) {
  const updatedCompany = await prisma.company.update({
    where: {
      id,
    },
    data,
  });
  return updatedCompany;
}

// 삭제
export async function removeCompany(id: number) {
  const company = await prisma.company.delete({
    where: { id },
  });
  return company;
}
