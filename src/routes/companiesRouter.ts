import { Router } from "express";
import {
  createCompanyHandler,
  deleteCompanyHandler,
  getCompanyListHandler,
  getUserByCompaniesHandler,
  updateCompanyHandler,
} from "../controllers/companiesController";
import { adminMiddleware } from "../middlewares/adminAuthMiddleware";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authMiddleware, adminMiddleware, createCompanyHandler);
router.get("/", authMiddleware, adminMiddleware, getCompanyListHandler);
router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  getUserByCompaniesHandler
);
router.patch("/:id", authMiddleware, adminMiddleware, updateCompanyHandler);
router.delete("/:id", authMiddleware, adminMiddleware, deleteCompanyHandler);

export default router;
