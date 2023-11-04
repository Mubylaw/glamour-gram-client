import "../assets/styles/show.css";

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
}) => {
  var full = false;
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

  let acs = false;
  if (dm === currentDay && month === currentMonth) {
    acs = true;
  }

  return (
    <div
      className={`dm ${dm < currentDay && active ? "fade" : ""} ${
        acs ? "activeDate" : ""
      }`}
      onClick={(e) => handleClick(e, dayNo, dm, month, year)}
    >
      <span>{dm}</span>
      {full && <div className="cir"></div>}
    </div>
  );
};

export default Day;
