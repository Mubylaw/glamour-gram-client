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

    const minutesToAdd = timeDifference < time.duration ? false : time.duration;
    if (minutesToAdd) {
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
    } else {
      break;
    }
  }

  return timeSlots;
};

function convertTime(minutes) {
  if (typeof minutes !== "number" || minutes < 0) {
    return "Invalid input";
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) {
    return `${mins} minute${mins > 1 ? "s" : ""}`;
  } else if (mins === 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  } else {
    return `${hours} hour${hours > 1 ? "s" : ""} ${mins} minute${
      mins > 1 ? "s" : ""
    }`;
  }
}

function splitTime(obj) {
  if (
    (obj.brake || obj.check) &&
    (obj.hour < obj.breakhour ||
      (obj.hour === obj.breakhour && obj.minute > obj.breakminute)) &&
    (obj.breakendhour < obj.endhour ||
      (obj.breakendhour === obj.endhour && obj.breakendminute > obj.endminute))
  ) {
    const firststartMinutes = obj.hour * 60 + obj.minute;
    const firstendMinutes = obj.breakhour * 60 + obj.breakminute;
    const firsttimeDifference = firstendMinutes - firststartMinutes;
    const startMinutes = obj.breakendhour * 60 + obj.breakendminute;
    const endMinutes = obj.endhour * 60 + obj.endminute;
    const timeDifference = endMinutes - startMinutes;
    const firstPart = {
      hour: obj.hour,
      minute: obj.minute,
      endhour: obj.breakhour,
      endminute: obj.breakminute,
      zone: obj.zone,
      duration: firsttimeDifference,
      day: obj.day,
      date: obj.date,
      month: obj.month,
      year: obj.year,
    };
    const secondPart = {
      hour: obj.breakendhour,
      minute: obj.breakendminute,
      endhour: obj.endhour,
      endminute: obj.endminute,
      zone: obj.zone,
      duration: timeDifference,
      day: obj.day,
      date: obj.date,
      month: obj.month,
      year: obj.year,
    };
    return [firstPart, secondPart];
  } else if (obj.check) {
    if (obj.hour > obj.breakhour && obj.breakendhour > obj.endhour) {
      return [];
    } else if (obj.hour > obj.breakhour && obj.breakendhour < obj.endhour) {
      const startMinutes = obj.breakendhour * 60 + obj.breakendminute;
      const endMinutes = obj.endhour * 60 + obj.endminute;
      const timeDifference = endMinutes - startMinutes;

      const secondPart = {
        hour: obj.breakendhour,
        minute: obj.breakendminute,
        endhour: obj.endhour,
        endminute: obj.endminute,
        zone: obj.zone,
        duration: timeDifference,
        day: obj.day,
        date: obj.date,
        month: obj.month,
        year: obj.year,
      };
      return [secondPart];
    } else if (obj.hour < obj.breakhour && obj.breakendhour > obj.endhour) {
      const firststartMinutes = obj.hour * 60 + obj.minute;
      const firstendMinutes = obj.breakhour * 60 + obj.breakminute;
      const firsttimeDifference = firstendMinutes - firststartMinutes;
      const firstPart = {
        hour: obj.hour,
        minute: obj.minute,
        endhour: obj.breakhour,
        endminute: obj.breakminute,
        zone: obj.zone,
        duration: firsttimeDifference,
        day: obj.day,
        date: obj.date,
        month: obj.month,
        year: obj.year,
      };

      return [firstPart];
    } else {
      return [];
    }
  } else {
    const startMinutes = obj.hour * 60 + obj.minute;
    const endMinutes = obj.endhour * 60 + obj.endminute;
    const timeDifference = endMinutes - startMinutes;
    return [
      {
        hour: obj.hour,
        minute: obj.minute,
        endhour: obj.endhour,
        endminute: obj.endminute,
        zone: obj.zone,
        duration: timeDifference,
        day: obj.day,
        date: obj.date,
        month: obj.month,
        year: obj.year,
      },
    ];
  }
}

export { calendar, months, generateTimeSlots, days, convertTime, splitTime };
