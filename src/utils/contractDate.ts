export function isVaildMeetingDate(date: Date): boolean {
  const now = new Date();

  if (date <= now) return false;

  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const millisecondes = date.getMilliseconds();

  return minutes % 30 === 0 && seconds === 0 && millisecondes === 0;
}

export function isVaildAlramDate(alarmDate: Date, meetingDate: Date): boolean {
  console.log(alarmDate);
  const alarm9AM = (d: Date) => {
    const date = new Date(d);
    date.setHours(9, 0, 0, 0);
    return date.getTime();
  };

  const meetingDay9AM = alarm9AM(meetingDate);
  const previousDay9AM = alarm9AM(
    new Date(new Date(meetingDate.getTime() - 24 * 60 * 60 * 1000))
  );

  return (
    alarmDate.getTime() === meetingDay9AM ||
    alarmDate.getTime() === previousDay9AM
  );
}
