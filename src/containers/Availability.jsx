import React, { useState, useEffect } from "react";
import "../assets/styles/calendar.css";
import { connect } from "react-redux";

const Availability = ({}) => {
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

export default connect(mapStateToProps, {})(Availability);
