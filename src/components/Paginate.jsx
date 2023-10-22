import "../assets/styles/donation.css";
import back from "../assets/svg/back.svg";
import nextSvg from "../assets/svg/next.svg";

const Paginate = ({ curr, total, setCount, next, prev }) => {
  const handleBackClick = () => {
    setCount((prevCount) => prevCount - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextClick = () => {
    setCount((prevCount) => prevCount + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`paginate ${total === 1 ? "hide" : ""}`}>
      {prev && (
        <img
          src={back}
          className="back"
          alt="Haima"
          onClick={handleBackClick}
        />
      )}
      <span>Page</span> <div className="no">{curr}</div>
      <span>of</span> <div className="no">{total}</div>{" "}
      {next && (
        <img
          src={nextSvg}
          className="next"
          alt="Haima"
          onClick={handleNextClick}
        />
      )}
    </div>
  );
};

export default Paginate;
