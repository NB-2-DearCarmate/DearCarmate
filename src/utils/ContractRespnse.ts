import { format } from "date-fns";
import {
  ContractListDTO,
  CreateContractResponseDTO,
  listDTO,
  MeetingDTO,
  UpdateContractResponseDTO,
} from "../dto/contractDTO";

export function contractListFormat(contracts: any[]): ContractListDTO[] {
  return contracts.map((contract: any) => ({
    id: contract.id,
    status: contract.status,
    contractPrice: contract.contractPrice,
    resolutionDate: contract.resolutionDate,
    car: {
      id: contract.car.id,
      model: contract.car.model.name,
    },
    customer: {
      id: contract.customer.id,
      name: contract.customer.name,
    },
    user: {
      id: contract.user.id,
      name: contract.user.name,
    },
    meetings: contract.meetings.map((meeting: any) => ({
      date: format(new Date(meeting.date), "yyyy-MM-dd"),
      alarms: meeting.alarms.map((alarm: any) =>
        format(new Date(alarm.alarmAt), "yyyy-MM-dd'T'HH:mm:ss")
      ),
    })),
  }));
}

export function listFotmat(list: any[]): listDTO[] {
  return list.map((data) => ({
    id: data.id,
    data: data.name,
  }));
}

export function createContractFormat(
  contracts: any
): CreateContractResponseDTO {
  return {
    id: contracts.id,
    status: contracts.status,
    resolutionDate: contracts.resolutionDate,
    meetings: contracts.meetings,
    user: {
      id: contracts.user.id,
      name: contracts.user.name,
    },
    customer: {
      id: contracts.customer.id,
      name: contracts.customer.name,
    },
    car: {
      id: contracts.car.id,
      model: contracts.car.model.name,
    },
  };
}

export function updateContractFormat(
  contracts: any,
  meetings: any
): UpdateContractResponseDTO {
  return {
    id: contracts.id,
    status: contracts.status,
    resolutionDate: contracts.resolutionDate,
    contractPrice: contracts.contractPrice,
    meetings: meetings.map((meeting: any) => ({
      date: format(new Date(meeting.date), "yyyy-MM-dd"),
      alarms: meeting.alarms.map((alarm: any) =>
        format(new Date(alarm.alarmAt), "yyyy-MM-dd'T'HH:mm:ss")
      ),
    })),
    user: {
      id: contracts.user.id,
      name: contracts.user.name,
    },
    customer: {
      id: contracts.customer.id,
      name: contracts.customer.name,
    },
    car: {
      id: contracts.car.id,
      model: contracts.car.model.name,
    },
  };
}
