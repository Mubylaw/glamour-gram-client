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
import { comeIn, fadeIn, textVariant, drawStroke } from "../utils/motion";

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

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleService();
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
    } else if (char.serivce) {
      navigate(`/explore?service=${char.serivce}&location=${char.location}`);
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
        <div className="ins"></div>

        <div className="form">
          <motion.div
            variants={textVariant(1.25, 1.75)}
            initial="hidden"
            animate="show"
            className="inpo"
          >
            <input
              type="text"
              placeholder="What Service?"
              value={char.serivce}
              name="serivce"
              onChange={handleSearch}
              onKeyUp={handleKeyUp}
            />
          </motion.div>
          <motion.div
            variants={textVariant(1.75, 1.75)}
            initial="hidden"
            animate="show"
            className="inpo"
          >
            <input
              type="text"
              placeholder="Which Location?"
              value={char.location}
              name="location"
              onChange={handleSearch}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "spring", 2.25, 1.25, 50)}
            initial="hidden"
            animate="show"
          >
            <div className="search" onClick={handleSubmit}>
              Search
            </div>
          </motion.div>
          <motion.div
            variants={comeIn(1.75, 1.75)}
            initial="hidden"
            animate="show"
          >
            <img src={cross} alt="" onClick={handleService} />
          </motion.div>
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
          <span className="alt">GlamorGram?</span>
          <CurveSvg />
          <CircleSvg />
          <CapSvg />
        </div>
        <div className="tab-outer">
          <motion.div
            variants={comeIn(0, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tab"
          >
            <div className="subtitle">Endless Options</div>
            <p>
              Discover hundreds of extraordinary beauty professionals in one
              place.
            </p>
          </motion.div>
          <motion.div
            variants={comeIn(0.25, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tab"
          >
            <div className="subtitle">Easy Booking</div>
            <p>Schedule your next appointment with a simple click.</p>
          </motion.div>
          <motion.div
            variants={comeIn(0.5, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tab"
          >
            <div className="subtitle">Quality Assurance</div>
            <p>Vetted beauty experts for top-notch experiences.</p>
          </motion.div>
          <motion.div
            variants={comeIn(0.75, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tab"
          >
            <div className="subtitle">Personalised Experience</div>
            <p>Discover exclusive deals that cater to your needs.</p>
          </motion.div>
          <motion.div
            variants={comeIn(1, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tab"
          >
            <div className="subtitle">Effortless Payments</div>
            <p>Secure and seamless transactions for your peace of mind.</p>
          </motion.div>
          <motion.div
            variants={comeIn(1.25, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tab"
          >
            <div className="subtitle">One Stop Shop</div>
            <p>Manage all of your beauty and business needs in one place</p>
          </motion.div>
        </div>
      </div>
      <div className="categories">
        <motion.div
          variants={fadeIn("down", "spring", 0, 1.5, 100)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}
          className="title"
        >
          <span>Glamor at your fingertips</span>
          <img src={topCrown} alt="" />
          <img src={bottomCrown} alt="" />
        </motion.div>
        <div className="tile-outer">
          <motion.a
            variants={comeIn(1.75, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tile"
            href="/explore?service=Hair"
          >
            <img className="sm" src="/assets/hair-mob.png" alt="" />
            <img className="bg" src="/assets/hair.png" alt="" />
            <p>Hair</p>
          </motion.a>
          <motion.a
            variants={comeIn(0.25, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tile"
            href="/explore?service=Makeup"
          >
            <img className="sm" src="/assets/makeup-mob.png" alt="" />
            <img className="bg" src="/assets/makeup.png" alt="" />
            <p>Makeup</p>
          </motion.a>
          <motion.a
            variants={comeIn(0, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tile"
            href="/explore?service=Nails"
          >
            <img className="sm" src="/assets/nails-mob.png" alt="" />
            <img className="bg" src="/assets/nails.png" alt="" />
            <p>Nails</p>
          </motion.a>

          <motion.a
            variants={comeIn(0.5, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tile"
            href="/explore?service=Skincare"
          >
            <img className="sm" src="/assets/skincare-mob.png" alt="" />
            <img className="bg" src="/assets/skincare.png" alt="" />
            <p>Skincare</p>
          </motion.a>

          <motion.a
            variants={comeIn(1, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tile"
            href="/explore?service=Hair%20Removal"
          >
            <img className="sm" src="/assets/hair-removal-mob.png" alt="" />
            <img className="bg" src="/assets/hair-removal.png" alt="" />
            <p>Hair Removal</p>
          </motion.a>
          <motion.a
            variants={comeIn(1.25, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tile"
            href="/explore?service=Barber"
          >
            <img className="sm" src="/assets/barber-mob.png" alt="" />
            <img className="bg" src="/assets/barber.png" alt="" />
            <p>Barber</p>
          </motion.a>
          <motion.a
            variants={comeIn(1.5, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tile"
            href="/explore?service=Aesthetics"
          >
            <img className="sm" src="/assets/aesthetics-mob.png" alt="" />
            <img className="bg" src="/assets/aesthetics.png" alt="" />
            <p>Aesthetics</p>
          </motion.a>
          <motion.a
            variants={comeIn(0.75, 1.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="tile"
            href="/explore?service=Massage"
          >
            <img className="sm" src="/assets/massage-mob.png" alt="" />
            <img className="bg" src="/assets/massage.png" alt="" />
            <p>Massage</p>
          </motion.a>
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
            <a
              href="/blog"
              className={`item ${currentIndex === 0 ? "active" : ""}`}
            >
              <div className="img">
                <img src="/assets/review%20(1).png" alt="" />
              </div>
              <div className="ins">
                <div className="title">Discover Expert Eyeshadow Artists</div>
                <p className="ex-bg">
                  Elevate your look with expert eyeshadow stylists. Let skilled
                  professionals bring out the beauty of your eyes with stunning
                  colors and techniques.
                </p>
                <p className="ex-sm">
                  Elevate your look with expert eyeshadow stylists.
                </p>
              </div>
            </a>
            <a
              href="/blog"
              className={`item ${currentIndex === 1 ? "active" : ""}`}
            >
              <div className="img">
                <img src="/assets/review%20(2).png" alt="" />
              </div>
              <div className="ins">
                <div className="title">Try Sugar Waxing Today</div>
                <p className="ex-bg">
                  Experience Gentle Sugar Waxing with Skilled Professionals.
                  Connect with experts who use sugar wax for a kinder hair
                  removal experience.
                </p>
                <p className="ex-sm">
                  Experience Gentle Sugar Waxing with Skilled Professionals.
                </p>
              </div>
            </a>
            <a
              href="/blog"
              className={`item ${currentIndex === 2 ? "active" : ""}`}
            >
              <div className="img">
                <img src="/assets/review%20(3).png" alt="" />
              </div>
              <div className="ins">
                <div className="title">Discover BIAB Nail Artists</div>
                <p className="ex-bg">
                  Enhance Your Nails with BIAB Specialists. Transform your nails
                  without extensions, and enjoy stronger nails. Connect with
                  experts skilled in Builder in a Bottle techniques.
                </p>
                <p className="ex-sm">
                  Transform your nails without extensions, and enjoy stronger
                  nails.
                </p>
              </div>
            </a>
            <a
              href="/blog"
              className={`item ${currentIndex === 3 ? "active" : ""}`}
            >
              <div className="img">
                <img src="/assets/review%20(4).png" alt="" />
              </div>
              <div className="ins">
                <div className="title">Find Your Afro Hair Expert</div>
                <p className="ex-bg">
                  Embrace Vibrant Afro Hair with Specialized Stylists. Get the
                  perfect highlights that complement your unique style
                </p>
                <p className="ex-sm">
                  Embrace Vibrant Afro Hair with Specialized Stylists.
                </p>
              </div>
            </a>
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
            Explore GlamorGram
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
