import { Router } from "express";
import { UserController } from "../controllers/usersController";

const router = Router();
const userController = new UserController();

router.post("/", (req, res, next) => {
  userController.createUser(req, res).catch(next);
});

export default router;
