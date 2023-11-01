import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import add from "../assets/svg/add.svg";
import pin from "../assets/svg/pin.svg";

const PorfolioDash = ({}) => {
  return (
    <div className="home profile">
      <div className="headr">My Portfolio</div>
      <div className="info ser">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
        <div className="new">
          <span>Upload Image</span>
          <img src={add} alt="" />
        </div>
      </div>
      <div className="portfolio">
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(4).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(1).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(2).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(3).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(5).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(6).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(7).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(8).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(9).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(10).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(11).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(12).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(13).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(14).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(15).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(16).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(17).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(18).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(19).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(20).png" alt="" />
          <img src={pin} className="pin" alt="" />
        </div>
        <div className="img-cover">
          <img className="main" src="/assets/portfolio%20(21).png" alt="" />
          <img src={pin} className="pin" alt="" />
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

export default connect(mapStateToProps, {})(PorfolioDash);
