import alarmRepository from "../repositories/alarmRepository";
import { isVaildAlramDate } from "../utils/contractDate";

async function create(meetingId: number, meetingDate: Date, alarmAt: Date) {
  if (!isVaildAlramDate(alarmAt, meetingDate)) {
    throw new Error("알람은 미팅 당일 혹은 작일 오전 9시에만 가능합니다.");
  }

  const alarm = await alarmRepository.save(meetingId, alarmAt);

  return alarm;
}

async function deleteByMeetingId(meetingId: number) {
  await alarmRepository.deleteMany(meetingId);
}

export default { create, deleteByMeetingId };
