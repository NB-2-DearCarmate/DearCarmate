import { CompanyListUserCount } from "../typings/company";

export type CreateCompanyDTO = {
  companyName: string;
  companyCode: string;
};

export type RegisterCompanyResponseDTO = {
  id: number;
  companyName: string;
  companyCode: string;
  userCount: number;
};

export type GetCompanyListQueryDTO = {
  page?: number;
  pageSize?: number;
  orderBy?: "recent" | "oldest";
  searchBy?: "name" | "code";
  keyword?: string;
};

export type GetCompanyListResponseDTO = {
  currentPage: number;
  totalPage: number;
  totalItemCount: number;
  data: CompanyListUserCount[];
};

export type GetCompanyByUserListDTO = {
  currentPage: number;
  totalPage: number;
  totalItemCount: number;
  data: {
    id: number;
    name: string;
    email: string;
    employeeNumber: string;
    phoneNumber: string;
    company: {
      companyName: string | null;
    };
  }[];
};

export type UpdateCompanyResponseDTO = {
  id?: number;
  companyName?: string;
  companyCode?: string;
};
