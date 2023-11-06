import "../assets/styles/show.css";
import Day from "./Day";

const DayLine = ({
  days,
  currentDay,
  month,
  currentMonth,
  max,
  pump,
  year,
  dates,
  handleClick,
  allTimes,
  appointments,
  duration,
}) => {
  var dayMap = days;
  if (days[0] > max + 1) {
    dayMap.unshift("");
  }
  var active = true;
  if (month > currentMonth || pump > 0) {
    active = false;
  }
  const dayNo = (max + 1) % 7;

  return (
    <div className="day-line">
      {dayMap.map((dm, i) => (
        <Day
          duration={duration}
          appointments={appointments}
          allTimes={allTimes}
          dm={dm}
          currentDay={currentDay}
          currentMonth={currentMonth}
          month={month}
          active={active}
          year={year}
          dates={dates}
          dayNo={dayNo}
          handleClick={handleClick}
          key={i}
        />
      ))}
    </div>
  );
};

export default DayLine;
