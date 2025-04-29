import path from "path";
import fs from "fs";
import contractDocumentRepo from "../repositories/contractDocumentRepository";
import { PaginationParams, SearchByContractDraft } from "../typings/pagination";
import {
  ContractDraftItemDto,
  PageContractDocumentItemDto,
} from "../dto/contractDocument.dto";
import { SaveFileInfo } from "../typings/contrarctDocument";
import BadRequestError from "../errors/BadRequestError";

const contractDocumentList = async (
  params: PaginationParams<SearchByContractDraft> & { companyId: number }
): Promise<PageContractDocumentItemDto> => {
  const { page, pageSize, keyword, companyId } = params;
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

const contractDraftList = async (
  companyId: number
): Promise<ContractDraftItemDto[]> => {
  const contracts = await contractDocumentRepo.getContractList(companyId);

  return contracts.map((c) => ({
    id: c.id,
    data: `${c.car.model.name}-${c.customer.name} 고객님`,
  }));
};

const uploadContractFile = async (files: SaveFileInfo[]) => {
  const save = await contractDocumentRepo.uploadContractDocuments(files);
  return save[0].id;
};

const downloadContractFile = async (contractDocumentId: number) => {
  const file = await contractDocumentRepo.findDocumentId(contractDocumentId);
  if (!file) {
    throw new BadRequestError("파일이 없습니다.");
  }

  const filePath = path.resolve(
    __dirname,
    "../../docUploads/contractDocument",
    file.filePath
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`파일이 존재하지 않습니다: ${filePath}`);
  }
  const fileInfo = fs.readFileSync(filePath);
  return {
    fileName: file.fileName,
    content: fileInfo,
    id: file.id,
  };
};

export default {
  contractDocumentList,
  contractDraftList,
  uploadContractFile,
  downloadContractFile,
};
