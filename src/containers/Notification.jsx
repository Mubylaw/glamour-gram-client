import React, { useState, useEffect } from "react";
import "../assets/styles/settings.css";
import { connect } from "react-redux";
import bell from "../assets/svg/bell.svg";

const Notification = ({}) => {
  return (
    <div className="home settings">
      <div className="hedr">All Notifications</div>
      <div className="notee">
        <div className="item">
          <img src={bell} alt="" />
          <div className="down">
            <div className="title">New Appointment Request</div>
            <p>
              You have a new appointment request from [Customer Name] for
              [Service Name] on [Date] at [Time]
            </p>
          </div>
        </div>
        <div className="item">
          <img src={bell} alt="" />
          <div className="down">
            <div className="title">New Appointment Request</div>
            <p>
              You have a new appointment request from [Customer Name] for
              [Service Name] on [Date] at [Time]
            </p>
          </div>
        </div>
        <div className="item">
          <img src={bell} alt="" />
          <div className="down">
            <div className="title">New Appointment Request</div>
            <p>
              You have a new appointment request from [Customer Name] for
              [Service Name] on [Date] at [Time]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {})(Notification);
