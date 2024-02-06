import React, { useState } from "react";
import Lottie from "lottie-react";
import notfound from "../assets/animation/404.json";
import { Link } from "react-router-dom";
import "../assets/styles/notFound.css";

const NotFound = ({ xplor }) => {
  return (
    <div className={`notFound ${xplor ? "xplor" : ""}`}>
      <h1>
        {xplor
          ? "We could not find businesses that match"
          : "We could not Find this business"}
      </h1>
      <Lottie animationData={notfound} />
      <div className="btn-group">
        <Link to="/" className="btn">
          Go Home
        </Link>
        <Link to="/explore" className="btn">
          Explore more
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
