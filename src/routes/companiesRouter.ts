import { Router } from "express";
import {
  createCompanyHandler,
  deleteCompanyHandler,
  getCompanyListHandler,
  getUserByCompaniesHandler,
  updateCompanyHandler,
} from "../controllers/companiesController";
import { adminMiddleware } from "../middlewares/adminAuthMiddleware";
import { asyncHandler } from "../lib/asyncHandler";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  asyncHandler(createCompanyHandler)
);
router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  asyncHandler(getCompanyListHandler)
);
router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  asyncHandler(getUserByCompaniesHandler)
);
router.patch(
  "/:id",
  authMiddleware,
  adminMiddleware,
  asyncHandler(updateCompanyHandler)
);
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  asyncHandler(deleteCompanyHandler)
);

export default router;
