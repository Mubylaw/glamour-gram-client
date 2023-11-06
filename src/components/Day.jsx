import "../assets/styles/show.css";
import { splitTime, generateTimeSlots } from "../utils/calendar";

const Day = ({
  dm,
  currentDay,
  currentMonth,
  active,
  month,
  year,
  dates,
  handleClick,
  dayNo,
  allTimes,
  appointments,
  duration,
}) => {
  let full = false;
  if (dates) {
    const foundDate = dates.find((dateString) => {
      const date = new Date(dateString);
      return (
        date.getDate() === dm &&
        date.getMonth() === month &&
        date.getFullYear() === year
      );
    });

    if (foundDate) {
      full = true;
    }
  }

  let time = false;
  let rad = false;

  let allTee = [];
  if (allTimes) {
    const timees = allTimes.filter((ft) => ft.day == dayNo);
    if (timees.length > 0) {
      if (appointments) {
        appointments.forEach((aps) => {
          const temd = new Date(aps.time);
          if (
            temd.getDate() === dm &&
            temd.getMonth() === month &&
            temd.getFullYear() === year
          ) {
            const breakhour = temd.getHours();
            const breakminute = temd.getMinutes();
            function addMinutesToTime(hour, minute, minutesToAdd) {
              const totalMinutes = hour * 60 + minute + minutesToAdd;
              const endHour = Math.floor(totalMinutes / 60);
              const endMinute = totalMinutes % 60;
              return { endHour, endMinute };
            }
            const end = addMinutesToTime(breakhour, breakminute, aps.duration);

            timees.map((tm) => {
              const split = splitTime({
                ...tm,
                breakhour,
                breakminute,
                check: true,
                breakendhour: end.endHour,
                breakendminute: end.endMinute,
              });
              split.forEach((item) => {
                const isDuplicate = allTee.some(
                  (existingItem) =>
                    existingItem.day === item.day &&
                    existingItem.hour === item.hour &&
                    existingItem.duration === item.duration &&
                    existingItem.minute === item.minute
                );

                if (!isDuplicate) {
                  allTee.push(item);
                }
              });
            });
            rad = true;
          }
        });
        if (!rad) {
          timees.forEach((item) => {
            const isDuplicate = allTee.some(
              (existingItem) =>
                existingItem.day === item.day &&
                existingItem.hour === item.hour &&
                existingItem.duration === item.duration &&
                existingItem.minute === item.minute
            );
            if (!isDuplicate) {
              allTee.push(item);
            }
          });
        }
      } else {
        timees.forEach((item) => {
          const isDuplicate = allTee.some(
            (existingItem) =>
              existingItem.day === item.day &&
              existingItem.hour === item.hour &&
              existingItem.duration === item.duration &&
              existingItem.minute === item.minute
          );
          if (!isDuplicate) {
            allTee.push(item);
          }
        });
      }
    }
  }

  if (allTee.length > 0 && duration > 0) {
    let tol = [];
    allTee.forEach((tm) => {
      const updatedTm = { ...tm, duration: duration };
      console.log(updatedTm);
      const newTimes = generateTimeSlots(updatedTm);
      console.log("newTimes", newTimes);
      tol.push(...newTimes);
    });
    allTee = tol;
  }

  if (allTee.length > 0) {
    time = true;
  }

  if (!dm) {
    time = false;
  }

  let acs = false;
  if (dm === currentDay && month === currentMonth) {
    acs = true;
    if (handleClick) {
      handleClick(undefined, dayNo, dm, month, year, allTee);
    }
  }

  return (
    <div
      className={`dm ${dm < currentDay && active ? "fade" : ""} ${
        acs ? "activeDate" : ""
      } ${time ? "green" : ""}`}
      onClick={
        handleClick
          ? (e) => handleClick(e, dayNo, dm, month, year, allTee)
          : () => {}
      }
    >
      <span>{dm}</span>
      {full && <div className="cir"></div>}
    </div>
  );
};

export default Day;
