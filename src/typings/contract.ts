import { ContractStatus } from "@prisma/client";

export interface Contract {
  carId: number;
  customerId: number;
  userId: number;
  companyId: number;
  status: ContractStatus;
  contractPrice: number;
  resolutionDate: Date | null;
}

export type ContractList = {
  searchBy: "customerName" | "userName";
  keyword: string;
};

export interface ContractWithDetails {
  id: number;
  car: {
    id: number;
    model: {
      name: string;
    };
  };
  customer: {
    id: number;
    name: string;
  };
  user: {
    id: number;
    name: string;
  };
  meetings: {
    date: Date;
    alarms: {
      alarmAt: Date;
    }[];
  }[];
  status: ContractStatus;
  contractPrice: number;
  resolutionDate: Date | null;
}

export interface CursorPaginationResultWithTotal<T> {
  list: T[];
  totalContract: number;
}
