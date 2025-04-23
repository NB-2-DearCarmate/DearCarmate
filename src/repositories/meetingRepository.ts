import prisma from "../lib/prisma";
import NotFoundError from "../errors/NotFoundError";

async function update(id: number, meetingDate: Date) {
  const updatedMeeting = await prisma.meeting.update({
    where: { id },
    data: { date: meetingDate },
  });

  if (!updatedMeeting) {
    throw new NotFoundError(id);
  }

  return updatedMeeting;
}

async function getId(contractId: number) {
  const meeting = await prisma.meeting.findFirst({ where: { contractId } });
  if (!meeting) {
    throw new NotFoundError(contractId);
  }

  const meetingId = meeting.id;

  return meetingId;
}

async function getById(id: number) {
  const meeting = await prisma.meeting.findUnique({
    where: { id },
  });

  if (!meeting) {
    throw new NotFoundError(id);
  }

  return meeting;
}

async function save(contractId: number, meetingDate: Date) {
  const meeting = await prisma.meeting.create({
    data: {
      contractId: contractId,
      date: meetingDate,
    },
  });

  return meeting;
}

export default { update, getId, save, getById };
