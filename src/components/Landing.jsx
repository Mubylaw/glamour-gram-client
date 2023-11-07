import React, { useState, useRef, useEffect } from "react";
import "../assets/styles/landing.css";
import SectionWrapper from "../hocs/SectionWrapper";
import cross from "../assets/svg/cross.svg";
import topCrown from "../assets/svg/topCrown.svg";
import bottomCrown from "../assets/svg/bottomCrown.svg";
import CurveSvg from "../assets/svg/curve";
import CircleSvg from "../assets/svg/circle";
import CapSvg from "../assets/svg/cap";
import stars from "../assets/svg/stars.svg";
import carousel from "../assets/svg/carousel.svg";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { comeIn, fadeIn, textVariant, zoomIn } from "../utils/motion";

const Landing = ({ currentUser }) => {
  const [tag, setTag] = useState([]);
  const [popu, setPopu] = useState(false);
  const typingTimer = useRef(null);
  const [userMan, setUserMan] = useState(false);
  const [char, setChar] = useState({
    location: "",
    serivce: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setPopu(true);
    clearTimeout(typingTimer.current);
    if (e.target.value === "") {
      setPopu(false);
    }
    typingTimer.current = setTimeout(() => {
      setPopu(false);
    }, 5000);
    if (e.target.name) {
      const { name, value } = e.target;
      setChar((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (currentUser && currentUser.isAuthenticated) {
      setUserMan(true);
    }
  }, [currentUser]);

  const handleService = () => {
    if (char.serivce) {
      setTag((prev) => [...prev, char.serivce]);
      setChar((prev) => ({
        ...prev,
        serivce: "",
      }));
    }
  };

  const handleFilter = (tg) => {
    const newTag = tag.filter((taag) => tg !== taag);
    setTag(newTag);
  };

  const handleSubmit = () => {
    if (tag.length > 0) {
      const tagStr = tag.join("-");
      navigate(`/explore?service=${tagStr}&location=${char.location}`);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  return (
    <div className="landing">
      <Header user={userMan} />
      <div className="hero">
        <h1>Discover Beauty. Book with Confidence.</h1>
        <div className="form">
          <input
            type="text"
            placeholder="What Service?"
            value={char.serivce}
            name="serivce"
            onChange={handleSearch}
          />
          <input
            type="text"
            placeholder="Which Location?"
            value={char.location}
            name="location"
            onChange={handleSearch}
          />
          <div className="search" onClick={handleSubmit}>
            Search
          </div>
          <img src={cross} alt="" onClick={handleService} />
        </div>
        <div className="tag">
          {tag.map((tg, i) => (
            <div className="inner" key={i}>
              <span>#{tg}</span>
              <img src={cross} alt="" onClick={() => handleFilter(tg)} />
            </div>
          ))}
        </div>
        <div className="dd"></div>
        <div
          className={`results ${popu ? "" : "hide"}`}
          onMouseOver={() => {
            setPopu(true);
            clearTimeout(typingTimer.current);
          }}
          onMouseLeave={handleSearch}
        >
          <div className="title">Popular Searches</div>
          <hr />
          <div
            className="item"
            onClick={() => setTag((prev) => [...prev, "Hair"])}
          >
            Hair
          </div>
          <div
            className="item"
            onClick={() => setTag((prev) => [...prev, "Gel Manicure"])}
          >
            Gel Manicure
          </div>
          <div
            className="item"
            onClick={() => setTag((prev) => [...prev, "Hollywood Wax"])}
          >
            Hollywood Wax
          </div>
          <div
            className="item"
            onClick={() => setTag((prev) => [...prev, "Brazilian Wax"])}
          >
            Brazilian Wax
          </div>
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
            <div className="subtitle">Easy Booking</div>
            <p>Schedule your next appointment with a simple click.</p>
          </div>
          <div className="tab">
            <div className="subtitle">Quality Assurance</div>
            <p>Vetted beauty experts for top-notch experiences.</p>
          </div>
          <div className="tab">
            <div className="subtitle">Personalised Experience</div>
            <p>Discover exclusive deals that cater to your needs.</p>
          </div>
          <div className="tab">
            <div className="subtitle">Effortless Payments</div>
            <p>Secure and seamless transactions for your peace of mind.</p>
          </div>
          <div className="tab">
            <div className="subtitle">One Stop Shop</div>
            <p>Manage all of your beauty and business needs in one place</p>
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
          <img
            src={carousel}
            className="left sm btn"
            alt=""
            onClick={handlePrev}
          />
          <div className="inner">
            <div className={`item ${currentIndex === 0 ? "active" : ""}`}>
              <div className="img">
                <img src="/assets/review%20(1).png" alt="" />
              </div>
              <div className="ins">
                <div className="title">Discover Expert Eyeshadow Artists</div>
                <p>
                  Elevate your look with expert eyeshadow stylists. Let skilled
                  professionals bring out the beauty of your eyes with stunning
                  colors and techniques.
                </p>
              </div>
            </div>
            <div className={`item ${currentIndex === 1 ? "active" : ""}`}>
              <div className="img">
                <img src="/assets/review%20(2).png" alt="" />
              </div>
              <div className="ins">
                <div className="title">Try Sugar Waxing Today</div>
                <p>
                  Experience Gentle Sugar Waxing with Skilled Professionals.
                  Connect with experts who use sugar wax for a kinder hair
                  removal experience.
                </p>
              </div>
            </div>
            <div className={`item ${currentIndex === 2 ? "active" : ""}`}>
              <div className="img">
                <img src="/assets/review%20(3).png" alt="" />
              </div>
              <div className="ins">
                <div className="title">Discover BIAB Nail Artists</div>
                <p>
                  Enhance Your Nails with BIAB Specialists. Transform your nails
                  without extensions, and enjoy stronger nails. Connect with
                  experts skilled in Builder in a Bottle techniques.
                </p>
              </div>
            </div>
            <div className={`item ${currentIndex === 3 ? "active" : ""}`}>
              <div className="img">
                <img src="/assets/review%20(4).png" alt="" />
              </div>
              <div className="ins">
                <div className="title">Find Your Afro Hair Expert</div>
                <p>
                  Embrace Vibrant Afro Hair with Specialized Stylists. Get the
                  perfect highlights that complement your unique style
                </p>
              </div>
            </div>
          </div>
          <img
            src={carousel}
            className="right sm btn"
            alt=""
            onClick={handleNext}
          />
        </div>
        <div className="btn-group">
          <Link to="/explore" className="btn">
            Explore Glamor Gram
          </Link>
          <Link to="/signin" className="btn join">
            Join Now
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
