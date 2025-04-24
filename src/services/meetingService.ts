import meetingRepository from "../1/meetingRepository";
import { isVaildMeetingDate } from "../utils/contractDate";

async function getId(contractId: number) {
  const meetingId = await meetingRepository.getId(contractId);
  return meetingId;
}

async function update(meetingId: number, meetingDate: Date) {
  const meeting = await meetingRepository.getById(meetingId);
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

async function getByDate(contractId: number, meetingDate: Date) {
  return await meetingRepository.findOne(contractId, meetingDate);
}

async function findAllByContractId(contractId: number) {
  const meetings = await meetingRepository.findAllByContractId(contractId);
  return meetings;
}

async function deleteById(meetingId: number) {
  return await meetingRepository.deleteById(meetingId);
}
export default {
  getId,
  update,
  create,
  getByDate,
  findAllByContractId,
  deleteById,
};
