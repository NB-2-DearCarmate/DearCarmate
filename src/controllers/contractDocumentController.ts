import { Request, Response, NextFunction } from "express";
import { create } from "superstruct";
import { STATIC_PATH } from "../lib/constance";
import { QueryStruct } from "../validators/CompanyStructs";
import { MulterRequest } from "../typings/multer";
import { SearchByContractDraft } from "../typings/pagination";
import { ContractDraftItemDto } from "../dto/contractDocument.dto";
import { SaveFileInfo } from "../typings/contrarctDocument";
import path from "path";
import BadRequestError from "../errors/BadRequestError";
import contractDocumentService from "../services/contractDocumentService";

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

export const uploadContractDocumentsHandler = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const host = req.get("host");
    const files = req.files as Express.Multer.File[];
    if (!host) {
      throw new BadRequestError("호스트가 필요합니다.");
    }
    if (!req.files || !Array.isArray(req.files)) {
      throw new Error("파일이 없습니다.");
    }
    const file: SaveFileInfo[] = files.map((f) => ({
      fileName: f.filename,
      filePath: path.join(STATIC_PATH, f.filename),
      fileSize: f.size,
      contractId: req.body.contractId,
    }));
    const contractDocumentId = contractDocumentService.uploadContractFile(file);
    res.status(201).json(contractDocumentId);
  } catch (error) {
    next(error);
  }
};
