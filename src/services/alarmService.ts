import alarmRepository from "../repositories/alarmRepository";
import { Prisma } from "@prisma/client";
import { isVaildAlramDate } from "../utils/contractDate";

const create = async (
  meetingId: number,
  meetingDate: Date,
  alarmAt: Date,
  tx: Prisma.TransactionClient
) => {
  if (!isVaildAlramDate(alarmAt, meetingDate)) {
    throw new Error("알람은 미팅 당일 혹은 작일 오전 9시에만 가능합니다.");
  }

  const alarm = await alarmRepository.save(meetingId, alarmAt, tx);

  return alarm;
};

const deleteByMeetingId = async (meetingId: number, tx: Prisma.TransactionClient) => {
  await alarmRepository.deleteMany(meetingId, tx);
};

export default { create, deleteByMeetingId };
