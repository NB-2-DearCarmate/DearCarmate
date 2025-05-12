import { Response, NextFunction } from "express";
import { CustomerService } from "../services/customersService";
import fs from "fs";
import multer from "multer";
import path from "path";
import { AuthenticatedUserRequest } from "../typings/express";
import * as XLSX from "xlsx";
import UnauthorizedError from "../errors/UnauthorizedError";
import BadRequestError from "../errors/BadRequestError";

const upload = multer({ dest: "uploads/" });

// 고객 등록, 조회
export const CustomerController = {
  // 고객 생성
  createCustomer: async (
    req: AuthenticatedUserRequest,
    res: Response,
    next: NextFunction
  ) => {
    const companyId = req.user?.companyId;

    if (!companyId) {
      throw new BadRequestError("회사 ID가 없습니다.");
    }

    const customer = await CustomerService.createCustomer({
      ...req.body,
      companyId,
    });

    res.status(201).json(customer);
  },

  // 고객 전체 조회
  getCustomers: async (
    req: AuthenticatedUserRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = (req.query.keyword as string) || "";
    const searchBy = (req.query.searchBy as "name" | "email") || "name";
    const companyId = req.user?.companyId;

    if (!companyId) {
      throw new BadRequestError("회사 ID가 없습니다.");
    }

    const customers = await CustomerService.getCustomers({
      page,
      limit,
      search,
      searchBy,
      companyId,
    });

    res.status(200).json(customers);
  },

  patchCustomers: async (
    req: AuthenticatedUserRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const customerId = parseInt(req.params.id);
    const updateData = req.body;
    const companyId = req.user?.companyId;

    if (!companyId) {
      throw new BadRequestError("회사 ID가 없습니다.");
    }

    const customer = await CustomerService.patchCustomers(
      customerId,
      updateData,
      companyId
    );

    res.status(201).json(customer);
  },

  deleteCustomers: async (
    req: AuthenticatedUserRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const customerId = parseInt(req.params.id);
    const companyId = req.user?.companyId;

    if (!companyId) {
      throw new BadRequestError("회사 ID가 없습니다.");
    }

    const deletedCustomer = await CustomerService.deleteCustomers(
      customerId,
      companyId
    );

    if (!deletedCustomer) {
      throw new BadRequestError("삭제 권한이 없거나 고객이 존재하지 않습니다.");
    }

    res.status(200).json(deletedCustomer);
  },


  finduniqueCustomers: async (
    req: AuthenticatedUserRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const customerId = parseInt(req.params.id);
    const companyId = req.user?.companyId;

    if (!companyId) {
      throw new BadRequestError("회사 ID가 없습니다.");
    }

    const customer = await CustomerService.finduniqueCustomers(
      customerId,
      companyId
    );

    if (!customer) {
      throw new BadRequestError("고객을 찾을 수 없습니다.");
    }

    res.status(200).json(customer);
  },
  uploadCustomers: [
    upload.single("file"),
    async (
      req: AuthenticatedUserRequest & { file?: Express.Multer.File },
      res: Response,
      next: NextFunction
    ) => {
      const companyId = req.user?.companyId;

      if (!companyId) {
        throw new BadRequestError("회사 ID가 필요합니다.");
      }

      if (!req.file) {
        throw new BadRequestError("Excel(.xlsx) 파일이 필요합니다.");
      }

      const filePath = path.resolve(req.file.path);

      try {
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const rows: any[] = XLSX.utils.sheet_to_json(worksheet);

        const result = await CustomerService.bulkCreateCustomers(
          rows,
          companyId
        );

        fs.unlinkSync(filePath);
        res.status(201).json({ message: "고객 등록 완료", count: result.count });
      } catch (err) {
        fs.unlinkSync(filePath); // 실패해도 파일 정리
        next(err);
      }
    },
  ],
};