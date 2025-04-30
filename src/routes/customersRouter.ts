import { Router } from "express";
import { CustomerController 
} from "../controllers/customersController";
import authMiddleware from "../middlewares/authMiddleware";
const router = Router();

router.post("/",authMiddleware, CustomerController.createCustomer);
router.get("/",authMiddleware, CustomerController.getCustomers);
router.get("/:id", authMiddleware,CustomerController.finduniqueCustomers);
router.patch("/:id",authMiddleware,CustomerController.patchCustomers);
router.delete("/:id",authMiddleware,CustomerController.deleteCustomers);
export default router;
