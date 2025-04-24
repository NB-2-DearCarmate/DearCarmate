import prisma from "../lib/prisma";
import { PaginationParams, SearchByContractName } from "../typings/pagination";

const getAllcontractDocumentList = async ({
  page,
  pageSize,
  keyword,
  orderBy,
}: PaginationParams<SearchByContractName>) => {
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
  const totalCount = await prisma.contract.count({ where });
  return { contracts, totalCount };
};

export default {
  getAllcontractDocumentList,
};
