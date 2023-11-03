import React, { useState, useEffect } from "react";
import "../assets/nav/nav.css";
import { logout } from "../store/actions/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileSvg from "../assets/nav/profile";
import CalendarSvg from "../assets/nav/calendar";
import AnalyticsSvg from "../assets/nav/analytics";
import AccountSvg from "../assets/nav/account";
import PaymentSvg from "../assets/nav/payment";
import MarketingSvg from "../assets/nav/marketing";
import arrow from "../assets/svg/sideBlack.svg";

const Nav = ({ logout, navigate, position, title, role, exPos, noSide }) => {
  const [hov, setHov] = useState("");

  useEffect(() => {
    setHov(position);
  }, [position]);

  const handleSide = (loc) => {
    navigate(loc);
  };
  return (
    <div className="nav">
      <div className="main">
        <div
          className={`nav-item ${position === "one" ? "active" : ""}`}
          onClick={() => handleSide("/")}
          onMouseOver={() => setHov("one")}
        >
          <div className="icon">
            <ProfileSvg fill={position === "one" ? "black" : "white"} />
          </div>
          <div className="text">My Profile</div>
        </div>
        <div
          className={`nav-item ${position === "two" ? "active" : ""}`}
          onClick={() => handleSide("/calendar")}
          onMouseOver={() => setHov("two")}
        >
          <div className="icon">
            <CalendarSvg fill={position === "two" ? "black" : "white"} />
          </div>
          <div className="text">My Calendar</div>
        </div>
        <div
          className={`nav-item ${position === "three" ? "active" : ""}`}
          onClick={() => handleSide("/performance")}
          onMouseOver={() => setHov("three")}
        >
          <div className="icon">
            <AnalyticsSvg fill={position === "three" ? "black" : "white"} />
          </div>
          <div className="text">My Analytics</div>
        </div>
        <div
          className={`nav-item ${position === "four" ? "active" : ""}`}
          onClick={() => handleSide("/")}
          onMouseOver={() => setHov("four")}
        >
          <div className="icon">
            <AccountSvg fill={position === "four" ? "black" : "white"} />
          </div>
          <div className="text">Account Settings</div>
        </div>
        <div
          className={`nav-item ${position === "five" ? "active" : ""}`}
          onClick={() => handleSide("/earning")}
          onMouseOver={() => setHov("five")}
        >
          <div className="icon">
            <PaymentSvg fill={position === "five" ? "black" : "white"} />
          </div>
          <div className="text">Payments</div>
        </div>
        <div
          className={`nav-item ${position === "six" ? "active" : ""}`}
          onClick={() => handleSide("/")}
          onMouseOver={() => setHov("six")}
        >
          <div className="icon">
            <MarketingSvg fill={position === "six" ? "black" : "white"} />
          </div>
          <div className="text">Marketing</div>
        </div>
        <div className={`tag over ${hov}`}></div>
        <div className={`tag ${position}`}></div>
      </div>
      {!noSide && (
        <div className="side">
          <div className={`extr ${position === "one" ? "active" : ""}`}>
            <div className="title">My Profile</div>
            <div
              onClick={() => handleSide("/")}
              className={`side-item ${exPos === "one" ? "active" : ""}`}
            >
              <div className="hedr">Profile Settings</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
            <div
              onClick={() => handleSide("/service")}
              className={`side-item ${exPos === "two" ? "active" : ""}`}
            >
              <div className="hedr">My Services</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
            <div
              onClick={() => handleSide("/review")}
              className={`side-item ${exPos === "three" ? "active" : ""}`}
            >
              <div className="hedr">My Reviews</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
            <div
              onClick={() => handleSide("/portfolio")}
              className={`side-item ${exPos === "four" ? "active" : ""}`}
            >
              <div className="hedr">My Portfolio</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
            <div
              onClick={() => handleSide("/booking")}
              className={`side-item ${exPos === "five" ? "active" : ""}`}
            >
              <div className="hedr">Booking Information</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className={`extr ${position === "two" ? "active" : ""}`}>
            <div className="title">My Calendar</div>
            <div
              onClick={() => handleSide("/calendar")}
              className={`side-item ${exPos === "one" ? "active" : ""}`}
            >
              <div className="hedr">Calendar Integration</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
            <div
              onClick={() => handleSide("/appointment")}
              className={`side-item ${exPos === "two" ? "active" : ""}`}
            >
              <div className="hedr">Calendar View</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
            <div
              onClick={() => handleSide("/availability")}
              className={`side-item ${exPos === "three" ? "active" : ""}`}
            >
              <div className="hedr">Availability Management</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className={`extr ${position === "three" ? "active" : ""}`}>
            <div className="title">My Calendar</div>
            <div
              onClick={() => handleSide("/performance")}
              className={`side-item ${exPos === "one" ? "active" : ""}`}
            >
              <div className="hedr">Performance Overview</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
            <div
              onClick={() => handleSide("/booking/insights")}
              className={`side-item ${exPos === "two" ? "active" : ""}`}
            >
              <div className="hedr">Booking Insights</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
            <div
              onClick={() => handleSide("/client")}
              className={`side-item ${exPos === "three" ? "active" : ""}`}
            >
              <div className="hedr">Client Engagement</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className={`extr ${position === "five" ? "active" : ""}`}>
            <div className="title">Payments</div>
            <div
              onClick={() => handleSide("/earning")}
              className={`side-item ${exPos === "one" ? "active" : ""}`}
            >
              <div className="hedr">Earnings</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
            <div
              onClick={() => handleSide("/earning")}
              className={`side-item ${exPos === "two" ? "active" : ""}`}
            >
              <div className="hedr">Withdrawals & Payouts</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
            <div
              onClick={() => handleSide("/earning")}
              className={`side-item ${exPos === "three" ? "active" : ""}`}
            >
              <div className="hedr">Invoicing</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
            <div
              onClick={() => handleSide("/earning")}
              className={`side-item ${exPos === "three" ? "active" : ""}`}
            >
              <div className="hedr">Tax & Financial Information</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className={`extr ${position === "zero" ? "active" : ""}`}>
            <div className="hadr">
              <div className="up">
                <div className="title">Messages</div>
                <div className="state">4 Messages</div>
              </div>
              <div className="tic">
                <span>Raise a Ticket</span>
                <ProfileSvg fill="black" />
              </div>
            </div>
            <div className="side-item alp active">
              <div className="img"></div>
              <div className="down">
                <div className="tic-line">
                  <div className="name">Ticket 1</div>
                  <div className="time">20:09</div>
                </div>
                <div className="desc">Lorem ipsum dolor sit ...</div>
              </div>
            </div>
            <div className="side-item alp">
              <div className="img"></div>
              <div className="down">
                <div className="tic-line">
                  <div className="name">Ticket 1</div>
                  <div className="time">20:09</div>
                </div>
                <div className="desc">Lorem ipsum dolor sit ...</div>
              </div>
            </div>
            <div className="side-item alp">
              <div className="img"></div>
              <div className="down">
                <div className="tic-line">
                  <div className="name">Ticket 1</div>
                  <div className="time">20:09</div>
                </div>
                <div className="desc">Lorem ipsum dolor sit ...</div>
              </div>
            </div>
            <div className="side-item alp">
              <div className="img"></div>
              <div className="down">
                <div className="tic-line">
                  <div className="name">Ticket 1</div>
                  <div className="time">20:09</div>
                </div>
                <div className="desc">Lorem ipsum dolor sit ...</div>
              </div>
            </div>
          </div>
        </div>
      )}
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
})(Nav);
