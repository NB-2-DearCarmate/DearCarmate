import { Router } from "express";
import { UserController } from "../controllers/usersController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();
const userController = new UserController();

// 회원가입
router.post("/", (req, res, next) => {
  userController.createUser(req, res).catch(next);
});

// 정보 조회
// router.get("/me", authMiddleware, (req, res, next) => {
//   userController.getMyInfo(req, res).catch(next); 
// });

export default router;
