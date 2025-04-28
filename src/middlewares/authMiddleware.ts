import { Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";
import { AuthenticatedUserRequest } from "../typings/express";
import prisma from "../lib/prisma";

const authMiddleware = async (
  req: AuthenticatedUserRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "인증 토큰이 없습니다." });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyAccessToken(token) as { userId: number };

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: {
        company: true,
      },
    });

    if (!user) {
      res.status(401).json({ message: "유효하지 않은 사용자입니다." });
      return;
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
    res.status(401).json({ message: "토큰이 유효하지 않습니다." });
    return;
  }
};

export default authMiddleware;
