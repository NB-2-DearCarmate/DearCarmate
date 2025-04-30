import { CustomerRepository } from "../repositories/customersRepositories";
import BadRequestError from "../errors/BadRequestError";
import NotFoundError from "../errors/NotFoundError";
import prisma from "../lib/prisma";
import { CreateCustomerInput } from "../typings/customer";
import { PaginationParams, SearchByCompany } from "../typings/pagination";
import { Customer } from "@prisma/client"; 

interface CustomerRecord {
  name: string;
  gender?: string;
  phoneNumber: string;
  ageGroup?: string;
  region?: string;
  email?: string;
  memo?: string;
  companyId: number; // 유저의 회사 ID (요구사항: 유저의 회사에 등록)
}  

// 고객객
export const CustomerService = {
  createCustomer: async (data: CreateCustomerInput) => {
    return await CustomerRepository.create(data);
  },

  getCustomers: async ({
    page,
    limit,
    search,
    companyId,
  }: {
    page: number;
    limit: number;
    search: string;
    memo?: string;
    companyId: number;
  }) => {
    return prisma.customer.findMany({
      where: {
        companyId,
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
  patchCustomers: async (id: number, data: Partial<Customer>, companyId: number) => {
    const customer = await prisma.customer.findUnique({
      where: { id },
    });
  
    if (!customer || customer.companyId !== companyId) {
      throw new Error("수정 권한이 없습니다.");
    }
  
    return await CustomerRepository.update(id, data);
  },

  deleteCustomers: async (id: number, companyId: number) => {
    const customer = await prisma.customer.findUnique({
      where: { id },
    });
  
    if (!customer || customer.companyId !== companyId) {
      return null;
    }
  
    return await CustomerRepository.delete(id);
  },

  finduniqueCustomers: async (id: number, companyId: number) => {
    const customer = await prisma.customer.findUnique({
      where: { id },
    });
  
    // 다른 회사 고객이면 null 반환
    if (!customer || customer.companyId !== companyId) {
      return null;
    }
  
    return customer;
  }, 
 

};
