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

// 회사 카운트
export async function countCompanies(where: Prisma.CompanyWhereInput) {
  return prisma.company.count({ where });
}

// 목록 조회
export async function findCompanies(
  where: any,
  order: "asc" | "desc",
  skip: number,
  take: number
) {
  return prisma.company.findMany({
    where,
    orderBy: { createdAt: order },
    skip,
    take,
  });
}

// 회사 별 유저조회
export async function companyFindUsers(
  where: Prisma.UserWhereInput,
  order: "asc" | "desc",
  skip: number,
  take: number
) {
  return prisma.user.findMany({
    where,
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
    skip,
    take,
  });
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
