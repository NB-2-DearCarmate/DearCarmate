import contractDocumentRepo from "../repositories/contractDocumentRepository";
import { PaginationParams, SearchByContractDraft } from "../typings/pagination";
import {
  ContractDraftItemDto,
  PageContractDocumentItemDto,
} from "../typings/contrarctDocument";

const contractDocumentList = async (
  params: PaginationParams<SearchByContractDraft>
): Promise<PageContractDocumentItemDto> => {
  const { page, pageSize, keyword } = params;
  const { contracts } = await contractDocumentRepo.getAllcontractDocumentList(
    params
  );

  const filter = keyword
    ? contracts.filter((c) => {
        const searchField = (() => {
          switch (params.searchBy) {
            case "contractName":
              return `${c.car.model.name}-${c.customer.name}`;
            case "carNumber":
              return c.car.carNumber;
            case "managerName":
              return c.user.name;
            default:
              return "";
          }
        })();
        return searchField.toLowerCase().includes(keyword.toLowerCase());
      })
    : contracts;

  const rePaging = filter.slice((page - 1) * pageSize, page * pageSize);

  return {
    currentPage: page,
    totalPages: Math.ceil(filter.length / pageSize),
    totalItemCount: filter.length,
    data: rePaging.map((contract) => ({
      id: contract.id,
      contractName: `${contract.car.model.name} - ${contract.customer.name}`,
      resolutionDate: contract.resolutionDate,
      documentsCount: contract.documents.length,
      manager: contract.user.name,
      carNumber: contract.car.carNumber,
      documents: contract.documents.map((document) => ({
        id: document.id,
        fileName: document.fileName,
      })),
    })),
  };
};

const contractDraftList = async (): Promise<ContractDraftItemDto[]> => {
  const contracts = await contractDocumentRepo.getContractList();

  return contracts.map((c) => ({
    id: c.id,
    data: `${c.car.model.name}-${c.customer.name} 고객님`,
  }));
};

export default {
  contractDocumentList,
  contractDraftList,
};
