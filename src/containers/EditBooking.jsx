import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import edit from "../assets/svg/edit.svg";
import arrow from "../assets/svg/sideBlack.svg";

const Booking = ({}) => {
  return (
    <div className="home profile">
      <div className="headr">Booking Information</div>
      <div className="info book">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
      </div>
      <div className="booking">
        <div className="subtitle">Booking Policies</div>
        <div className="subtitle">Hair by xyz booking policy V4</div>
        <div className="form">
          <div className="item">
            <label htmlFor="location">Location:</label>
            <textarea type="text" id="location" />
            <img src={edit} alt="" />
          </div>
          <div className="item">
            <label htmlFor="location">Industry:</label>
            <textarea type="text" id="location" />
            <img src={edit} alt="" />
          </div>
          <div className="item">
            <label htmlFor="location">Phone Number:</label>
            <textarea type="text" id="location" />
            <img src={edit} alt="" />
          </div>
          <div className="item">
            <label htmlFor="location">Email Address:</label>
            <textarea type="text" id="location" />
            <img src={edit} alt="" />
          </div>
          <div className="item">
            <label htmlFor="location">Certifications & Credentials:</label>
            <textarea type="text" id="location" />
            <img src={edit} alt="" />
          </div>
          <div className="item">
            <label htmlFor="location">Porfolio Link:</label>
            <textarea type="text" id="location" />
            <img src={edit} alt="" />
          </div>
          <div className="item">
            <label htmlFor="location">Social Media Accounts:</label>
            <textarea type="text" id="location" />
            <img src={edit} alt="" />
          </div>
        </div>
        <div className="more">
          <span>Add more sections</span>
          <img src={arrow} alt="" />
        </div>
        <div className="hr"></div>
        <div className="btn-cover">
          <div className="btn">Save Changes</div>
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

export default connect(mapStateToProps, {})(Booking);
