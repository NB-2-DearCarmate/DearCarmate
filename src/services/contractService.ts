import ForbiddenError from "../errors/ForbiddenError";
import contractRepository from "../Repositories/contractRepository";
import { ContractType } from "../typings/contract";

type CreateContract = Omit<ContractType, "id" | "createdAt" | "updatedAt">;
type UpdateContract = Partial<CreateContract> & { userId: number };

async function create(data: CreateContract) {
  const car = await contractRepository.getCarId(data.carId);
  const customer = await contractRepository.getCustomerId(data.customerId);

  return contractRepository.save(data);
}

async function update(id: number, data: UpdateContract) {
  const findContract = await contractRepository.getById(id);
  if (findContract.userId !== data.userId) {
    throw new ForbiddenError("해당 계약서 담당자만 수정할 수 있습니다.");
  }
  return await contractRepository.update(id, data);
}

async function deleteById(id: number) {
  const findContract = await contractRepository.getById(id);
  return await contractRepository.deleteById(id);
}

export default { create, update, deleteById };