import React, { useState, useEffect } from "react";
import "../assets/styles/calendar.css";
import { connect } from "react-redux";
import arrow from "../assets/svg/leftArrowBlack.svg";

const ViewAppointment = ({}) => {
  return (
    <div className="home cali">
      <div className="headr">Upcoming Appointments</div>

      <div className="info back">
        <img src={arrow} alt="" />
        <span>Back</span>
      </div>
      <div className="apoint diff">
        <div className="iner">
          <div className="top">
            <div className="date">Thursday 20th July 2023</div>
            <div className="deet">
              Ponytail Appointment (Francessca Brander){" "}
            </div>
          </div>
          <div className="time">13:00 PM</div>
        </div>
        <div className="img">
          <img src="/assets/service%20(1).png" alt="" />
        </div>
        <div className="btn-group">
          <div className="btn ad">Amend Booking</div>
          <div className="btn">Cancel</div>
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

export default connect(mapStateToProps, {})(ViewAppointment);
