import prisma from "../lib/prisma";

export async function getAllContract() {
  const contracts = await prisma.contract.findMany();
  return contracts;
}
