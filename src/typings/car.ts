import { VehicleStatus } from "@prisma/client";

export type CarType = "SEDAN" | "COMPACT" | "SUV";

export interface CreateCarDTO {
  carNumber: string;
  manufacturerId: number;
  modelId: number;
  type: CarType;
  mileage: number;
  price: number;
  accidentCount: number | null;
  explanation: string | null;
  accidentDetails: string | null;
  status: VehicleStatus;
}

export interface CarResponseDTO extends CreateCarDTO {
  id: number;
}

export type CarList = {
  currentPage: number;
  totalPage: number;
  totalItemCount: number;
  data: CarResponseDTO[];
};
