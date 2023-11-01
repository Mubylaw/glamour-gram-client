import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import add from "../assets/svg/add.svg";

const ServiceDash = ({}) => {
  return (
    <div className="home profile">
      <div className="headr">My Services</div>
      <div className="info ser">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
        <div className="new">
          <span>Add New Service</span>
          <img src={add} alt="" />
        </div>
      </div>
      <div className="service">
        <div className="line">
          <div className="name">Service 1</div>
          <div className="btn-group">
            <div className="btn">Edit</div>
            <div className="btn rem">Remove</div>
          </div>
        </div>
        <div className="line">
          <div className="name">Service 1</div>
          <div className="btn-group">
            <div className="btn">Edit</div>
            <div className="btn rem">Remove</div>
          </div>
        </div>
        <div className="line">
          <div className="name">Service 1</div>
          <div className="btn-group">
            <div className="btn">Edit</div>
            <div className="btn rem">Remove</div>
          </div>
        </div>
        <div className="line">
          <div className="name">Service 1</div>
          <div className="btn-group">
            <div className="btn">Edit</div>
            <div className="btn rem">Remove</div>
          </div>
        </div>
        <div className="line">
          <div className="name">Service 1</div>
          <div className="btn-group">
            <div className="btn">Edit</div>
            <div className="btn rem">Remove</div>
          </div>
        </div>
        <div className="line">
          <div className="name">Service 1</div>
          <div className="btn-group">
            <div className="btn">Edit</div>
            <div className="btn rem">Remove</div>
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="btn-cover">
        <div className="btn">Save Changes</div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {})(ServiceDash);
