import { Request, Response, NextFunction } from "express";
import { create } from "superstruct";
import { SearchByCompany } from "../typings/pagination";
import { CustomerQueryStruct } from "../validators/CustomerStructs";
import {CustomerService} from "../services/customersService";

// 고객 등록, 조회
export const CustomerController = {
    // 고객 생성
    createCustomer: async (req: Request, res: Response,next: NextFunction)=> {
      try {
        const customer = await CustomerService.createCustomer(req.body);
        res.status(201).json(customer);
      } catch (err) {
        next(err);
      }
    },
  
    // 고객 전체 조회
    getCustomers: async (_req: Request, res: Response,next: NextFunction) => {
      try {
        const customers = await CustomerService.getCustomers();
        res.status(200).json(customers);
      } catch (err) {
        res.status(500).json({ message: '고객 조회 중 오류 발생', error: err });
      }
    },
  }; 
