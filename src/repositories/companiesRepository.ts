import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";
import { User } from "@prisma/client";
import { Company } from "@prisma/client";
import { UserWhereInput } from "../typings/user";
import { UpdateCompany, RegitsterCompanyInput } from "../typings/company";
import { CompanyWhereInput } from "../typings/company";

// 회사 등록
const createCompany = async (data: RegitsterCompanyInput): Promise<Company> => {
  return await prisma.company.create({ data });
};

// 회사에 속한 유저 카운트
const getUserCount = async (companyId: number): Promise<number> => {
  return prisma.user.count({
    where: { companyId },
  });
};

// 회사 카운트
const countCompanies = async (where: CompanyWhereInput): Promise<number> => {
  return prisma.company.count({ where });
};

// 목록 조회
const findCompanies = async (
  where: CompanyWhereInput,
  order: "asc" | "desc",
  skip: number,
  take: number
): Promise<Company[]> => { 
  return prisma.company.findMany({
    where,
    orderBy: { createdAt: order },
    skip,
    take,
  });
};

// 회사 별 유저조회
const companyFindUsers = async (
  where: UserWhereInput,
  order: "asc" | "desc",
  skip: number,
  take: number
): Promise<User[]> => {
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
};

// 회사정보 수정
export const patchCompany = async (
  id: number,
  data: UpdateCompany
) => {
  const updatedCompany = await prisma.company.update({
    where: {
      id,
    },
    data,
  });
  return updatedCompany;
};

// 삭제
const removeCompany = async (id: number): Promise<Company> => {
  const company = await prisma.company.delete({
    where: { id },
  });
  return company;
};

export default {
  createCompany,
  getUserCount,
  countCompanies,
  findCompanies,
  companyFindUsers,
  patchCompany,
  removeCompany,
};
