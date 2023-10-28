import "../assets/styles/show.css";

const DayLine = ({ days, currentDay, month, currentMonth, max }) => {
  var dayMap = days;
  if (days[0] > max) {
    dayMap.unshift("");
  }
  var active = true;
  if (month > currentMonth) {
    active = false;
  }

  return (
    <div className="day-line">
      {dayMap.map((dm) => (
        <div className={`dm ${dm < currentDay && active ? "fade" : ""} `}>
          {dm}
        </div>
      ))}
    </div>
  );
};

export default DayLine;
