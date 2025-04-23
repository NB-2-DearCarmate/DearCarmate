import { Request, Response } from "express";
import { UserService } from "../services/usersService";
import { AuthenticatedUserRequest } from "../typings/express";

const userService = new UserService();

export class UserController {
  // 회원가입
  createUser = async (req: Request, res: Response) => {
    try {
      const user = await userService.createUser(req.body);
      return res.status(201).json(user);
    } catch (err: any) {
      const status = err.status || 500;
      return res.status(status).json({ message: err.message || "서버 에러" });
    }
  };

  // 정보 조회
  getMyInfo = async (req: AuthenticatedUserRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "로그인이 필요합니다!" });
      }

      const user = await userService.getMyInfo(Number(req.user.id));
      return res.status(200).json(user);
    } catch (err: any) {
      const status = err.status || 500;
      const message = err.message || "서버 오류가 발생했습니다.";
      return res.status(status).json({ message });
    }
  };
}
