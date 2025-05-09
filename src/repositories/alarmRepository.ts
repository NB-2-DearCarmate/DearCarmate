import prisma from "../lib/prisma";
import { transection } from "../typings/contract";

const save = async (meetingId: number, alarmAt: Date, tx: transection) => {
  const alarm = await tx.alarm.createMany({
    data: {
      meetingId: meetingId,
      alarmAt: alarmAt,
    },
  });

  return alarm;
};

const deleteMany = async (meetingId: number, tx: transection) => {
  await tx.alarm.deleteMany({ where: { meetingId } });
};

export default { save, deleteMany };
