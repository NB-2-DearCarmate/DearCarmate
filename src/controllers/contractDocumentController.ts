import { Request, Response, NextFunction } from "express";
import { create } from "superstruct";
import { STATIC_PATH } from "../lib/constance";
import { QueryStruct } from "../validators/CompanyStructs";
import { SearchByContractDraft } from "../typings/pagination";
import {
  ContractDraftItemDto,
  ContractDocumentListDto,
} from "../dto/contractDocument.dto";
import { SaveFileInfo } from "../typings/contrarctDocument";
import path from "path";
import BadRequestError from "../errors/BadRequestError";
import contractDocumentService from "../services/contractDocumentService";

export const getAllContractDocumentListHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user = req.user;
  if (!user || !user.company || !user.company.id) {
    res.status(401).json({ message: "로그인이 필요합니다." });
  }
  const companyId = user.company.id;
  const {
    page = 1,
    pageSize = 10,
    keyword,
    orderBy,
    searchBy,
  } = create(req.query, QueryStruct);

  const requestDto: ContractDocumentListDto = {
    page: Number(page),
    pageSize: Number(pageSize),
    searchBy: searchBy as SearchByContractDraft,
    keyword: keyword as string | undefined,
    orderBy: orderBy as "recent" | "oldest",
    companyId,
  };
  const result = await contractDocumentService.contractDocumentList(requestDto);
  res.status(200).json(result);
};

export const getContractDraftListHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user = req.user;
  if (!user || !user.company) {
    res.status(401).json({ message: "로그인이 필요합니다." });
  }
  const result: ContractDraftItemDto[] =
    await contractDocumentService.contractDraftList(user.company.id);
  res.status(200).json(result);
};

export const uploadContractDocumentsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
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
  }));

  const contractDocumentId = await contractDocumentService.uploadContractFile(
    file
  );
  res.status(200).json({ contractDocumentId: contractDocumentId });
};

export const downloadContractDocHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { contractDocumentId } = req.params;
  const numContractDoc = Number(contractDocumentId);

  const file = await contractDocumentService.downloadContractFile(
    numContractDoc
  );
  if (!file) {
    throw new BadRequestError("파일을 찾을 수 없습나다");
  }

  res.set({
    "Content-Type": "application/octet-stream",
    "Content-Disposition": `attachment; filename="${file.fileName}"`,
    "Content-Length": file.content.length,
  });
  res.send(file.content);
};
