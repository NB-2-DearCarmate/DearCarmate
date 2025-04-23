import prisma from "../lib/prisma";
import NotFoundError from "../errors/NotFoundError";

async function save(meetingId: number, alarmAt: Date) {
  const alarm = await prisma.alarm.create({
    data: {
      meetingId: meetingId,
      alarmAt: alarmAt,
    },
  });

  return alarm;
}

async function update(id: number, alarmAt: Date) {
  const alarm = await prisma.alarm.update({
    where: { id },
    data: {
      alarmAt: alarmAt,
    },
  });

  return alarm;
}

async function getId(meetingId: number) {
  const alarm = await prisma.alarm.findFirst({ where: { meetingId } });
  if (!alarm) {
    throw new NotFoundError(meetingId);
  }

  const alarmId = alarm.id;

  return alarmId;
}
export default { save, update, getId };
