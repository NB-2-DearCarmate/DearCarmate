import {
  Contract,
  ContractStatus as PrismaContractStatus,
  Meeting,
  Alarm,
} from "@prisma/client";

export type ContractType = Contract;
export type ContractStatus = PrismaContractStatus;
export type MeetingType = Meeting;
export type AlarmType = Alarm;

export const CONTRACT_STATUS_VALUES = Object.values(PrismaContractStatus);

export const CONTRACT_STATUS_ORDER: ContractStatus[] = [
  PrismaContractStatus.CARINSPECTION,
  PrismaContractStatus.PRICENEGOTIATION,
  PrismaContractStatus.CONTRACTSUCCESSFUL,
  PrismaContractStatus.CONTRACTFAILED,
];
