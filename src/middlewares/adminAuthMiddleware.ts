import { Request, Response, NextFunction } from "express";
import { AuthenticatedUserRequest } from "../typings/express";

export async function adminMiddleware(
  req: AuthenticatedUserRequest,
  res: Response,
  next: NextFunction
) {
  console.log("middleware req.user", req.user);
  const user = req.user;
  //jwt토큰 인증한 유저가 isAdmin이 false인지
  if (!user?.isAdmin) {
    res.status(403).json({ message: "관리자 전용 입니다." });
    return;
  }
  // return res.status(403).json({ message: "관리자 전용 입니다." }); X
  // return과 결과값이 한번에 실행되면 next()로 안넘어가서 오류
  next();
}
