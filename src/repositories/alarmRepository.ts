import { Prisma } from "@prisma/client";

const save = async (meetingId: number, alarmAt: Date, tx: Prisma.TransactionClient) => {
  const alarm = await tx.alarm.createMany({
    data: {
      meetingId: meetingId,
      alarmAt: alarmAt,
    },
  });

  return alarm;
};

const deleteMany = async (meetingId: number, tx: Prisma.TransactionClient) => {
  await tx.alarm.deleteMany({ where: { meetingId } });
};

export default { save, deleteMany };
