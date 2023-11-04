import "../assets/nav/nav.css";

const TicketNav = ({ tick, id, handleClick }) => {
  const dateString = tick.createdAt;
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  return (
    <div
      className={`side-item alp ${id == tick._id ? "active" : ""}`}
      onClick={() => handleClick(`/ticket/${tick._id}`)}
    >
      <div className="img"></div>
      <div className="down">
        <div className="tic-line">
          <div className="name">Ticket {tick.no}</div>
          <div className="time">{formattedTime}</div>
        </div>
        <div className="desc">
          {tick.description.length > 23
            ? `${tick.description.substring(0, 23)}...`
            : tick.description}
        </div>
      </div>
    </div>
  );
};

export default TicketNav;
