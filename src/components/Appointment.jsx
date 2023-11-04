import "../assets/styles/calendar.css";

const Appoints = ({ app }) => {
  const date = new Date(app.time);
  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const dateFormatter = new Intl.DateTimeFormat("en-US", dateOptions);
  const formattedDate = dateFormatter.format(date);

  const timeFormatter = new Intl.DateTimeFormat("en-US", timeOptions);
  const formattedTime = timeFormatter.format(date);

  return (
    <div className="apoint">
      <div className="top">
        <div className="date">{formattedDate}</div>
        <div className="deet">{app.name} (Francessca Brander) </div>
      </div>
      <div className="time">{formattedTime}</div>
    </div>
  );
};

export default Appoints;
