import contractDocumentRepo from "../repositories/contractDocumentRepository";
import { PaginationParams, SearchByContractName } from "../typings/pagination";

const contractDocumentList = async (
  params: PaginationParams<SearchByContractName>
) => {
  const { page, pageSize, keyword } = params;
  const { contracts, totalCount } =
    await contractDocumentRepo.getAllcontractDocumentList(params);

  const filter = keyword
    ? contracts.filter((contract) => {
        const contractName = `${contract.car.model.name} - ${contract.customer.name}`;
        return contractName.toLowerCase().includes(keyword.toLowerCase());
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

export default {
  contractDocumentList,
};
