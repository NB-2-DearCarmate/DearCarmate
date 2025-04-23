import { Company } from "@prisma/client";
import { Prisma } from "@prisma/client";

export type RegisterCompany = Omit<Company, "createdAt" | "updatedAt"> & {
  userCount: number;
};

export type RegitsterCompanyInput = Omit<
  Company,
  "createdAt" | "updatedAt" | "id"
>;

export type UpdateCompany = Partial<Omit<Company, "updatedAt" | "createdAt">>;

export type CompanyList = {
  currentPage: number;
  totalPage: number;
  totalItemCount: number;
  data: RegisterCompany[];
};

export type CompanyListUserCount = {
  id: number;
  companyName: string;
  companyCode: string;
  userCount: number;
};

export type UserListItem = {
  id: number;
  name: string;
  email: string;
  employeeNumber: string;
};

export type CompanyByUserList = {
  currentPage: number;
  totalPage: number;
  totalItemCount: number;
  data: UserListItem[];
};

export type GetAllCompaniesResponse = {
  currentPage: number;
  totalPage: number;
  totalItemCount: number;
  data: {
    id: number;
    companyName: string;
    companyCode: string;
    userCount: number;
  }[];
};

export type CompanyWhereInput = Prisma.CompanyWhereInput;
