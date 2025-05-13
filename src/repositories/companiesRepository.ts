import prisma from "../lib/prisma";
import { User } from "@prisma/client";
import { Company } from "@prisma/client";
import { UserWhereInput } from "../typings/user";
import { UpdateCompany, RegitsterCompanyInput } from "../typings/company";
import { CompanyWhereInput } from "../typings/company";

const createCompany = async (data: RegitsterCompanyInput): Promise<Company> => {
  return await prisma.company.create({ data });
};

const getUserCount = async (companyId: number): Promise<number> => {
  return prisma.user.count({
    where: { companyId },
  });
};

const countCompanies = async (where: CompanyWhereInput): Promise<number> => {
  return prisma.company.count({ where });
};

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

export const patchCompany = async (id: number, data: UpdateCompany) => {
  const updatedCompany = await prisma.company.update({
    where: {
      id,
    },
    data,
  });
  return updatedCompany;
};

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
