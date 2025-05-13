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

const companiesRouter = Router();

companiesRouter.post(
  "/",
  authMiddleware,
  adminMiddleware,
  asyncHandler(createCompanyHandler)
);
companiesRouter.get(
  "/",
  authMiddleware,
  adminMiddleware,
  asyncHandler(getCompanyListHandler)
);
companiesRouter.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  asyncHandler(getUserByCompaniesHandler)
);
companiesRouter.patch(
  "/:id",
  authMiddleware,
  adminMiddleware,
  asyncHandler(updateCompanyHandler)
);
companiesRouter.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  asyncHandler(deleteCompanyHandler)
);

export default companiesRouter;
