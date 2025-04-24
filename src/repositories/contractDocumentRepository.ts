import prisma from "../lib/prisma";
import { SaveFileInfo } from "../typings/contrarctDocument";
import { PaginationParams, SearchByContractDraft } from "../typings/pagination";

// 계약서 업로드 시 목록조회
const getAllcontractDocumentList = async ({
  page,
  pageSize,
  keyword,
  orderBy,
}: PaginationParams<SearchByContractDraft>) => {
  const where = {};
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
const getContractList = async () => {
  const contracts = await prisma.contract.findMany({
    include: {
      customer: true,
      car: { include: { model: true } },
    },
  });
  return contracts;
};

// 계약서 업로드
const uploadContractDocuments = async (files: SaveFileInfo[]) => {
  const saveFile = await Promise.all(
    files.map((file) =>
      prisma.contractDocument.create({
        data: {
          fileName: file.fileName,
          filePath: file.filePath,
          fileSize: file.fileSize,
          contractId: file.contractId,
        },
      })
    )
  );
  return saveFile;
};

export default {
  getAllcontractDocumentList,
  getContractList,
  uploadContractDocuments,
};
