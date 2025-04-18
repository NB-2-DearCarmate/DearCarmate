import * as companiesRepository from "../Repositories/companiesRepository";
import { Company } from "@prisma/client";
import prisma from "../lib/prisma";

// 회사 등록
export async function createCompanyService(
  data: Omit<Company, "id" | "createdAt" | "updatedAt">
) {
  const createdCompany = await companiesRepository.createCompany(data);

  const userCount = await prisma.user.count({
    where: {
      companyId: createdCompany.id,
    },
  });
  return {
    ...createdCompany,
    userCount: userCount,
  };
}
