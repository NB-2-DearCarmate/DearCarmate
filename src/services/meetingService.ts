import meetingRepository from "../repositories/meetingRepository";
import alarmService from "./alarmService";
import { isVaildMeetingDate } from "../utils/contractDate";

// 시간 변환
const parseDate = (str: string): Date => new Date(str.replace(" ", "T"));

async function getId(contractId: number) {
  const meetingId = await meetingRepository.getId(contractId);
  return meetingId;
}

async function update(meetingId: number, meetingDate: Date) {
  const meeting = await meetingRepository.getById(meetingId);
  const updatedMeeting = await meetingRepository.update(meetingId, meetingDate);

  return updatedMeeting;
}

async function createWithAlarms(
  contractId: number,
  meetings: { date: string; alarms?: string[] }[]
): Promise<{ date: Date; alarms: Date[] }[]> {
  if (meetings.length > 3) {
    throw new Error("미팅은 최대 3개까지만 등록 가능합니다.");
  }

  const meetingResult: { date: Date; alarms: Date[] }[] = [];

  for (const meeting of meetings) {
    if (meeting.alarms && meeting.alarms.length > 2) {
      throw new Error("알람은 최대 2개까지만 등록 가능합니다.");
    }

    const meetingDate = new Date(meeting.date.replace(" ", "T"));

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
        const alarmDate = new Date(alarmAt.replace(" ", "T"));
        await alarmService.create(meetingId, meetingDate, alarmDate);
        alarms.push(alarmDate);
      }
    }

    meetingResult.push({
      date: meetingDate,
      alarms,
    });
  }

  return meetingResult;
}

async function updateMeetings(
  contractId: number,
  meetings: { date: string; alarms?: string[] }[]
): Promise<{ date: Date; alarms: Date[] }[]> {
  if (meetings.length > 3) {
    throw new Error("미팅은 최대 3개까지 등록할 수 있습니다.");
  }

  const meetingResult: { date: Date; alarms: Date[] }[] = [];

  const requestedDates = meetings.map((m) => parseDate(m.date).getTime());
  const existingMeetings = await findAllByContractId(contractId);

  for (const existing of existingMeetings) {
    if (!requestedDates.includes(new Date(existing.date).getTime())) {
      await alarmService.deleteByMeetingId(existing.id);
      await deleteById(existing.id);
    }
  }

  for (const meeting of meetings) {
    const meetingDate = parseDate(meeting.date);

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
      await update(meetingId, meetingDate);
      await alarmService.deleteByMeetingId(meetingId);
    } else {
      const createdMeeting = await meetingRepository.save(
        contractId,
        meetingDate
      );
      meetingId = createdMeeting.id;
    }

    for (const alarmAt of alarmData) {
      const alarmDate = parseDate(alarmAt);
      await alarmService.create(meetingId, meetingDate, alarmDate);
      alarms.push(alarmDate);
    }

    meetingResult.push({
      date: meetingDate,
      alarms,
    });
  }

  return meetingResult;
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
  createWithAlarms,
  getByDate,
  findAllByContractId,
  deleteById,
  updateMeetings,
};
