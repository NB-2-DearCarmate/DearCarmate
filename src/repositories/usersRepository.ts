import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export async function getAllUserCount(where: Prisma.UserWhereInput) {
  const userCount = await prisma.user.count({ where });
  return userCount;
}

export async function findUsers(
  where: Prisma.UserWhereInput,
  order: "asc" | "desc",
  skip: number,
  take: number
) {
  return prisma.user.findMany({
    where,
    orderBy: { createdAt: order },
    skip,
    take,
    include: {
      company: {
        select: {
          companyName: true,
        },
      },
    },
  });
}
