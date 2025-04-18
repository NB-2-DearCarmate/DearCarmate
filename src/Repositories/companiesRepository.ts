import prisma from "../lib/prisma";
import { Company } from "@prisma/client";

export async function createCompany(
  data: Omit<Company, "id" | "createdAt" | "updatedAt">
) {
  const createdCompany = await prisma.company.create({
    data,
  });
  return createdCompany;
}
