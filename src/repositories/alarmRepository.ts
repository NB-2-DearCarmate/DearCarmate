import prisma from "../lib/prisma";
import { transaction } from "../typings/contract";

const save = async (meetingId: number, alarmAt: Date, tx: transaction) => {
  const alarm = await tx.alarm.createMany({
    data: {
      meetingId: meetingId,
      alarmAt: alarmAt,
    },
  });

  return alarm;
};

const deleteMany = async (meetingId: number, tx: transaction) => {
  await tx.alarm.deleteMany({ where: { meetingId } });
};

export default { save, deleteMany };
