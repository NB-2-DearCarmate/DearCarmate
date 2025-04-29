import prisma from "../lib/prisma";
import NotFoundError from "../errors/NotFoundError";

const update = async (id: number, meetingDate: Date) => {
  const updatedMeeting = await prisma.meeting.updateMany({
    where: { id },
    data: { date: meetingDate },
  });

  if (!updatedMeeting) {
    throw new NotFoundError("미팅");
  }

  return updatedMeeting;
};

const getId = async (contractId: number) => {
  const meeting = await prisma.meeting.findFirst({ where: { contractId } });
  if (!meeting) {
    throw new NotFoundError("계약");
  }

  const meetingId = meeting.id;

  return meetingId;
};

const getById = async (id: number) => {
  const meeting = await prisma.meeting.findUnique({
    where: { id },
  });

  if (!meeting) {
    throw new NotFoundError("미팅");
  }

  return meeting;
};

async function save(contractId: number, meetingDate: Date) {
  const meeting = await prisma.meeting.create({
    data: {
      contractId: contractId,
      date: meetingDate,
    },
  });

  return meeting;
}

const findOne = async (contractId: number, meetingDate: Date) => {
  const meeting = await prisma.meeting.findFirst({
    where: {
      contractId: contractId,
      date: meetingDate,
    },
  });

  return meeting;
};

const deleteMany = async (contractId: number) => {
  await prisma.meeting.deleteMany({
    where: { contractId },
  });
};

const findAllByContractId = async (contractId: number) => {
  const meetings = await prisma.meeting.findMany({
    where: { contractId },
  });

  if (meetings.length === 0) {
    throw new NotFoundError("계약");
  }

  return meetings;
};

const deleteById = async (meetingId: number) => {
  await prisma.meeting.delete({
    where: { id: meetingId },
  });
};

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
