import { Request, Response } from "express";
import { UserService } from "../services/usersService";

const userService = new UserService();

export class UserController {
  createUser = async (req: Request, res: Response) => {
    try {
      const user = await userService.createUser(req.body);
      return res.status(201).json(user);
    } catch (err: any) {
      const status = err.status || 500;
      return res.status(status).json({ message: err.message || "서버 에러" });
    }
  };
}
