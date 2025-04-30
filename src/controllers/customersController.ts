import { Request, Response, NextFunction } from "express";
import { create } from "superstruct";
import { SearchByCompany } from "../typings/pagination";
import { CustomerQueryStruct } from "../validators/CustomerStructs";
import { CustomerService } from "../services/customersService";

// 고객 등록, 조회
export const CustomerController = {
  // 고객 생성
  createCustomer: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customer = await CustomerService.createCustomer(req.body);
      res.status(201).json(customer);
    } catch (err) {
      next(err);
    }
  },

  // 고객 전체 조회
  getCustomers: async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = (req.query.search as string) || "";
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
        companyId,
      });
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json({ message: "고객 조회 중 오류 발생", error: err });
    }
  },

  patchCustomers: async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
      const customerId = parseInt(req.params.id);
      const updateData = req.body;
      const customer = await CustomerService.patchCustomers(
        customerId,
        updateData,
        
      );
      res.status(201).json(customer);
    } catch (err) {
      res.status(500).json({ message: "고객 조회 중 오류 발생", error: err });
    }
  },

  deleteCustomers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerId = parseInt(req.params.id);
      const customer = await CustomerService.deleteCustomers(customerId);
      res.status(201).json(customer);
    } catch (err) {
      res.status(500).json({ message: "고객 조회 중 오류 발생", error: err });
    }
  },

  finduniqueCustomers: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const customerId = parseInt(req.params.id);
      const customers = await CustomerService.finduniqueCustomers(customerId);
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json({ message: "고객 조회 중 오류 발생", error: err });
    }
  },
};
