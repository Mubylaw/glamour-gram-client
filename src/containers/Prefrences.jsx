import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";

const Prefrence = ({}) => {
  return (
    <div className="home profile cali">
      <div className="headr">Prefrences</div>
      <div className="info ser">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
      </div>
      <div className="service">
        <div className="line">
          <div className="name">Email</div>
          <div className="btn-group">
            <div className="btn rem">on</div>
          </div>
        </div>
        <div className="line">
          <div className="name">Website</div>
          <div className="btn-group">
            <div className="btn rem">on</div>
          </div>
        </div>
        <div className="line">
          <div className="name">SMS Messages</div>
          <div className="btn-group">
            <div className="btn">off</div>
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

export default connect(mapStateToProps, {})(Prefrence);
