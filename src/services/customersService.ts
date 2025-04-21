import { CustomerRepository } from "../Repositories/customersRepositories";
import BadRequestError from "../errors/BadRequestError";
import NotFoundError from "../errors/NotFoundError";
import { CreateCustomerInput } from "../typings/customer";
import { PaginationParams, SearchByCompany } from "../typings/pagination";

// 회사 등록
export const CustomerService = {
    createCustomer: async (data: CreateCustomerInput) => {
      return await CustomerRepository.create(data);
    },
  
    getCustomers: async () => {
      return await CustomerRepository.findAll();
    },
};