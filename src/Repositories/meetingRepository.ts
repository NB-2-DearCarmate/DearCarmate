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

async fun

export default { update };
