import { useNavigate } from "react-router-dom";
import "../assets/styles/profile.css";
import note from "../assets/svg/note.svg";
import arrow from "../assets/svg/sideBlack.svg";

const Policy = ({ bk, active, i }) => {
  const date = new Date(bk.updated);

  const options = { year: "numeric", month: "long" };
  const long = date.toLocaleDateString("en-US", options);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/booking/${bk._id}`);
  };
  if (bk.active === active) {
    return (
      <div className="policy" onClick={handleNavigate}>
        <div className="top">
          <img className="note" src={note} alt="" />
          <div className="tab">
            <div className="desc">
              {bk.user.name} booking policy V{bk.no}
            </div>
            <div className="date">Updated {long}</div>
          </div>
        </div>
        <img className="arrow" src={arrow} alt="" />
      </div>
    );
  } else {
    return;
  }
};

export default Policy;
