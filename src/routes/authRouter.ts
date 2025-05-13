import { Router } from "express";
import { login, logout, refreshToken } from "../controllers/authController";

const atuhRouter = Router();

atuhRouter.post("/login", login);
atuhRouter.post("/logout", logout);
atuhRouter.post("/refresh", refreshToken);

export default atuhRouter;
