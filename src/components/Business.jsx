import React, { useState, useRef, useEffect } from "react";
import "../assets/styles/landing.css";
import CurveSvg from "../assets/svg/curve";
import CircleSvg from "../assets/svg/circle";
import CapSvg from "../assets/svg/cap";
import bizBottom from "../assets/svg/bizBottom.svg";
import leftstar01 from "../assets/svg/leftstar01.svg";
import leftstar02 from "../assets/svg/leftstar02.svg";
import rightstar01 from "../assets/svg/rightstar01.svg";
import rightstar02 from "../assets/svg/rightstar02.svg";
import bizprofile from "../assets/svg/bizprofile.svg";
import bizverification from "../assets/svg/bizverification.svg";
import bizbooking from "../assets/svg/bizbooking.svg";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { comeIn } from "../utils/motion";

const Business = ({ currentUser }) => {
  const [userMan, setUserMan] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser.isAuthenticated) {
      setUserMan(true);
    }
  }, [currentUser]);

  return (
    <div className="landing">
      <Header user={userMan} />
      <div className="biz-hero">
        <div className="title">
          Join GlamorGram and Empower Your Beauty Business!
        </div>
        <div className="subtitle">
          Whether you're a skilled hairstylist, makeup artist, nail technician,
          or spa expert, GlamorGram is your platform to showcase your talent,
          grow your clientele, and boost your career.
        </div>
        <img src={bizBottom} alt="" />
      </div>
      <div className="how-to">
        <div className="left">
          <img src={leftstar01} alt="" />
          <img src={leftstar02} alt="" />
          <img src={leftstar02} alt="" />
        </div>
        <div className="right">
          <img src={rightstar01} alt="" />
          <img src={rightstar02} alt="" />
          <img src={rightstar02} alt="" />
        </div>
        <div className="title">How to Join</div>
        <p>
          Embark on a journey of growth, creativity, and success. Join
          GlamorGram and become part of a supportive community dedicated to
          empowering beauty professionals. Your next client is just a click
          away!
        </p>
        <div className="items">
          <div className="ita">
            <div className="content">
              <div className="starter">Create Your Profile:</div>
              <p className="xbg">
                Sign up and create your professional profile. Showcase your
                skills, upload high-quality images of your work, and provide a
                compelling bio that highlights your expertise.
              </p>
              <p className="xsm">
                Sign up and create your professional profile. Showcase your
                skills.
              </p>
            </div>
            <div className="img">
              <img src={bizprofile} alt="" />
            </div>
          </div>
          <div className="ita">
            <div className="content">
              <div className="starter">Verification Process:</div>
              <p className="xbg">
                Our team will review your application to ensure the authenticity
                of your skills and qualifications. Once verified, you'll gain
                full access to the platform.
              </p>
              <p className="xsm">
                Our team will review your application to ensure authenticity.
              </p>
            </div>
            <div className="img">
              <img src={bizverification} alt="" />
            </div>
          </div>
          <div className="ita">
            <div className="content">
              <div className="starter">Start Booking Clients:</div>
              <p className="xbg">
                Once approved, you can start accepting bookings immediately.
                Clients will be able to discover your services, book
                appointments, and leave reviews based on their experience.
              </p>
              <p className="xsm">
                Once approved, you can start accepting bookings immediately.
              </p>
            </div>
            <div className="img">
              <img src={bizbooking} alt="" />
            </div>
          </div>
        </div>
        <div className="outerbtn">
          <a href="/signin" className="btn">
            Join Now
          </a>
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
      <Footer />
    </div>
  );
};

export default Business;
