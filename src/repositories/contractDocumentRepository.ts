import { Contract, ContractDocument } from "@prisma/client";
import prisma from "../lib/prisma";
import { SaveFileInfo } from "../typings/contrarctDocument";
import { PaginationParams, SearchByContractDraft } from "../typings/pagination";
import BadRequestError from "../errors/BadRequestError";

// 계약서 업로드 시 목록조회
const getAllcontractDocumentList = async ({
  page,
  pageSize,
  keyword,
  orderBy,
  companyId,
}: PaginationParams<SearchByContractDraft> & { companyId: number }) => {
  const where = {
    user: {
      companyId: companyId,
    },
  };
  const contracts = await prisma.contract.findMany({
    where,
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
      createdAt: orderBy === "oldest" ? "asc" : "desc",
    },
    include: {
      documents: true,
      car: { include: { model: true } },
      customer: true,
      user: true,
    },
  });

  return { contracts };
};

// 계약서 추가 화면에서 계약목록조회
const getContractList = async (companyId: number) => {
  const contracts = await prisma.contract.findMany({
    where: {
      user: {
        companyId: companyId,
      },
    },
    include: {
      customer: true,
      car: { include: { model: true } },
    },
  });
  return contracts;
};

// 계약서 업로드
const uploadContractDocuments = async (
  files: SaveFileInfo[]
): Promise<ContractDocument[]> => {
  const saveFile = await Promise.all(
    files.map((file) =>
      prisma.contractDocument.create({
        data: {
          fileName: file.fileName,
          filePath: file.fileName,
          fileSize: file.fileSize,
          contractId: file.contractId,
        },
      })
    )
  );
  return saveFile;
};

// 다운로드용파일찾기
const findDocumentId = async (
  contractDocumentId: number
): Promise<ContractDocument | null> => {
  const document = await prisma.contractDocument.findUnique({
    where: {
      id: contractDocumentId,
    },
  });
  if (!document) {
    throw new BadRequestError("파일이 존재하지 않습니다.");
  }
  return document;
};

export default {
  getAllcontractDocumentList,
  getContractList,
  uploadContractDocuments,
  findDocumentId,
};
