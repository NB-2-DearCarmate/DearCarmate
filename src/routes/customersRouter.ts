import { Router } from "express";
import { CustomerController 
} from "../controllers/customersController";
import authMiddleware from "../middlewares/authMiddleware"; 
import { RequestHandler } from 'express';

const customerRouter = Router();  

 
customerRouter.post("/",authMiddleware, CustomerController.createCustomer);
customerRouter.get("/",authMiddleware, CustomerController.getCustomers);
customerRouter.get("/:id", authMiddleware,CustomerController.finduniqueCustomers);
customerRouter.patch("/:id",authMiddleware,CustomerController.patchCustomers);
customerRouter.delete("/:id",authMiddleware,CustomerController.deleteCustomers);
customerRouter.post(
  "/upload",
  authMiddleware,
  CustomerController.uploadCustomers as unknown as RequestHandler
);
export default customerRouter;
