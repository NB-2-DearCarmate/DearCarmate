import { Request, Response, NextFunction } from "express";
import { create } from "superstruct";
import { QueryStruct } from "../validators/CompanyStructs";
import contractDocumentService from "../services/contractDocumentService";
import { SearchByContractName } from "../typings/pagination";

export const getAllContractDocumentListHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
      searchBy: searchBy as SearchByContractName,
      keyword: keyword as string | undefined,
      orderBy: orderBy as "recent" | "oldest",
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
