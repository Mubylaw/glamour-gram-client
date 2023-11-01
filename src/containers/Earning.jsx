import React, { useState, useEffect } from "react";
import "../assets/styles/calendar.css";
import { connect } from "react-redux";

const Earning = ({}) => {
  return (
    <div className="home cali">
      <div className="headr">Earnings</div>
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ea.
          Facere eum corrupti atque officiis exercitationem culpa eos, neque
          veniam debitis ex id, error a necessitatibus soluta quaerat
          consequuntur sint.
        </p>
      </div>
      <div className="perfo">
        <div className="tril">Total Earnings:</div>
        <img src="/assets/chart.png" alt="" />
        <div className="tril">Earnings Breakdown by Category:</div>
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

export default connect(mapStateToProps, {})(Earning);
