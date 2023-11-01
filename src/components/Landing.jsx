import React, { useState, useRef } from "react";
import "../assets/styles/landing.css";
import SectionWrapper from "../hocs/SectionWrapper";

import cross from "../assets/svg/cross.svg";
import topCrown from "../assets/svg/topCrown.svg";
import bottomCrown from "../assets/svg/bottomCrown.svg";
import CurveSvg from "../assets/svg/curve";
import CircleSvg from "../assets/svg/circle";
import CapSvg from "../assets/svg/cap";
import stars from "../assets/svg/stars.svg";

import Header from "./Header";
import Footer from "./Footer";

const Landing = ({}) => {
  const [tag, setTag] = useState([]);
  const [popu, setPopu] = useState(false);
  const typingTimer = useRef(null);

  const handleSearch = (e) => {
    setPopu(true);
    clearTimeout(typingTimer.current);
    if (e.target.value === "") {
      setPopu(false);
    }
    typingTimer.current = setTimeout(() => {
      setPopu(false);
    }, 5000);
  };
  return (
    <div className="landing">
      <Header />
      <div className="hero">
        <h1>Discover Beauty. Book with Confidence.</h1>
        <div className="form">
          <input
            type="text"
            placeholder="What Service?"
            onChange={handleSearch}
          />
          <input
            type="text"
            placeholder="Which Location?"
            onChange={handleSearch}
          />
          <div className="search">Search</div>
        </div>
        <div className="tag">
          <div className="inner">
            <span>#hair</span>
            <img src={cross} alt="" />
          </div>
          <div className="inner">
            <span>#hair</span>
            <img src={cross} alt="" />
          </div>
        </div>
        <div className="dd"></div>
        <div className={`results ${popu ? "" : "hide"}`}>
          <div className="title">Popular Searches</div>
          <hr />
          <div className="item">Hair</div>
          <div className="item">Gel Manicure</div>
          <div className="item">Hollywood Wax</div>
          <div className="item">Brazilian Wax</div>
        </div>
      </div>
      <div className="why">
        <div className="title">
          <span>Why choose </span>
          <span className="alt">Glamor Gram?</span>
          <CurveSvg />
          <CircleSvg />
          <CapSvg />
        </div>
        <div className="tab-outer">
          <div className="tab">
            <div className="subtitle">Endless Options</div>
            <p>
              Discover hundreds of extraordinary beauty professionals in one
              place.
            </p>
          </div>
          <div className="tab">
            <div className="subtitle">Endless Options</div>
            <p>
              Discover hundreds of extraordinary beauty professionals in one
              place.
            </p>
          </div>
          <div className="tab">
            <div className="subtitle">Endless Options</div>
            <p>
              Discover hundreds of extraordinary beauty professionals in one
              place.
            </p>
          </div>
          <div className="tab">
            <div className="subtitle">Endless Options</div>
            <p>
              Discover hundreds of extraordinary beauty professionals in one
              place.
            </p>
          </div>
          <div className="tab">
            <div className="subtitle">Endless Options</div>
            <p>
              Discover hundreds of extraordinary beauty professionals in one
              place.
            </p>
          </div>
          <div className="tab">
            <div className="subtitle">Endless Options</div>
            <p>
              Discover hundreds of extraordinary beauty professionals in one
              place.
            </p>
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="title">
          <span>Glamor at your fingertips</span>
          <img src={topCrown} alt="" />
          <img src={bottomCrown} alt="" />
        </div>
        <div className="tile-outer">
          <div className="tile">
            <img src="/assets/nails.png" alt="" />
            <p>Nails</p>
          </div>
          <div className="tile">
            <img src="/assets/makeup.png" alt="" />
            <p>Makeup</p>
          </div>
          <div className="tile">
            <img src="/assets/skincare.png" alt="" />
            <p>Skincare</p>
          </div>
          <div className="tile">
            <img src="/assets/massage.png" alt="" />
            <p>Massage</p>
          </div>
          <div className="tile">
            <img src="/assets/hair-removal.png" alt="" />
            <p>Hair Removal</p>
          </div>
          <div className="tile">
            <img src="/assets/barber.png" alt="" />
            <p>Barber</p>
          </div>
          <div className="tile">
            <img src="/assets/aesthetics.png" alt="" />
            <p>Aesthetics</p>
          </div>
          <div className="tile">
            <img src="/assets/hair.png" alt="" />
            <p>Hair</p>
          </div>
        </div>
      </div>
      <div className="reviews">
        <img className="star" src={stars} alt="" />
        <img className="star" src={stars} alt="" />
        <div className="title">You saw it here first ...</div>
        <div className="subtitle">
          Discover the latest trends. Book with Ease. Showcase your talent.
        </div>
        <div className="rev-item">
          <div className="item">
            <div className="img">
              <img src="/assets/review%20(1).png" alt="" />
            </div>
            <div className="title">Discover Expert Eyeshadow Artists</div>
            <p>
              Elevate your look with expert eyeshadow stylists. Let skilled
              professionals bring out the beauty of your eyes with stunning
              colors and techniques.
            </p>
          </div>
          <div className="item">
            <div className="img">
              <img src="/assets/review%20(2).png" alt="" />
            </div>
            <div className="title">Discover Expert Eyeshadow Artists</div>
            <p>
              Elevate your look with expert eyeshadow stylists. Let skilled
              professionals bring out the beauty of your eyes with stunning
              colors and techniques.
            </p>
          </div>
          <div className="item">
            <div className="img">
              <img src="/assets/review%20(3).png" alt="" />
            </div>
            <div className="title">Discover Expert Eyeshadow Artists</div>
            <p>
              Elevate your look with expert eyeshadow stylists. Let skilled
              professionals bring out the beauty of your eyes with stunning
              colors and techniques.
            </p>
          </div>
          <div className="item">
            <div className="img">
              <img src="/assets/review%20(4).png" alt="" />
            </div>
            <div className="title">Discover Expert Eyeshadow Artists</div>
            <p>
              Elevate your look with expert eyeshadow stylists. Let skilled
              professionals bring out the beauty of your eyes with stunning
              colors and techniques.
            </p>
          </div>
        </div>
        <div className="btn-group">
          <div className="btn">Explore Glamor Gram</div>
          <div className="btn join">Join Now</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SectionWrapper(Landing, "Landing");
