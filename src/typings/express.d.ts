import { Company } from "@prisma/client";

export interface AuthenticatedUser {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  company: {
    companyCode: string;
  };
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}
