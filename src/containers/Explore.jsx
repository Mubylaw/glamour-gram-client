import React, { useState, useEffect } from "react";
import "../assets/styles/explore.css";
import { connect } from "react-redux";
import Header from "../components/Header";
import Down from "../assets/svg/downNav.jsx";
import leftStars from "../assets/svg/leftStars.svg";
import rightStars from "../assets/svg/rightStars.svg";
import cross from "../assets/svg/cross.svg";
import revStars from "../assets/svg/revStars.svg";
import leftArrow from "../assets/svg/leftArrow.svg";
import side from "../assets/svg/side.svg";
import Footer from "../components/Footer";
import MultiRangeSlider from "../components/MultiSlider";

const Explore = ({}) => {
  const [loc, setLoc] = useState(false);
  const [price, setPrice] = useState(false);
  const [ava, setAva] = useState(false);
  return (
    <div>
      <Header />
      <div className="xplor">
        <div className="ex-nav">
          <div className="bord">
            <img src={side} alt="" />
          </div>
          <div className="inner">
            <div className="title">Filters</div>
            <div className="item">
              <div className="t-nav" onClick={() => setPrice(!price)}>
                <span>Price</span>
                <Down fill={"#000"} rota={!price ? false : true} />
              </div>
              <div className={`filer ${price ? "" : "hide"}`}>
                <MultiRangeSlider
                  min={0}
                  max={100}
                  onChange={({ min, max }) =>
                    console.log(`min = ${min}, max = ${max}`)
                  }
                />
              </div>
            </div>
            <div className="item">
              <div className="t-nav" onClick={() => setLoc(!loc)}>
                <span>Location</span>
                <Down fill={"#000"} rota={!loc ? false : true} />
              </div>
              <div className={`filer ra ${loc ? "" : "hide"}`}>
                <div className="rad">
                  <input type="checkbox" id="half" name="half" />
                  <label for="half">Within 1/2 mile</label>
                </div>
                <div className="rad">
                  <input type="checkbox" id="half" name="half" />
                  <label for="half">Within 1/2 mile</label>
                </div>
                <div className="rad">
                  <input type="checkbox" id="half" name="half" />
                  <label for="half">Within 1/2 mile</label>
                </div>
                <div className="rad">
                  <input type="checkbox" id="half" name="half" />
                  <label for="half">Within 1/2 mile</label>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="t-nav">
                <span>Special Offers</span>
                <Down fill={"#000"} />
              </div>
            </div>
            <div className="item">
              <div className="t-nav" onClick={() => setAva(!ava)}>
                <span>Availability</span>
                <Down fill={"#000"} rota={!ava ? false : true} />
              </div>
              <div className={`filer ra ${ava ? "" : "hide"}`}>
                <div className="tags">
                  <div className="iem">
                    <span className="tag-name">Tomorrow</span>
                  </div>
                  <div className="iem">
                    <span className="tag-name">This Week</span>
                  </div>
                  <div className="iem">
                    <span className="tag-name">This Month</span>
                  </div>
                  <div className="iem">
                    <span className="tag-name">Select Date</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="t-nav">
                <span>Rating Score</span>
                <Down fill={"#000"} />
              </div>
            </div>
            <div className="item cat">
              <span>Category Tags</span>
              <div className="tags">
                <div className="iem">
                  <span className="tag-name">#Black</span>
                  <img src={cross} alt="" />
                </div>
                <div className="iem">
                  <span className="tag-name">#NaturalHair</span>
                  <img src={cross} alt="" />
                </div>
                <div className="iem">
                  <span className="tag-name">#Black</span>
                  <img src={cross} alt="" />
                </div>
                <div className="iem">
                  <span className="tag-name">#NaturalHair</span>
                  <img src={cross} alt="" />
                </div>
              </div>
              <div className="input-cover">
                <input type="text" placeholder="Add more tags...." />
              </div>
            </div>
          </div>
        </div>
        <div className="main-tab">
          <div className="top">
            <img className="star" src={leftStars} alt="" />
            <img className="star" src={rightStars} alt="" />
            <div className="title">Search Result</div>
            <div className="subtitle">Showing 9 results</div>
            <div className="input-cov">
              <input type="text" placeholder="search service" />
              <img src={cross} alt="" />
            </div>
          </div>
          <div className="sort">
            <label for="sort">Sort By:</label>
            <select type="text" id="sort">
              <option value="">Choose option</option>
              <option value="rated">Highest Rated</option>
              <option value="price">Most Expensive</option>
              <option value="location">Closest Option</option>
            </select>
          </div>
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
                <div className="line">
                  <span>Service 1</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 2</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 3</span>
                  <div className="price">£45</div>
                </div>
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
                <div className="line">
                  <span>Service 1</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 2</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 3</span>
                  <div className="price">£45</div>
                </div>
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
                <div className="line">
                  <span>Service 1</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 2</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 3</span>
                  <div className="price">£45</div>
                </div>
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
                <div className="line">
                  <span>Service 1</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 2</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 3</span>
                  <div className="price">£45</div>
                </div>
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
                <div className="line">
                  <span>Service 1</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 2</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 3</span>
                  <div className="price">£45</div>
                </div>
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
                <div className="line">
                  <span>Service 1</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 2</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 3</span>
                  <div className="price">£45</div>
                </div>
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
                <div className="line">
                  <span>Service 1</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 2</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 3</span>
                  <div className="price">£45</div>
                </div>
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
                <div className="line">
                  <span>Service 1</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 2</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 3</span>
                  <div className="price">£45</div>
                </div>
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
                <div className="line">
                  <span>Service 1</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 2</span>
                  <div className="price">£45</div>
                </div>
                <div className="line">
                  <span>Service 3</span>
                  <div className="price">£45</div>
                </div>
              </div>
              <a href="/">
                View More <img src={leftArrow} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer top />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {})(Explore);
