import meetingRepository from "../repositories/meetingRepository";
import alarmService from "./alarmService";
import { isVaildMeetingDate } from "../utils/contractDate";
import { MeetingDTO } from "../dto/contractDTO";

// 시간 변환

const getId = async (contractId: number) => {
  const meetingId = await meetingRepository.getId(contractId);
  return meetingId;
};

const update = async (meetingId: number, meetingDate: Date) => {
  const meeting = await meetingRepository.getById(meetingId);
  const updatedMeeting = await meetingRepository.update(meetingId, meetingDate);

  return updatedMeeting;
};

const createWithAlarms = async (
  contractId: number,
  meetings: MeetingDTO[]
): Promise<MeetingDTO[]> => {
  if (meetings.length > 3) {
    throw new Error("미팅은 최대 3개까지만 등록 가능합니다.");
  }

  const meetingResult: MeetingDTO[] = [];

  for (const meeting of meetings) {
    if (meeting.alarms && meeting.alarms.length > 2) {
      throw new Error("알람은 최대 2개까지만 등록 가능합니다.");
    }

    const meetingDate = meeting.date;

    if (!isVaildMeetingDate(meetingDate)) {
      throw new Error("미팅일정은 30분 간격으로 설정 가능합니다.");
    }

    const createdMeeting = await meetingRepository.save(
      contractId,
      meetingDate
    );
    const meetingId = createdMeeting.id;

    const alarms: Date[] = [];

    if (meeting.alarms && Array.isArray(meeting.alarms)) {
      for (const alarmAt of meeting.alarms) {
        await alarmService.create(meetingId, meetingDate, alarmAt);
        alarms.push(alarmAt);
      }
    }

    meetingResult.push({
      date: meetingDate,
      alarms,
    });
  }

  return meetingResult;
};

const updateMeetings = async (
  contractId: number,
  meetings: MeetingDTO[]
): Promise<MeetingDTO[]> => {
  if (meetings.length > 3) {
    throw new Error("미팅은 최대 3개까지 등록할 수 있습니다.");
  }

  const meetingResult: MeetingDTO[] = [];

  const requestedDates = meetings.map((m) => m.date.getTime());

  const existingMeetings = await findAllByContractId(contractId);

  for (const existing of existingMeetings) {
    if (!requestedDates.includes(existing.date.getTime())) {
      await deleteById(existing.id);
    }
  }

  for (const meeting of meetings) {
    const meetingDate = meeting.date;

    if (!isVaildMeetingDate(meetingDate)) {
      throw new Error("미팅일정은 30분 간격으로 설정 가능합니다.");
    }

    const alarms: Date[] = [];
    const alarmData = meeting.alarms || [];

    if (alarmData.length > 2) {
      throw new Error("한 미팅에는 최대 2개의 알람만 설정할 수 있습니다.");
    }

    let meetingId: number;

    const existingMeeting = await getByDate(contractId, meetingDate);

    if (existingMeeting) {
      meetingId = existingMeeting.id;
      await alarmService.deleteByMeetingId(meetingId);
    } else {
      const createdMeeting = await meetingRepository.save(
        contractId,
        meetingDate
      );
      meetingId = createdMeeting.id;
    }

    for (const alarmAt of alarmData) {
      alarms.push(alarmAt);
      await alarmService.create(meetingId, meetingDate, alarmAt);
    }

    meetingResult.push({
      date: meetingDate,
      alarms,
    });
  }

  return meetingResult;
};

const getByDate = async (contractId: number, meetingDate: Date) => {
  return await meetingRepository.findOne(contractId, meetingDate);
};

const findAllByContractId = async (contractId: number) => {
  const meetings = await meetingRepository.findAllByContractId(contractId);
  return meetings;
};

const deleteById = async (meetingId: number) => {
  return await meetingRepository.deleteById(meetingId);
};
export default {
  getId,
  update,
  createWithAlarms,
  getByDate,
  findAllByContractId,
  deleteById,
  updateMeetings,
};
