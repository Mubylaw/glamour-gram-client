import React, { useState, useEffect } from "react";
import "../assets/styles/calendar.css";
import { connect } from "react-redux";

const Client = ({}) => {
  return (
    <div className="home cali">
      <div className="headr">Client Engagement</div>
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ea.
          Facere eum corrupti atque officiis exercitationem culpa eos, neque
          veniam debitis ex id, error a necessitatibus soluta quaerat
          consequuntur sint.
        </p>
      </div>
      <div className="perfo">
        <div className="tril">Client Demographic:</div>
        <img src="/assets/chart.png" alt="" />
        <div className="tril">Client Retention Rate:</div>
        <img src="/assets/chart.png" alt="" />
        <div className="tril">New vs Returning Clients:</div>
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

export default connect(mapStateToProps, {})(Client);
