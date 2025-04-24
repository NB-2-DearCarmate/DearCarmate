import prisma from "../lib/prisma";

async function save(meetingId: number, alarmAt: Date) {
  const alarm = await prisma.alarm.create({
    data: {
      meetingId: meetingId,
      alarmAt: alarmAt,
    },
  });

  return alarm;
}

async function deleteMany(meetingId: number) {
  await prisma.alarm.deleteMany({ where: { meetingId } });
}

export default { save, deleteMany };
