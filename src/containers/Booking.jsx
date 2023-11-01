import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import note from "../assets/svg/note.svg";
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
        <div className="tril">Active:</div>
        <div className="policy">
          <div className="top">
            <img className="note" src={note} alt="" />
            <div className="tab">
              <div className="desc">Hair by xyz booking policy V4</div>
              <div className="date">Updated January 2023</div>
            </div>
          </div>
          <img className="arrow" src={arrow} alt="" />
        </div>
        <div className="tril">Inactive:</div>
        <div className="policy">
          <div className="top">
            <img className="note" src={note} alt="" />
            <div className="tab">
              <div className="desc">Hair by xyz booking policy V4</div>
              <div className="date">Updated January 2023</div>
            </div>
          </div>
          <img className="arrow" src={arrow} alt="" />
        </div>
        <div className="policy">
          <div className="top">
            <img className="note" src={note} alt="" />
            <div className="tab">
              <div className="desc">Hair by xyz booking policy V4</div>
              <div className="date">Updated January 2023</div>
            </div>
          </div>
          <img className="arrow" src={arrow} alt="" />
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
