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

export interface PageContractDocumentItemDto {
  currentPage: number;
  totalPages: number;
  totalItemCount: number;
  data: ContractDocumentItemDto[];
}
