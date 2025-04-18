import { Router } from "express";
import {
  createCompanyHandler,
  getCompanyListHandler,
} from "../controllers/companiesController";

const router = Router();

router.post("/", createCompanyHandler);
router.get("/", getCompanyListHandler);

export default router;
