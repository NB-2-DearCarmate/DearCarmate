import { Company } from "@prisma/client";
import { Request } from "express";

export interface AuthenticatedUser {
  id: number | string;
  name: string;
  email: string;
  isAdmin: boolean;
  company: {
    companyCode: string;
  };
}

export interface AuthenticatedUserRequest extends Request {
  user?: AuthenticatedUser;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}
