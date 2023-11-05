import { Link } from "react-router-dom";
import "../assets/styles/landing.css";
import down from "../assets/svg/down.svg";
import { logout } from "../store/actions/auth";
import { connect } from "react-redux";

const Header = ({ logout, title, noInfo, obj, user }) => {
  if (obj && obj.name) {
    var name = obj.name;
  } else {
    name = "";
  }

  const logoutFn = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    logout();
    navigate("/");
  };

  return (
    <div className="header">
      <a href="/" className="logo">
        <img src="/assets/logo.png" alt="" />
      </a>
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
        {user ? (
          <div className="nav-link" onClick={logoutFn}>
            <div className="log-in">Log Out</div>
          </div>
        ) : (
          <Link to="/signin" className="nav-link">
            <div className="log-in">Log In</div>
          </Link>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {
  logout,
})(Header);
