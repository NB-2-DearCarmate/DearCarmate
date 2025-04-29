import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import {
  createUserHandler,
  getMyInfoHandler,
  updateMyInfoHandler,
  deleteMyAccountHandler,
  deleteUserHandler,
} from "../controllers/usersController";
import { adminMiddleware } from "../middlewares/adminAuthMiddleware";
import { asyncHandler } from "../lib/asyncHandler";

const router = Router();

router.post("/", asyncHandler(createUserHandler));
router.get("/me", authMiddleware, asyncHandler(getMyInfoHandler));
router.patch("/me", authMiddleware, asyncHandler(updateMyInfoHandler));
router.delete("/me", authMiddleware, asyncHandler(deleteMyAccountHandler));
router.delete(
  "/:userId",
  authMiddleware,
  adminMiddleware,
  asyncHandler(deleteUserHandler)
);

export default router;
