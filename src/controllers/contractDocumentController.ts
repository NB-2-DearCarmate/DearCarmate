import { Request, Response, NextFunction } from "express";
import { create } from "superstruct";
import { QueryStruct } from "../validators/CompanyStructs";
import contractDocumentService from "../services/contractDocumentService";
import { SearchByContractDraft } from "../typings/pagination";
import { ContractDraftItemDto } from "../dto/contractDocument.dto";

export const getAllContractDocumentListHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      page = 1,
      pageSize = 10,
      keyword,
      orderBy,
      searchBy,
    } = create(req.query, QueryStruct);

    const result = await contractDocumentService.contractDocumentList({
      page: Number(page),
      pageSize: Number(pageSize),
      searchBy: searchBy as SearchByContractDraft,
      keyword: keyword as string | undefined,
      orderBy: orderBy as "recent" | "oldest",
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getContractDraftListHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result: ContractDraftItemDto[] =
      await contractDocumentService.contractDraftList();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
