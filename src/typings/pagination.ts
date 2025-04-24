export type SearchByCompany = "companyName" | "companyId";
export type SearchByUser = "name" | "email";
export type SearchByContract = "contractTitle" | "customerName";
export type SearchByCar = "carNumber" | "model";
export type SearchByContractDraft =
  | "contractName"
  | "carNumber"
  | "managerName";

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
  nextCursor: number | null;
}

export interface UserWithCompany {}

export type CarPaginationParams = PaginationParams<SearchByCar> & {
  status?: "POSSESSION" | "CONTRACT_PROCEEDING" | "CONTRACT_COMPLETED";
};
