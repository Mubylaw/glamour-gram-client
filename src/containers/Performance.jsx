import React, { useState, useEffect } from "react";
import "../assets/styles/calendar.css";
import { connect } from "react-redux";

const Performance = ({}) => {
  return (
    <div className="home cali">
      <div className="headr">Availability Management</div>
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ea.
          Facere eum corrupti atque officiis exercitationem culpa eos, neque
          veniam debitis ex id, error a necessitatibus soluta quaerat
          consequuntur sint.
        </p>
      </div>
      <div className="perfo">
        <div className="tril">Total Appointments:</div>
        <img src="/assets/chart.png" alt="" />
        <div className="tril">Revenue Summary:</div>
        <div className="ana">
          <div className="item">
            <div className="desc">Total Revenue</div>
            <div className="no">£1234</div>
          </div>
          <div className="item">
            <div className="desc">Total Appointments</div>
            <div className="no">56</div>
          </div>
          <div className="item">
            <div className="desc">Average Earnings per Appointment:</div>
            <div className="no">£123</div>
          </div>
        </div>
        <img src="/assets/chart.png" alt="" />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {})(Performance);
