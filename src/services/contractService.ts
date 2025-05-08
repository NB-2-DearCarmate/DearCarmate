import BadRequestError from "../errors/BadRequestError";
import ForbiddenError from "../errors/ForbiddenError";
import contractRepository from "../repositories/contractRepository";
import {
  ContractList,
  ContractType,
  ContractStatus,
  CursorPaginationResultWithTotal,
  ContractWithDetails,
} from "../typings/contract";

type CreateContract = Omit<
  ContractType,
  "id" | "createdAt" | "updatedAt" | "companyId"
>;
type UpdateContract = Partial<CreateContract> & { userId: number };

// 계약 조회
const getContractList = async (
  userId: number,
  { searchBy, keyword }: ContractList,
  status: ContractStatus
): Promise<CursorPaginationResultWithTotal<ContractWithDetails>> => {
  const user = await contractRepository.getUserId(userId);
  const companyId = user.companyId;

  const contracts = await contractRepository.getContractList(
    companyId,
    { searchBy, keyword },
    status
  );
  return contracts;
};

// 고객 조회

const getCustomerList = async (userId: number) => {
  const user = await contractRepository.getUserId(userId);
  const companyId = user.companyId;

  const customerList = await contractRepository.getCustomerList(companyId);
  return customerList;
};

// 차량 조회

const getCarList = async (userId: number) => {
  const user = await contractRepository.getUserId(userId);
  const companyId = user.companyId;

  const carList = await contractRepository.getCarList(companyId);
  return carList;
};

// 유저 조회

const getUserList = async (userId: number) => {
  const user = await contractRepository.getUserId(userId);
  const companyId = user.companyId;

  const userList = await contractRepository.getUserList(companyId);
  return userList;
};

// 계약 생성
const create = async (data: CreateContract) => {
  const car = await contractRepository.getCarId(data.carId);
  if (car.status !== "possession") {
    throw new BadRequestError("현재 계약 진행 중인 차량입니다.");
  }

  const updateCarStatus = await contractRepository.updateCarStatus(car.id);
  const user = await contractRepository.getUserId(data.userId);
  const companyId = user.companyId;

  const contractData = {
    ...data,
    contractPrice: car.price,
    companyId,
  };

  const contract = await contractRepository.save(contractData);
  return contract;
};

// 계약 수정
const update = async (id: number, userId: number, data: UpdateContract) => {
  const findContract = await contractRepository.getById(id);

  if (userId !== findContract.userId) {
    throw new ForbiddenError("담당자만 수정이 가능합니다.");
  }

  return await contractRepository.update(id, data);
};

// 계약서 업로드
const updateContractDocuments = async (
  contractId: number,
  toAdd: number[] = [],
  toRemove: number[] = []
) => {
  const getDocument = await contractRepository.verifyDocumentsExist([
    ...toAdd,
    ...toRemove,
  ]);

  if (toAdd?.length > 0) {
    await contractRepository.addDocuments(contractId, toAdd);
  }

  if (toRemove?.length > 0) {
    await contractRepository.removeDocuments(contractId, toRemove);
  }
};

// 계약 삭제
const deleteById = async (id: number, userId: number) => {
  const findContract = await contractRepository.getById(id);

  if (userId !== findContract.userId) {
    throw new ForbiddenError("담당자만 삭제가 가능합니다.");
  }

  const carStatus = await contractRepository.carStatus(findContract.carId);

  return await contractRepository.deleteById(id);
};

//외래키 참조
const updateCarStatus = async (carId: number) => {
  const createContract = await contractRepository.updateCarStatus(carId);
  return createContract;
};

const complectedCar = async (carId: number) => {
  const updatedStatus = await contractRepository.completedCar(carId);
  return updatedStatus;
};

const failedCar = async (carId: number) => {
  const updatedStatus = await contractRepository.failedCar(carId);
  return updatedStatus;
};

const getUserId = async (userId: number) => {
  const user = await contractRepository.getUserId(userId);
  return user;
};

export default {
  getContractList,
  create,
  update,
  deleteById,
  getUserId,
  updateCarStatus,
  complectedCar,
  getCustomerList,
  getCarList,
  getUserList,
  failedCar,
  updateContractDocuments,
};
