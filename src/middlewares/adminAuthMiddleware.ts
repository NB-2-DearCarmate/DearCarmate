// import { Request, Response, NextFunction } from "express";

// // export async function adminMiddleware(
// //   req: Request,
// //   res: Response,
// //   next: NextFunction
// // ) {
// //   const user = req.user;
// //   //jwt토큰 인증한 유저가 isAdmin이 false인지
// //   if (!user?.isAdmin) {
// //     res.status(403).json({ message: "관리자 전용 입니다." });
// //     return;
// //   }
// //   // return res.status(403).json({ message: "관리자 전용 입니다." }); X
// //   // return과 결과값이 한번에 실행되면 next()로 안넘어가서 오류
// //   next();
// // }
