import { ContractStatus } from "../typings/contract";

export interface ContractDTO {
  carId: number;
  customerId: number;
  userId: number;
  companyId: number;
  status: ContractStatus;
  contractPrice: number;
  resolutionDate: Date | null;
}

export interface listDTO {
  id: number;
  data: string;
}

export interface ContractListDTO {
  id: number;
  status: ContractStatus;
  contractPrice: number;
  resolutionDate: Date | null;
  car: {
    id: number;
    model: string;
  };
  customer: {
    id: number;
    name: string;
  };
  user: {
    id: number;
    name: string;
  };
  meetings?: {
    date: string;
    alarms: string[];
  }[];
}

export interface CreateContractDTO {
  carId: number;
  customerId: number;
  userId: number;
  companyId: number;
  status: ContractStatus;
  contractPrice: number;
  resolutionDate: Date | null;
  meetings?: MeetingDTO[];
}
export interface CreateContractResponseDTO {
  id: number;
  status: string;
  resolutionDate: Date | null;
  meetings: MeetingDTO[];
  user: {
    id: number;
    name: string;
  };
  customer: {
    id: number;
    name: string;
  };
  car: {
    id: number;
    model: string;
  };
}
export interface UpdateContractDTO {
  carId?: number;
  customerId?: number;
  userId?: number;
  status?: ContractStatus;
  contractPrice?: number;
  resolutionDate?: Date;
}

export interface UpdateContractResponseDTO {
  id: number;
  status: string;
  resolutionDate: Date | null;
  contractPrice: number;
  meetings?: {
    date: string;
    alarms: string[];
  }[];
  user: {
    id: number;
    name: string;
  };
  customer: {
    id: number;
    name: string;
  };
  car: {
    id: number;
    model: string;
  };
}

export interface MeetingDTO {
  date: Date;
  alarms?: Date[];
}
