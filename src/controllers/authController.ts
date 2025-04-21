import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";
import {
  LoginRequestBody,
  LoginSuccessResponse,
  ErrorResponse,
} from "../typings/auth";

export const login: RequestHandler<{}, any, LoginRequestBody> = async (
  req,
  res
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "잘못된 요청입니다" });
    return;
  }

  const user = await prisma.user.findUnique({
    where: { email },
    include: { company: true },
  });

  if (!user) {
    res
      .status(404)
      .json({ message: "존재하지 않거나 비밀번호가 일치하지 않습니다" });
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res
      .status(404)
      .json({ message: "존재하지 않거나 비밀번호가 일치하지 않습니다" });
    return;
  }

  const accessToken = generateAccessToken(user.id);
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

export const logout: RequestHandler = (_req, res) => {
  res.status(200).json({ message: "로그아웃 성공" });
};
