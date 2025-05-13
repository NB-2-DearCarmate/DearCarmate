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

const userRouter = Router();

userRouter.post("/", asyncHandler(createUserHandler));
userRouter.get("/me", authMiddleware, asyncHandler(getMyInfoHandler));
userRouter.patch("/me", authMiddleware, asyncHandler(updateMyInfoHandler));
userRouter.delete("/me", authMiddleware, asyncHandler(deleteMyAccountHandler));
userRouter.delete(
  "/:userId",
  authMiddleware,
  adminMiddleware,
  asyncHandler(deleteUserHandler)
);

export default userRouter;
