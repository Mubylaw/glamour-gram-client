import React, { useState, useEffect } from "react";
import "../assets/styles/settings.css";
import { connect } from "react-redux";

const ShowTicket = ({}) => {
  return (
    <div className="home settings">
      <div className="top-bins">
        <div className="tic-name">Ticket Number: 1</div>
        <div className="deets">
          <div className="date">Date: 12/09/2023</div>
          <div className="subject">Subject: Trouble booking appintment</div>
        </div>
      </div>
      <hr />
      <div className="ticket">
        <div className="item">
          <div className="img"></div>
          <div className="down">
            <div className="tic-line">
              <div className="name">Name</div>
              <div className="date">20:09</div>
            </div>
            <div className="message">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              dolorum odit cumque pariatur facilis sed unde nihil qui quam.
              Vitae animi, quo exercitationem molestiae qui nulla dolorum
              dolores ipsum fugit?
            </div>
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

export default connect(mapStateToProps, {})(ShowTicket);
