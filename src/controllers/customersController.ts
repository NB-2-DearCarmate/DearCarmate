import { Request, Response, NextFunction } from "express";
import { create } from "superstruct";
import { SearchByCompany } from "../typings/pagination";
import { CustomerQueryStruct } from "../validators/CustomerStructs";
import { CustomerService } from "../services/customersService";
import csv from "csv-parser";
import fs from "fs"; 
import multer from "multer"; 
import path from "path"; 
import { AuthenticatedUserRequest } from "../typings/express";

const upload = multer({ dest: "uploads/" });

// 고객 등록, 조회
export const CustomerController = {
  // 고객 생성
  createCustomer: async (req: AuthenticatedUserRequest, res: Response, next: NextFunction) => {
    try {
      const companyId = req.user?.companyId;
      const customer = await CustomerService.createCustomer({
        ...req.body,
        companyId, 
      })
      res.status(201).json(customer);
    } catch (err) {
      next(err);
    }
  },

  // 고객 전체 조회
  getCustomers: async (req: AuthenticatedUserRequest, res: Response, next: NextFunction) : Promise<void> => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = (req.query.keyword as string) || "";
      const searchBy = (req.query.searchBy as "name" | "email") || "name";
      const companyId = req.user?.companyId;
      console.log("요청한 회사 ID:", companyId);
      if (!companyId) {
          res.status(400).json({ message: "회사 ID가 없습니다." });
          return;
      }
      const customers = await CustomerService.getCustomers({
        page,
        limit,
        search,
        searchBy,
        companyId,
      });
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json({ message: "고객 조회 중 오류 발생", error: err });
    }
  },

  patchCustomers: async (req: AuthenticatedUserRequest, res: Response, next: NextFunction) : Promise<void> => {
    try {
      const customerId = parseInt(req.params.id);
      const updateData = req.body;
      const companyId = req.user?.companyId;
      if (!companyId) {
        res.status(400).json({ message: "회사 ID가 없습니다." });
        return;
      }
      const customer = await CustomerService.patchCustomers(
        customerId,
        updateData,
        companyId,
      );
      res.status(201).json(customer);
    } catch (err) {
      res.status(500).json({ message: "고객 조회 중 오류 발생", error: err });
    }
  },

  deleteCustomers: async (req: AuthenticatedUserRequest, res: Response, next: NextFunction) => {
    try {
      const customerId = parseInt(req.params.id);
      const companyId = req.user?.companyId;
  
      if (!companyId) {
        res.status(400).json({ message: "회사 ID가 없습니다." });
        return;
      }
  
      const deletedCustomer = await CustomerService.deleteCustomers(customerId, companyId);
  
      if (!deletedCustomer) {
        res.status(403).json({ message: "삭제 권한이 없거나 고객이 존재하지 않습니다." });
        return;
      }
  
      res.status(200).json(deletedCustomer);
    } catch (err) {
      res.status(500).json({ message: "고객 삭제 중 오류 발생", error: err });
    }
  },

  finduniqueCustomers: async (
    req: AuthenticatedUserRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const customerId = parseInt(req.params.id);
      const companyId = req.user?.companyId;
  
      if (!companyId) {
        res.status(400).json({ message: "회사 ID가 없습니다." });
        return;
      }
  
      const customer = await CustomerService.finduniqueCustomers(customerId, companyId);
  
      if (!customer) {
        res.status(404).json({ message: "고객을 찾을 수 없습니다." });
        return;
      }
  
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json({ message: "고객 조회 중 오류 발생", error: err });
    }
  }, 

  uploadCustomers: [
    upload.single("file"),
    async (req: AuthenticatedUserRequest & { file?: Express.Multer.File }, res: Response, next: NextFunction) => {
      const companyId = req.user?.companyId;
      if (!companyId) {
        return res.status(400).json({ message: "회사 ID가 필요합니다." });
      }
      if (!req.file) {
        return res.status(400).json({ message: "CSV 파일이 필요합니다." });
      }
  
      const results: any[] = [];
      const filePath = path.resolve(req.file.path);
  
      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", async () => {
          try {
            const result = await CustomerService.bulkCreateCustomers(results, companyId);
            fs.unlinkSync(filePath); // 파일 삭제
            res.status(201).json({ message: "고객 대량 등록 완료", count: result.count });
          } catch (err) {
            fs.unlinkSync(filePath); // 에러 시에도 삭제
            next(err);
          }
        });
    },
  ], 
  
}; 
