import { Router, RequestHandler } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import {
  createUserHandler,
  getMyInfoHandler,
  updateMyInfoHandler,
  deleteMyAccountHandler,
  deleteUserHandler,
} from "../controllers/usersController";
import { adminMiddleware } from "../middlewares/adminAuthMiddleware";

const router = Router();

router.post("/", createUserHandler as RequestHandler);
router.get("/me", authMiddleware, getMyInfoHandler as RequestHandler);
router.patch("/me", authMiddleware, updateMyInfoHandler as RequestHandler);
router.delete("/me", authMiddleware, deleteMyAccountHandler as RequestHandler);
router.delete(
  "/:userId",
  authMiddleware,
  adminMiddleware,
  deleteUserHandler as RequestHandler
);

export default router;
