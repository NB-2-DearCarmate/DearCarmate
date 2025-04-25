import { CustomerRepository } from "../repositories/customersRepositories";
import BadRequestError from "../errors/BadRequestError";
import NotFoundError from "../errors/NotFoundError";
import prisma from "../lib/prisma";
import { CreateCustomerInput } from "../typings/customer";
import { PaginationParams, SearchByCompany } from "../typings/pagination";
import { Customer } from "@prisma/client";

// 회사 등록
export const CustomerService = {
  createCustomer: async (data: CreateCustomerInput) => {
    return await CustomerRepository.create(data);
  },

  getCustomers: async ({
    page,
    limit,
    search,
  }: {
    page: number;
    limit: number;
    search: string;
    memo?: string;
  }) => {
    return prisma.customer.findMany({
      where: {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
        ],
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "asc" },
    });
  },

  patchCustomers: async (id: number, data: Partial<Customer>) => {
    return await CustomerRepository.update(id, data);
  },

  deleteCustomers: async (id: number) => {
    return await CustomerRepository.delete(id);
  },

  finduniqueCustomers: async (id: number) => {
    return prisma.customer.findUnique({
      where: { id },
    });
  },
};
