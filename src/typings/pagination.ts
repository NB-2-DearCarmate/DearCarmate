export type SearchByCompany = "companyName" | "companyId";
export type SearchByUser = "name" | "email";
export type SearchByContract = "contractTitle" | "customerName";
export type SearchByCompanyUsers = "name" | "email" | "companyName";
export type SearchByCar = "carNumber" | "model";
export type SearchByContractDraft = "contractName" | "carNumber" | "userName";

export type PaginationParams<T extends string> = {
  page: number;
  pageSize: number;
  searchBy?: T;
  keyword?: string;
  orderBy?: "recent" | "oldest";
};

export interface PagePaginationResult<T> {
  list: T[];
  totalCount: number;
}

export interface CursorPaginationParams {
  cursor: number;
  limit: number;
}

export interface CursorPaginationResult<T> {
  list: T[];
}

export interface CursorPaginationResultWithTotal<T>
  extends CursorPaginationResult<T> {
  totalContract: number;
}

export interface UserWithCompany {}

export type CarPaginationParams = PaginationParams<SearchByCar> & {
  companyId?: number;
  status?: "possession" | "contract_proceeding" | "contract_completed";
};
