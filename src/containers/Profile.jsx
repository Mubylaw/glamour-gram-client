import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";

const Profile = ({}) => {
  return (
    <div className="home profile">
      <div className="headr">Profile Settings</div>
      <div className="info">
        <div className="img"></div>
        <div className="name">Hair by xyz</div>
      </div>
      <div className="form">
        <div className="item">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" />
        </div>
        <div className="item">
          <label htmlFor="location">Industry:</label>
          <input type="text" id="location" />
        </div>
        <div className="item">
          <label htmlFor="location">Phone Number:</label>
          <input type="text" id="location" />
        </div>
        <div className="item">
          <label htmlFor="location">Email Address:</label>
          <input type="text" id="location" />
        </div>
        <div className="item">
          <label htmlFor="location">Certifications & Credentials:</label>
          <input type="text" id="location" />
        </div>
        <div className="item">
          <label htmlFor="location">Porfolio Link:</label>
          <input type="text" id="location" />
        </div>
        <div className="item">
          <label htmlFor="location">Social Media Accounts:</label>
          <input type="text" id="location" />
        </div>
        <div className="item">
          <label htmlFor="location">Show me services for:</label>
          <div className="input">
            <div className="box">
              <input type="checkbox" id="type" name="type" />
              <label htmlFor="">Women</label>
            </div>
            <div className="box">
              <input type="checkbox" id="type" name="type" />
              <label htmlFor="">Men</label>
            </div>
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

export default connect(mapStateToProps, {})(Profile);
