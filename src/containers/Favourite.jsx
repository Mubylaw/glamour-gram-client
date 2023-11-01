import React, { useState, useEffect } from "react";
import "../assets/styles/settings.css";
import "../assets/styles/explore.css";
import { connect } from "react-redux";
import revStars from "../assets/svg/revStars.svg";
import leftArrow from "../assets/svg/leftArrow.svg";

const Favourite = ({}) => {
  return (
    <div className="home settings full">
      <div className="hedr">My Favourites</div>
      <div className="main-tab">
        <div className="res-tab">
          <div className="service-card">
            <img className="ser" src="/assets/service%20(1).png" alt="" />
            <div className="info-tab">
              <div className="up">
                <div className="name">Bearbrown Salon -</div>
                <div className="desc">Hornchurch</div>
              </div>
              <div className="rev">
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
              </div>
            </div>
            <div className="service">
              <p>Unit A Apple Court Home Gardens, DA1 1GA, Dartford, England</p>
            </div>
            <a href="/">
              View More <img src={leftArrow} alt="" />
            </a>
          </div>
          <div className="service-card">
            <img className="ser" src="/assets/service%20(2).png" alt="" />
            <div className="info-tab">
              <div className="up">
                <div className="name">Bearbrown Salon -</div>
                <div className="desc">Hornchurch</div>
              </div>
              <div className="rev">
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
              </div>
            </div>
            <div className="service">
              <p>Unit A Apple Court Home Gardens, DA1 1GA, Dartford, England</p>
            </div>
            <a href="/">
              View More <img src={leftArrow} alt="" />
            </a>
          </div>
          <div className="service-card">
            <img className="ser" src="/assets/service%20(3).png" alt="" />
            <div className="info-tab">
              <div className="up">
                <div className="name">Bearbrown Salon -</div>
                <div className="desc">Hornchurch</div>
              </div>
              <div className="rev">
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
              </div>
            </div>
            <div className="service">
              <p>Unit A Apple Court Home Gardens, DA1 1GA, Dartford, England</p>
            </div>
            <a href="/">
              View More <img src={leftArrow} alt="" />
            </a>
          </div>
          <div className="service-card">
            <img className="ser" src="/assets/service%20(4).png" alt="" />
            <div className="info-tab">
              <div className="up">
                <div className="name">Bearbrown Salon -</div>
                <div className="desc">Hornchurch</div>
              </div>
              <div className="rev">
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
              </div>
            </div>
            <div className="service">
              <p>Unit A Apple Court Home Gardens, DA1 1GA, Dartford, England</p>
            </div>
            <a href="/">
              View More <img src={leftArrow} alt="" />
            </a>
          </div>
          <div className="service-card">
            <img className="ser" src="/assets/service%20(5).png" alt="" />
            <div className="info-tab">
              <div className="up">
                <div className="name">Bearbrown Salon -</div>
                <div className="desc">Hornchurch</div>
              </div>
              <div className="rev">
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
              </div>
            </div>
            <div className="service">
              <p>Unit A Apple Court Home Gardens, DA1 1GA, Dartford, England</p>
            </div>
            <a href="/">
              View More <img src={leftArrow} alt="" />
            </a>
          </div>
          <div className="service-card">
            <img className="ser" src="/assets/service%20(6).png" alt="" />
            <div className="info-tab">
              <div className="up">
                <div className="name">Bearbrown Salon -</div>
                <div className="desc">Hornchurch</div>
              </div>
              <div className="rev">
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
              </div>
            </div>
            <div className="service">
              <p>Unit A Apple Court Home Gardens, DA1 1GA, Dartford, England</p>
            </div>
            <a href="/">
              View More <img src={leftArrow} alt="" />
            </a>
          </div>
          <div className="service-card">
            <img className="ser" src="/assets/service%20(7).png" alt="" />
            <div className="info-tab">
              <div className="up">
                <div className="name">Bearbrown Salon -</div>
                <div className="desc">Hornchurch</div>
              </div>
              <div className="rev">
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
              </div>
            </div>
            <div className="service">
              <p>Unit A Apple Court Home Gardens, DA1 1GA, Dartford, England</p>
            </div>
            <a href="/">
              View More <img src={leftArrow} alt="" />
            </a>
          </div>
          <div className="service-card">
            <img className="ser" src="/assets/service%20(8).png" alt="" />
            <div className="info-tab">
              <div className="up">
                <div className="name">Bearbrown Salon -</div>
                <div className="desc">Hornchurch</div>
              </div>
              <div className="rev">
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
              </div>
            </div>
            <div className="service">
              <p>Unit A Apple Court Home Gardens, DA1 1GA, Dartford, England</p>
            </div>
            <a href="/">
              View More <img src={leftArrow} alt="" />
            </a>
          </div>
          <div className="service-card">
            <img className="ser" src="/assets/service%20(9).png" alt="" />
            <div className="info-tab">
              <div className="up">
                <div className="name">Bearbrown Salon -</div>
                <div className="desc">Hornchurch</div>
              </div>
              <div className="rev">
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
                <img src={revStars} alt="" />
              </div>
            </div>
            <div className="service">
              <p>Unit A Apple Court Home Gardens, DA1 1GA, Dartford, England</p>
            </div>
            <a href="/">
              View More <img src={leftArrow} alt="" />
            </a>
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

export default connect(mapStateToProps, {})(Favourite);
