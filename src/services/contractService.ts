import ForbiddenError from "../errors/ForbiddenError";
import contractRepository from "../repositories/contractRepository";
import { ContractType } from "../typings/contract";
import {
  CursorPaginationParams,
  CursorPaginationResult,
} from "../typings/pagination";
import { ContractStatus } from "../typings/contract";

type CreateContract = Omit<ContractType, "id" | "createdAt" | "updatedAt"> & {
  userId: number;
  status: ContractStatus;
};
type UpdateContract = Partial<CreateContract> & { userId: number };

// 계약 조회
async function getContractList(
  params: CursorPaginationParams,
  userId: number
): Promise<CursorPaginationResult<ContractType>> {
  const user = await contractRepository.getUserId(userId);
  const companyId = user.companyId;

  const contracts = await contractRepository.getContractList(companyId, params);
  return contracts;
}

// 계약 생성
async function create(data: CreateContract) {
  const car = await contractRepository.getCarId(data.carId);
  const customer = await contractRepository.getCustomerId(data.customerId);

  const contract = await contractRepository.save(data);
  return contract;
}

// 계약 수정
async function update(id: number, userId: number, data: UpdateContract) {
  const findContract = await contractRepository.getById(id);

  if (userId !== findContract.userId) {
    throw new ForbiddenError("담당자만 수정이 가능합니다.");
  }
  return await contractRepository.update(id, data);
}

// 계약 삭제
async function deleteById(id: number, userId: number) {
  const findContract = await contractRepository.getById(id);

  if (userId !== findContract.userId) {
    throw new ForbiddenError("담당자만 수정이 가능합니다.");
  }
  return await contractRepository.deleteById(id);
}

//외래키 참조
async function getCarId(carId: number) {
  const car = await contractRepository.getCarId(carId);
  return car;
}

async function updateCarStatus(carId: number) {
  const createContract = await contractRepository.updateCarStatus(carId);
  return createContract;
}

async function complectedCar(carId: number) {
  const updatedStatus = await contractRepository.completedCar(carId);
  return updatedStatus;
}
async function getCustomerId(customerId: number) {
  const customer = await contractRepository.getCustomerId(customerId);
  return customer;
}

async function getUserId(userId: number) {
  const user = await contractRepository.getUserId(userId);
  return user;
}

async function getModelId(modelId: number) {
  const model = await contractRepository.getModelId(modelId);

  return model;
}

export default {
  getContractList,
  create,
  update,
  deleteById,
  getCarId,
  getCustomerId,
  getUserId,
  updateCarStatus,
  complectedCar,
  getModelId,
};
