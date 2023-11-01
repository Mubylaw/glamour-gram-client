import React, { useState, useEffect } from "react";
import "../assets/styles/calendar.css";
import { connect } from "react-redux";
import Calendar from "../components/Calendar";

const Appointment = ({}) => {
  return (
    <div className="home cali">
      <div className="headr">Calendar Integration</div>
      <div className="info ser">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
      </div>
      <div className="calend">
        <Calendar cal={true} time />
      </div>
      <div className="tril">Appointments:</div>
      <div className="apoint">
        <div className="top">
          <div className="date">Thursday 20th July 2023</div>
          <div className="deet">Ponytail Appointment (Francessca Brander) </div>
        </div>
        <div className="time">13:00 PM</div>
      </div>
      <div className="apoint">
        <div className="top">
          <div className="date">Thursday 20th July 2023</div>
          <div className="deet">Ponytail Appointment (Francessca Brander) </div>
        </div>
        <div className="time">13:00 PM</div>
      </div>
      <div className="apoint">
        <div className="top">
          <div className="date">Thursday 20th July 2023</div>
          <div className="deet">Ponytail Appointment (Francessca Brander) </div>
        </div>
        <div className="time">13:00 PM</div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {})(Appointment);
