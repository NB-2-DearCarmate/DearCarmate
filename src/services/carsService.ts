import NotFoundError from "../errors/NotFoundError";
import BadRequestError from "../errors/BadRequestError";
import { CarPaginationParams } from "../typings/pagination";
import carRepository from "../repositories/carsRepository";
import { CarList, UpdateCar, CarResponse, CarData } from "../typings/car";
import { mapToCarResponse } from "../utils/CarResponse";
import { CarStatus } from "@prisma/client";
import { CarRequest } from "../typings/car";

// 차량 등록
export const createCar = async (
  carRequest: CarRequest,
  companyId?: number // companyId는 선택적 매개변수로 받음
) => {
  if (!companyId) {
    throw new BadRequestError("소속 회사 정보가 없습니다.");
  }

  const existing = await carRepository.findByCarNumber(carRequest.carNumber);
  if (existing) {
    throw new BadRequestError("이미 등록된 차량 번호입니다.");
  }

  const model = await carRepository.findModel({
    name: carRequest.model,
    year: carRequest.manufacturingYear,
    manufacturerName: carRequest.manufacturer,
  });

  if (!model) {
    throw new BadRequestError("해당 모델 정보가 존재하지 않습니다.");
  }

  const carData: CarData = {
    carNumber: carRequest.carNumber,
    modelId: model.id,
    companyId,
    mileage: carRequest.mileage,
    price: carRequest.price,
    accidentCount: carRequest.accidentCount,
    explanation: carRequest.explanation,
    accidentDetails: carRequest.accidentDetails,
    status: CarStatus.possession,
  };

  return carRepository.createCar(carData);
};

// 차량 목록 조회
async function getCarList(params: CarPaginationParams): Promise<CarList> {
  const result = await carRepository.getCarList(params);

  const mappedData: CarResponse[] = result.data.map(mapToCarResponse);

  return {
    currentPage: result.currentPage,
    totalPage: result.totalPage,
    totalItemCount: result.totalItemCount,
    data: mappedData,
  };
}

// 차량 상세 정보 조회
async function getCarById(id: number) {
  const car = await carRepository.getCarById(id);

  if (!car) {
    throw new NotFoundError("차량을 찾을 수 없습니다.");
  }

  const carResponse: CarResponse = mapToCarResponse(car);

  return carResponse;
}

async function getAllCarModels() {
  const manufacturers = await carRepository.getAllCarModels();

  const result = manufacturers.map((manufacturer) => ({
    manufacturer: manufacturer.name,
    model: manufacturer.Models.map((model) => model.name),
  }));

  return { data: result };
}

// 차량 수정
async function updateCar(id: number, carRequest: UpdateCar) {
  const existingCar = await carRepository.getCarById(id);
  if (!existingCar) {
    throw new NotFoundError("차량을 찾을 수 없습니다.");
  }

  if (carRequest.carNumber && carRequest.carNumber !== existingCar.carNumber) {
    const carWithSameNumber = await carRepository.findByCarNumber(
      carRequest.carNumber
    );
    if (carWithSameNumber) {
      throw new BadRequestError("이미 등록된 차량 번호입니다.");
    }
  }

  const model = await carRepository.findModel({
    name: carRequest.model ?? existingCar.model.name,
    year: carRequest.manufacturingYear ?? existingCar.model.year,
    manufacturerName:
      carRequest.manufacturer ?? existingCar.model.manufacturer.name,
  });

  if (!model) throw new BadRequestError("해당 모델 정보가 존재하지 않습니다.");

  const updatedCarData: Partial<CarData> = {
    carNumber: carRequest.carNumber ?? existingCar.carNumber,
    modelId: model.id,
    mileage: carRequest.mileage ?? existingCar.mileage,
    price: carRequest.price ?? existingCar.price,
    accidentCount: carRequest.accidentCount ?? existingCar.accidentCount,
    explanation: carRequest.explanation ?? existingCar.explanation,
    accidentDetails: carRequest.accidentDetails ?? existingCar.accidentDetails,
  };

  return carRepository.updateCar(id, updatedCarData);
}

// 차량 삭제
async function deleteCar(id: number) {
  const existingCar = await carRepository.getCarById(id);
  if (!existingCar) {
    throw new NotFoundError("차량");
  }
  return await carRepository.deleteCar(id);
}

// 대용량 파일 업로드
async function bulkCreateCarsService(carList: CarRequest[], companyId: number) {
  if (!carList.length) {
    throw new Error("등록할 차량 정보가 없습니다.");
  }

  const processedCars: CarData[] = [];

  for (const car of carList) {
    const model = await carRepository.findModel({
      name: car.model,
      year: car.manufacturingYear,
      manufacturerName: car.manufacturer,
    });

    if (!model) {
      throw new BadRequestError(
        `모델 정보 없음: ${car.manufacturer} ${car.model} ${car.manufacturingYear}`
      );
    }

    processedCars.push({
      carNumber: car.carNumber,
      modelId: model.id,
      companyId,
      mileage: car.mileage,
      price: car.price,
      accidentCount: car.accidentCount,
      explanation: car.explanation || null,
      accidentDetails: car.accidentDetails || null,
      status: "possession",
    });
  }

  await carRepository.bulkCreateCars(processedCars);

  return {
    count: processedCars.length,
  };
}

export default {
  createCar,
  getCarList,
  getCarById,
  getAllCarModels,
  updateCar,
  deleteCar,
  bulkCreateCarsService,
};
