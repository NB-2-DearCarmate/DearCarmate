import { Router } from "express";
import { CustomerController 
} from "../controllers/customersController";

const router = Router();

router.post("/", CustomerController.createCustomer);
router.get("/", CustomerController.getCustomers);

export default router;
