import { Router } from "express";
import {
  createCompanyHandler,
  deleteCompanyHandler,
  getCompanyListHandler,
  getUserByCompaniesHandler,
  updateCompanyHandler,
} from "../controllers/companiesController";
// import { adminMiddleware } from "../middlewares/adminAuthMiddleware";
// import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.post("/",createCompanyHandler);
router.get("/",getCompanyListHandler);
router.get(
  "/users",
  getUserByCompaniesHandler
);
router.patch("/:id", updateCompanyHandler);
router.delete("/:id", deleteCompanyHandler);

export default router;
