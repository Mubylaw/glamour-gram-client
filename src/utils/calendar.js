const calendar = (month, year) => {
  const mondays = getDaysByWeekday(year, month, 1);
  const tuesdays = getDaysByWeekday(year, month, 2);
  const wednesdays = getDaysByWeekday(year, month, 3);
  const thursdays = getDaysByWeekday(year, month, 4);
  const fridays = getDaysByWeekday(year, month, 5);
  const saturdays = getDaysByWeekday(year, month, 6);
  const sundays = getDaysByWeekday(year, month, 0);

  return {
    mondays,
    tuesdays,
    wednesdays,
    thursdays,
    fridays,
    saturdays,
    sundays,
    month,
  };
};

const getDaysByWeekday = (year, month, day) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const currentDay = new Date(year, month, i);
    if (currentDay.getDay() === day) {
      days.push(i);
    }
  }

  return days;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const generateTimeSlots = (time) => {
  const timeSlots = [];
  let currentHour = time.hour;
  let currentMinute = time.minute;

  while (
    currentHour < time.endhour ||
    (currentHour === time.endhour && currentMinute < time.endminute)
  ) {
    const startMinutes = currentHour * 60 + currentMinute;
    const endMinutes = time.endhour * 60 + time.endminute;
    const timeDifference = endMinutes - startMinutes;

    const minutesToAdd =
      timeDifference < time.duration ? timeDifference : time.duration;

    const newEndMinute = (currentMinute + minutesToAdd) % 60;
    const newEndHour =
      currentHour + Math.floor((currentMinute + minutesToAdd) / 60);
    timeSlots.push({
      hour: currentHour,
      minute: currentMinute,
      endhour: newEndHour,
      endminute: newEndMinute,
      zone: time.zone,
      duration: minutesToAdd,
      day: time.day,
    });

    currentHour = newEndHour;
    currentMinute = newEndMinute;
  }

  return timeSlots;
};

export { calendar, months, generateTimeSlots, days };
