import { Company } from "@prisma/client";
import { Request } from "express";
import "express";

export interface AuthenticatedUser {
  id: number;
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

declare module "express" {
  interface Request {
    user?: {
      id: number;
      name: string;
      email: string;
      isAdmin: boolean;
      company: {
        companyCode: string;
      };
    };
  }
}
