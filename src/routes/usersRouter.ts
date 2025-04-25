import { Router, RequestHandler } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import {
  createUserHandler,
  getMyInfoHandler,
  updateMyInfoHandler,
} from "../controllers/usersController";

const router = Router();

router.post("/", createUserHandler as RequestHandler);
router.get("/me", authMiddleware, getMyInfoHandler as RequestHandler);
router.patch("/me", authMiddleware, updateMyInfoHandler as RequestHandler);

export default router;
