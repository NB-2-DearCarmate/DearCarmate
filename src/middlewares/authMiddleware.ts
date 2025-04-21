import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";
import prisma from "../lib/prisma";
import { AuthenticatedUser } from "../typings/express"; // 확장된 타입이 존재할 때

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "인증 토큰이 없습니다." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyAccessToken(token);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: {
        company: true,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "유효하지 않은 사용자입니다." });
    }

    req.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      company: {
        companyCode: user.company?.companyCode || "",
      },
    };

    next();
  } catch (error) {
    console.error("JWT 인증 오류:", error);
    return res.status(401).json({ message: "토큰이 유효하지 않습니다." });
  }
};

export default authMiddleware;
