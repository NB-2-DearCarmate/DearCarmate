import ForbiddenError from "../errors/ForbiddenError";
import contractRepository from "../repositories/contractRepository";

async function create({ data, userId: number }) {
  const car = await contractRepository.getCarId(data.car.id);
  const customer = await contractRepository.getCustomerId(data.customer.id);

  return contractRepository.save({ ...data, userId });
}

async function update(id: number, userId: number, data) {
  const findContract = await contractRepository.getById(id);
  if (findContract.userId !== userId) {
    throw new ForbiddenError("해당 계약서 담당자만 수정할 수 있습니다.");
  }
  return await contractRepository.update(id, userId, data);
}

async function deleteById(id: number) {
  const findContract = await contractRepository.getById(id);
  return await contractRepository.deleteById(id);
}

export default { create, update, deleteById };
