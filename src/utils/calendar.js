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

export { calendar, months };
