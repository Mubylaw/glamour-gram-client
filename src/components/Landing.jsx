import React, { useState } from "react";
import "../assets/styles/landing.css";
import SectionWrapper from "../hocs/SectionWrapper";
import down from "../assets/svg/down.svg";
import cross from "../assets/svg/cross.svg";
import topCrown from "../assets/svg/topCrown.svg";
import bottomCrown from "../assets/svg/bottomCrown.svg";
import CurveSvg from "../assets/svg/curve";
import CircleSvg from "../assets/svg/circle";
import CapSvg from "../assets/svg/cap";
import stars from "../assets/svg/stars.svg";
import facebook from "../assets/svg/facebook.svg";
import insta from "../assets/svg/insta.svg";
import twitter from "../assets/svg/twitter.svg";
import linkedin from "../assets/svg/linkedin.svg";
import youtube from "../assets/svg/youtube.svg";

const Landing = ({}) => {
  const [tag, setTag] = useState([]);
  return (
    <div className="landing">
      <div className="header">
        <div className="logo">
          <img src="/assets/logo.png" alt="" />
        </div>
        <div className="links">
          <div className="nav-link">
            <span>featured Services</span>
            <img src={down} alt="down" />
            <div className="in"></div>
            <div className="inner">
              <div className="line">Hair</div>
              <div className="line">Hair</div>
              <div className="line">Hair</div>
              <div className="line">Hair</div>
            </div>
          </div>
          <div className="nav-link">
            <span>Glamor Gram Business</span>
            <img src={down} alt="down" />
            <div className="in"></div>
            <div className="inner">
              <div className="line">Hair</div>
              <div className="line">Hair</div>
              <div className="line">Hair</div>
              <div className="line">Hair</div>
            </div>
          </div>
          <div className="nav-link">
            <span>About Us</span>
          </div>
          <div className="nav-link">
            <span>Contact Us</span>
          </div>
          <div className="nav-link">
            <div className="log-in">Log In</div>
          </div>
        </div>
      </div>
      <div className="hero">
        <h1>Discover Beauty. Book with Confidence.</h1>
        <div className="form">
          <input type="text" placeholder="What Service?" />
          <input type="text" placeholder="Which Location?" />
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
        <div className="results hide">
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
      <div className="footer">
        <div className="top">
          <div className="slide">
            <div className="logo">
              <img src="/assets/logo.png" alt="" />
            </div>
            <p>contact</p>
            <div className="no">02031234123</div>
            <div className="email">info@glamorgram.co.uk</div>
            <div className="social">
              <img src={facebook} alt="" />
              <img src={insta} alt="" />
              <img src={linkedin} alt="" />
              <img src={twitter} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
          <div className="slide info">
            <div className="line">
              <div className="item">FAQs</div>
              <div className="item">Blogs</div>
              <div className="item">Help and Support</div>
            </div>
            <div className="line">
              <div className="item">Pricing</div>
              <div className="item">Sign up to our newsletter</div>
              <div className="item">Testimonials</div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="copy">© 2023 Glamor Gram. All rights reserved.</div>
          <div className="terms">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookie Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Landing, "Landing");
