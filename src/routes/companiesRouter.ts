import { Router } from "express";
import {
  createCompanyHandler,
  deleteCompanyHandler,
  getCompanyListHandler,
  getUserByCompaniesHandler,
  updateCompanyHandler,
} from "../controllers/companiesController";

const router = Router();

router.post("/", createCompanyHandler);
router.get("/", getCompanyListHandler);
router.get("/users", getUserByCompaniesHandler);
router.patch("/:id", updateCompanyHandler);
router.delete("/:id", deleteCompanyHandler);

export default router;
