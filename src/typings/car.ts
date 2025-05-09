import { CarStatus } from "@prisma/client";

export type CarType = "SEDAN" | "COMPACT" | "SUV";

// 프론트 요청에서 받는 타입
export interface CarRequest {
  carNumber: string;
  manufacturer: string;
  model: string;
  manufacturingYear: number;
  mileage: number;
  price: number;
  accidentCount: number;
  explanation?: string;
  accidentDetails?: string;
}

// DB에 저장하기 위한 최종 타입
export interface CarData {
  carNumber: string;
  modelId: number;
  companyId: number;
  year: number;
  mileage: number;
  price: number;
  accidentCount: number;
  explanation?: string | null;
  accidentDetails?: string | null;
  status?: CarStatus | null;
}

export interface CarResponse {
  id: number;
  carNumber: string;
  manufacturer: string;
  model: string;
  type: CarType;
  manufacturingYear: number;
  mileage: number;
  price: number;
  accidentCount: number;
  explanation?: string | null;
  accidentDetails?: string | null;
  status?: CarStatus | null;
}

export type CarList = {
  currentPage: number;
  totalPage: number;
  totalItemCount: number;
  data: CarResponse[];
};

export type UpdateCar = Partial<CarRequest>;
