import { Response, NextFunction } from "express";
import { CustomerService } from "../services/customersService";
import fs from "fs";
import multer from "multer";
import path from "path";
import { AuthenticatedUserRequest } from "../typings/express";
import * as XLSX from "xlsx";
import UnauthorizedError from "../errors/UnauthorizedError";
import BadRequestError from "../errors/BadRequestError";
import csv from "csv-parser";

// ✅ 이 아래 코드로 수정해줘!
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });
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
      if (!companyId) return next(new BadRequestError("회사 ID가 필요합니다."));
      if (!req.file) return next(new BadRequestError("CSV 파일이 필요합니다."));
  
      const filePath = path.resolve(req.file.path);
      const ext = path.extname(filePath).toLowerCase();
  
      if (ext !== ".csv") {
        return next(new BadRequestError("CSV 파일만 허용됩니다."));
      }
  
      try {
        const rows: any[] = [];
  
        await new Promise<void>((resolve, reject) => {
          fs.createReadStream(filePath)
            .pipe(
              csv({
                headers: [
                  "name",
                  "email",
                  "gender",
                  "phoneNumber",
                  "ageGroup",
                  "region",
                  "memo",
                ],
                skipLines: 1, // ✅ 첫 줄(컬럼명) 무시
                strict: true,
                mapHeaders: ({ header }) => header?.trim(), // 혹시 모를 공백 제거
              })
            )
            .on("data", (data) => {
              rows.push(data);
            })
            .on("end", resolve)
            .on("error", reject);
        });
  
        const result = await CustomerService.bulkCreateCustomers(rows, companyId);
  
        fs.unlinkSync(filePath);
        res.status(201).json({ message: "고객 등록 완료", count: result.count });
      } catch (err) {
        fs.unlinkSync(filePath);
        next(err);
      }
    },
  ],
};