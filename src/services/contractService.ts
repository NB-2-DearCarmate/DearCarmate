import ForbiddenError from "../errors/ForbiddenError";
import contractRepository from "../Repositories/contractRepository";
import { ContractType } from "../typings/contract";
import {
  CursorPaginationParams,
  CursorPaginationResult,
} from "../typings/pagination";
import { ContractStatus } from "../typings/contract";
import { isVaildAlramDate, isVaildMeetingDate } from "../utils/contractDate";
import meetingRepository from "../Repositories/meetingRepository";

type CreateContract = Omit<ContractType, "id" | "createdAt" | "updatedAt"> & {
  userId: number;
  status: ContractStatus;
};
type UpdateContract = Partial<CreateContract> & { userId: number };

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

async function create(data: CreateContract) {
  const car = await contractRepository.getCarId(data.carId);
  const customer = await contractRepository.getCustomerId(data.customerId);

  const contract = await contractRepository.save(data);
  return contract;
}

async function update(id: number, data: UpdateContract) {
  const findContract = await contractRepository.getById(id);

  return await contractRepository.update(id, data);
}

async function deleteById(id: number) {
  const findContract = await contractRepository.getById(id);
  return await contractRepository.deleteById(id);
}

export default { getContractList, create, update, deleteById };
