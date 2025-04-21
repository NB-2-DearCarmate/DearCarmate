import { Router } from "express";
import {
  createCompanyHandler,
  getCompanyListHandler,
  getUserByCompaniesHandler,
} from "../controllers/companiesController";

const router = Router();

router.post("/", createCompanyHandler);
router.get("/", getCompanyListHandler);
router.get("/users", getUserByCompaniesHandler);

export default router;
