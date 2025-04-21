import { Company } from "@prisma/client";

export type RegisterCompany = Omit<Company, "createdAt" | "updatedAt"> & {
  userCount: number;
};

export type UpdateCompany = Partial<Company>;

export type CompanyList = {
  currentPage: number;
  totalPage: number;
  totalItemCount: number;
  data: RegisterCompany[];
};

export type UserListItem = {
  id: number;
  name: string;
  email: string;
  employeeNumber: string;
};

export type companyByUserList = {
  currentPage: number;
  totalPage: number;
  totalItemCount: number;
  data: UserListItem[];
};
