import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/landing.css";
import down from "../assets/svg/down.svg";
import { logout } from "../store/actions/auth";
import { connect } from "react-redux";
import menu from "../assets/svg/menu.svg";

const Header = ({ logout, title, noInfo, obj, user }) => {
  const [mob, setMob] = useState(false);
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
      <div className="sm img" onClick={() => setMob(true)}>
        <img src={menu} alt="" />
      </div>
      <a href={user ? "/explore" : "/"} className="logo">
        <img src="/assets/logo.png" alt="" />
      </a>
      <div className="links">
        <div className="nav-link bg">
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
        <div className="nav-link bg">
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
        <div className="nav-link bg">
          <span>About Us</span>
        </div>
        <div className="nav-link bg">
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
