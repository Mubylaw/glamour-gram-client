import React, { useState, useEffect } from "react";
import "../assets/styles/calendar.css";
import { connect } from "react-redux";
import Down from "../assets/svg/downNav";

const Payment = ({}) => {
  return (
    <div className="home cali">
      <div className="headr">Payment History</div>
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          expedita accusantium fuga fugiat quod consequuntur qui magnam dolore
          rem corporis? Vitae ipsa dolores veniam quia repellendus ipsum
          quibusdam, iusto a.
        </p>
      </div>
      <div className="tril light">
        <span>Recent</span>
        <Down fill="black" />
      </div>
      <div className="apoint pay">
        <div className="top">
          <div className="date">Payment via Mastercard - 18/02/23</div>
          <div className="deet">Ponytail Appointment (Francessca Brander) </div>
        </div>
        <div className="time">£60</div>
      </div>
      <div className="apoint pay">
        <div className="top">
          <div className="date">Payment via Mastercard - 18/02/23</div>
          <div className="deet">Ponytail Appointment (Francessca Brander) </div>
        </div>
        <div className="time">£60</div>
      </div>
      <div className="tril light">
        <span>Older</span>
        <Down fill="black" />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {})(Payment);
