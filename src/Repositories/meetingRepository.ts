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

  return meeting;
}

export default { update, getId };
