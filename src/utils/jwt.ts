import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret";

export const generateAccessToken = (userId: number): string => {
  return jwt.sign({ userId }, SECRET, { expiresIn: "1h" });
};

export const generateRefreshToken = (userId: number): string => {
  return jwt.sign({ userId }, SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token: string): { userId: number } => {
  return jwt.verify(token, SECRET) as { userId: number };
};
