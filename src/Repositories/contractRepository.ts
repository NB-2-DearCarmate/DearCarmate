import prisma from "../lib/prisma";
import NotFoundError from "../errors/NotFoundError";

async function save(contract) {
  const creatContract = await prisma.contract.create({
    data: contract,
  });

  return creatContract;
}

async function getCarId(id: number) {
  const car = await prisma.car.findUnique({ where: { id } });
  if (!car) {
    throw new NotFoundError(id);
  }

  return car;
}

async function getCustomerId(id: number) {
  const customer = await prisma.customer.findUnique({ where: { id } });
  if (!customer) {
    throw new NotFoundError(id);
  }

  return customer;
}

async function getById(id: number) {
  const contract = await prisma.contract.findUnique({ where: { id } });
  if (!contract) {
    throw new NotFoundError(id);
  }

  return contract;
}

async function update(id: number, contract: []) {
  const updatedContract = await prisma.contract.update({
    where: { id },
    data: {
      carId: contract.carId,
      customerId: contract.customerId,
      userId: contract.userId,
      resolutionDate: contract.resolutionDate,
    },
  });

  if (updatedContract) {
    throw new NotFoundError(id);
  }

  return updatedContract;
}

async function deleteById(id: number) {
  const contract = await prisma.contract.delete({
    where: { id },
  });

  if (!contract) {
    throw new NotFoundError(id);
  }

  return contract;
}

export default { getCarId, getCustomerId, save, getById, update, deleteById };
