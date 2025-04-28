import ForbiddenError from "../errors/ForbiddenError";
import contractRepository from "../repositories/contractRepository";
import { ContractType } from "../typings/contract";
import {
  CursorPaginationParams,
  CursorPaginationResultWithTotal,
} from "../typings/pagination";
import { ContractStatus } from "../typings/contract";

type CreateContract = Omit<ContractType, "id" | "createdAt" | "updatedAt">;
type UpdateContract = Partial<CreateContract> & { userId: number };

// 계약 조회
const getContractList = async (
  userId: number,
  { cursor, limit }: CursorPaginationParams,
  status: ContractStatus
): Promise<CursorPaginationResultWithTotal<ContractType>> => {
  const user = await contractRepository.getUserId(userId);
  const companyId = user.companyId;

  const contracts = await contractRepository.getContractList(
    companyId,
    { cursor, limit },
    status
  );
  return contracts;
};

// 계약 생성
const create = async (data: CreateContract) => {
  const car = await contractRepository.getCarId(data.carId);
  const updateCarStatus = await contractRepository.updateCarStatus(car.id);

  const customer = await contractRepository.getCustomerId(data.customerId);
  const model = await contractRepository.getModelId(car.modelId);

  const contractData = {
    ...data,
    contractPrice: car.price,
  };

  const contract = await contractRepository.save(contractData);
  return { contract, customer, model };
};

// 계약 수정
const update = async (id: number, userId: number, data: UpdateContract) => {
  const findContract = await contractRepository.getById(id);

  if (userId !== findContract.userId) {
    throw new ForbiddenError("담당자만 수정이 가능합니다.");
  }
  return await contractRepository.update(id, data);
};

// 계약 삭제
const deleteById = async (id: number, userId: number) => {
  const findContract = await contractRepository.getById(id);

  if (userId !== findContract.userId) {
    throw new ForbiddenError("담당자만 수정이 가능합니다.");
  }
  return await contractRepository.deleteById(id);
};

//외래키 참조
const getCarId = async (carId: number) => {
  const car = await contractRepository.getCarId(carId);
  return car;
};

const updateCarStatus = async (carId: number) => {
  const createContract = await contractRepository.updateCarStatus(carId);
  return createContract;
};

const complectedCar = async (carId: number) => {
  const updatedStatus = await contractRepository.completedCar(carId);
  return updatedStatus;
};

const getCustomerId = async (customerId: number) => {
  const customer = await contractRepository.getCustomerId(customerId);
  return customer;
};

const getUserId = async (userId: number) => {
  const user = await contractRepository.getUserId(userId);
  return user;
};

const getModelId = async (modelId: number) => {
  const model = await contractRepository.getModelId(modelId);

  return model;
};

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
