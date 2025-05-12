import {
  Contract,
  ContractStatus as PrismaContractStatus,
  Meeting,
  Alarm,
  Prisma,
} from "@prisma/client";

export type ContractType = Contract;
export type ContractStatus = PrismaContractStatus;
export type MeetingType = Meeting;
export type AlarmType = Alarm;
export type ContractList = {
  searchBy: "customerName" | "userName";
  keyword: string;
};

export const CONTRACT_STATUS_VALUES = Object.values(PrismaContractStatus);

export const CONTRACT_STATUS_ORDER: ContractStatus[] = [
  PrismaContractStatus.carInspection,
  PrismaContractStatus.priceNegotiation,
  PrismaContractStatus.contractDraft,
  PrismaContractStatus.contractSuccessful,
  PrismaContractStatus.contractFailed,
];

export type transaction = Prisma.TransactionClient;

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
