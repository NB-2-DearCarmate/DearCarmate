import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt";
import { LoginRequestBody, RefreshTokenRequestBody } from "../typings/auth";
import BadRequestError from "../errors/BadRequestError";
import UnauthorizedError from "../errors/UnauthorizedError";


// 로그인
export const login: RequestHandler<{}, any, LoginRequestBody> = async (
  req,
  res
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("이메일과 비밀번호를 입력해주세요.");
  }

  const user = await prisma.user.findUnique({
    where: { email },
    include: { company: true },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    res
      .status(404)
      .json({ message: "존재하지 않거나 비밀번호가 일치하지 않습니다" });
    return;
  }

  const accessToken = generateAccessToken(user.id, user.companyId);
  const refreshToken = generateRefreshToken(user.id);

  res.status(200).json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      employeeNumber: user.employeeNumber,
      phoneNumber: user.phoneNumber,
      imageUrl: user.imageUrl ?? "",
      isAdmin: user.isAdmin,
      company: {
        companyCode: user.company?.companyCode || "",
      },
    },
    accessToken,
    refreshToken,
  });
};

// 로그아웃
export const logout: RequestHandler = (_req, res) => {
  res.status(200).json({ message: "로그아웃 성공" });
};

// 토큰 재발급
export const refreshToken: RequestHandler<
  {},
  any,
  RefreshTokenRequestBody
> = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    throw new BadRequestError("잘못된 요청입니다-need refreshToken");
  }

  const decoded = verifyRefreshToken(refreshToken);
  const user = await prisma.user.findUnique({
    where: { id: decoded.userId },
  });

  if (!user) {
    throw new BadRequestError("유효하지 않은 사용자입니다.");
  }

  const newAccessToken = generateAccessToken(user.id, user.companyId);
  const newRefreshToken = generateRefreshToken(user.id);

  res.status(200).json({
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
  });
}; 
