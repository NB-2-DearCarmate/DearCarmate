import { SearchByContract, SearchByContractDraft } from "../typings/pagination";

export interface ContractDraftItemDto {
  id: number;
  data: string;
}
export interface ContractDraftItemDto {
  id: number;
  data: string;
}

export interface ContractDocumentItemDto {
  id: number;
  contractName: string;
  resolutionDate: Date | null;
  documentsCount: number;
  manager: string;
  carNumber: string;
  documents: {
    id: number;
    fileName: string;
  }[];
}

export interface ContractDocumentListDto {
  page: number;
  pageSize: number;
  keyword?: string;
  orderBy: "recent" | "oldest";
  searchBy: SearchByContractDraft;
  companyId: number;
}

export interface PageContractDocumentItemDto {
  currentPage: number;
  totalPages: number;
  totalItemCount: number;
  data: ContractDocumentItemDto[];
}
