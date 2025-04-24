import ForbiddenError from "../errors/ForbiddenError";
import contractRepository from "../1/contractRepository";
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
  contractStatus: ContractStatus,
  params: CursorPaginationParams
): Promise<CursorPaginationResult<ContractType>> {
  const contracts = await contractRepository.getContractList(
    { status: contractStatus },
    params
  );
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
async function update(id: number, data: UpdateContract) {
  const findContract = await contractRepository.getById(id);
  return await contractRepository.update(id, data);
}

// 계약금 수정
async function updatePrice(id: number, price: number) {
  const findContract = await contractRepository.getById(id);
  const contractPrice = await contractRepository.updatePrice(id, price);

  return contractPrice;
}

// 계약 삭제
async function deleteById(id: number) {
  const findContract = await contractRepository.getById(id);
  return await contractRepository.deleteById(id);
}

export default { getContractList, create, update, updatePrice, deleteById };
