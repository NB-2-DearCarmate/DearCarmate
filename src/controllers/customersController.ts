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
        const page = parseInt(_req.query.page as string) || 1;
        const limit = parseInt(_req.query.limit as string) || 10;
        const search = (_req.query.search as string) || '';
    
        const customers = await CustomerService.getCustomers({ page, limit, search });
        res.status(200).json(customers);
      } catch (err) {
        res.status(500).json({ message: '고객 조회 중 오류 발생', error: err });
      }
    },

    patchCustomers : async (req:Request, res : Response, next : NextFunction) =>{
      try {
        const customerId = parseInt(req.params.id);  
        const updateData = req.body;
        const customer = await CustomerService.patchCustomers(customerId,updateData);
        res.status(201).json(customer);
      }catch (err) {
        res.status(500).json({ message: '고객 조회 중 오류 발생', error: err });
      }
    },

    deleteCustomers : async (req:Request, res : Response, next : NextFunction) =>{
      try {
        const customerId = parseInt(req.params.id);   
        const customer = await CustomerService.deleteCustomers(customerId);
        res.status(201).json(customer);
      }catch (err) {
        res.status(500).json({ message: '고객 조회 중 오류 발생', error: err });
      }
    },

    finduniqueCustomers : async (req: Request, res: Response,next: NextFunction) => {
      try { 
        const customerId = parseInt(req.params.id);
        const customers = await CustomerService.finduniqueCustomers(customerId);
        res.status(200).json(customers);
      } catch (err) {
        res.status(500).json({ message: '고객 조회 중 오류 발생', error: err });
      }
    },

  }; 
