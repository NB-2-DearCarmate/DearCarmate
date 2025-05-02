import prisma from "../lib/prisma";
import NotFoundError from "../errors/NotFoundError";
import { ContractType } from "../typings/contract";
import { CursorPaginationParams } from "../typings/pagination";
import { Customer } from "@prisma/client"; 

export const CustomerRepository = {
  create: async (data: any) => {
    return prisma.customer.create({ data });
  },

  findMany: async () => {
    return prisma.customer.findMany();
  },

  update: async (id: number, data: Partial<Customer>) => {
    return prisma.customer.update({
      where: { id },
      data,
    });
  },

  delete: async (id: number) => {
    return prisma.customer.delete({
      where: { id },
    });
  },

  findunique: async (id: number) => {
    return prisma.customer.findUnique({
      where: { id },
    });
  },  
};
