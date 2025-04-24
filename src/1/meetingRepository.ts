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

async function findOne(contractId: number, meetingDate: Date) {
  const meeting = await prisma.meeting.findFirst({
    where: {
      contractId: contractId,
      date: meetingDate,
    },
  });

  return meeting;
}

async function deleteMany(contractId: number) {
  await prisma.meeting.deleteMany({
    where: { contractId },
  });
}

async function findAllByContractId(contractId: number) {
  const meetings = await prisma.meeting.findMany({
    where: { contractId },
  });

  if (meetings.length === 0) {
    throw new NotFoundError(contractId);
  }

  return meetings;
}

async function deleteById(meetingId: number) {
  await prisma.meeting.delete({
    where: { id: meetingId },
  });
}

export default {
  update,
  getId,
  save,
  getById,
  findOne,
  deleteMany,
  deleteById,
  findAllByContractId,
};
