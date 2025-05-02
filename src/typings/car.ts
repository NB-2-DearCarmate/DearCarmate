import { VehicleStatus } from "@prisma/client";

export type CarType = "SEDAN" | "COMPACT" | "SUV";

export interface Car {
  carNumber: string;
  modelId: number;
  companyId: number;
  mileage: number;
  price: number;
  accidentCount: number;
  explanation?: string | null;
  accidentDetails?: string | null;
  status?: VehicleStatus | null;
}

export interface CarResponse extends Car {
  id: number;
}

export type CarList = {
  currentPage: number;
  totalPage: number;
  totalItemCount: number;
  data: CarResponse[];
};

export type UpdateCar = Partial<Car>;
