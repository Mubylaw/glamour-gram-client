import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";

const Ticket = ({}) => {
  return (
    <div className="home profile">
      <div className="headr">Raise a Ticket</div>
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, et!
          Obcaecati, accusantium ut id quos consequatur natus ipsum maiores
          saepe repudiandae enim, inventore officiis. Quibusdam adipisci eum
          eaque excepturi quidem.
        </p>
      </div>
      <div className="form">
        <div className="item">
          <label htmlFor="location">First Name:</label>
          <input type="text" id="location" />
        </div>
        <div className="item">
          <label htmlFor="location">Last Name:</label>
          <input type="text" id="location" />
        </div>
        <div className="item">
          <label htmlFor="location">Subject:</label>
          <textarea type="text" id="location" />
        </div>
      </div>
      <div className="btn-cover">
        <div className="btn">Send</div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {})(Ticket);
