import "../assets/styles/landing.css";
import down from "../assets/svg/down.svg";

const Header = ({ title, noInfo, obj }) => {
  if (obj && obj.name) {
    var name = obj.name;
  } else {
    name = "";
  }
  return (
    <div className="header">
      <div className="logo">
        <img src="/assets/logo.png" alt="" />
      </div>
      <div className="links">
        <div className="nav-link">
          <span>featured Services</span>
          <img src={down} alt="down" />
          <div className="in"></div>
          <div className="inner">
            <div className="line">Hair</div>
            <div className="line">Hair</div>
            <div className="line">Hair</div>
            <div className="line">Hair</div>
          </div>
        </div>
        <div className="nav-link">
          <span>Glamor Gram Business</span>
          <img src={down} alt="down" />
          <div className="in"></div>
          <div className="inner">
            <div className="line">Hair</div>
            <div className="line">Hair</div>
            <div className="line">Hair</div>
            <div className="line">Hair</div>
          </div>
        </div>
        <div className="nav-link">
          <span>About Us</span>
        </div>
        <div className="nav-link">
          <span>Contact Us</span>
        </div>
        <div className="nav-link">
          <div className="log-in">Log In</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
