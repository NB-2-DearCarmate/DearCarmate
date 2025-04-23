import meetingRepository from "../repositories/meetingRepository";
import { isVaildMeetingDate } from "../utils/contractDate";

async function getId(contractId: number) {
  const meetingId = await meetingRepository.getId(contractId);
  return meetingId;
}

async function update(contractId: number, meetingDate: Date) {
  const meetingId = await meetingRepository.getId(contractId);

  const updatedMeeting = await meetingRepository.update(meetingId, meetingDate);

  return updatedMeeting;
}

async function create(contractId: number, meetingDate: Date) {
  if (!isVaildMeetingDate(meetingDate)) {
    throw new Error("미팅일정은 30분 간격으로 설정 가능합니다.");
  }

  const meeting = await meetingRepository.save(contractId, meetingDate);

  return meeting;
}
export default { getId, update, create };
