import prisma from "../lib/prisma";
import NotFoundError from "../errors/NotFoundError";
import { transaction } from "../typings/contract";

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
    throw new NotFoundError("미팅");
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

async function save(contractId: number, meetingDate: Date, tx: transaction) {
  const meeting = await tx.meeting.create({
    data: {
      contractId: contractId,
      date: meetingDate,
    },
  });

  return meeting;
}

const findOne = async (
  contractId: number,
  meetingDate: Date,
  tx: transaction
) => {
  const meeting = await tx.meeting.findFirst({
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

const findAllByContractId = async (contractId: number, tx: transaction) => {
  const meetings = await tx.meeting.findMany({
    where: { contractId },
  });

  return meetings;
};

const deleteById = async (meetingId: number, tx: transaction) => {
  await tx.meeting.delete({
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
