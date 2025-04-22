import { Router } from "express";
import { CustomerController 
} from "../controllers/customersController";

const router = Router();

router.post("/", CustomerController.createCustomer);
router.get("/", CustomerController.getCustomers);
router.get("/:id", CustomerController.finduniqueCustomers);
router.patch("/:id",CustomerController.patchCustomers);
router.delete("/:id",CustomerController.deleteCustomers);
export default router;
