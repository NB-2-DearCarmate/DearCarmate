import prisma from "../lib/prisma";
import NotFoundError from "../errors/NotFoundError";
import { ContractType } from "../typings/contract";
import { CursorPaginationParams } from "../typings/pagination";

export const CustomerRepository = {
  create: async (data: any) => {
    return prisma.customer.create({ data });
  },

  findAll: async () => {
    return prisma.customer.findMany();
  },
};