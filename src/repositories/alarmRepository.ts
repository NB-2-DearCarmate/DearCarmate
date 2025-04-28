import prisma from "../lib/prisma";

const save = async (meetingId: number, alarmAt: Date) => {
  const alarm = await prisma.alarm.create({
    data: {
      meetingId: meetingId,
      alarmAt: alarmAt,
    },
  });

  return alarm;
};

const deleteMany = async (meetingId: number) => {
  await prisma.alarm.deleteMany({ where: { meetingId } });
};

export default { save, deleteMany };
