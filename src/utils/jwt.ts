import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_SECRET || "access_secret";
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "refresh_secret";

// accessToken 생성
export const generateAccessToken = (userId: number, companyId: number): string => {
  return jwt.sign({ userId, companyId }, ACCESS_SECRET, { expiresIn: "1h" });
};

// refreshToken 생성
export const generateRefreshToken = (userId: number): string => {
  return jwt.sign({ userId }, REFRESH_SECRET, { expiresIn: "7d" });
};

// accessToken 검증
export const verifyAccessToken = (token: string): { userId: number, companyId: number } => {
  return jwt.verify(token, ACCESS_SECRET) as { userId: number, companyId: number };
};

// refreshToken 검증
export const verifyRefreshToken = (token: string): { userId: number } => {
  return jwt.verify(token, REFRESH_SECRET) as { userId: number };
};