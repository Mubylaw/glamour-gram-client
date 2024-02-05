import React, { useState } from "react";
import Lottie from "lottie-react";
import notfound from "../assets/animation/404.json";
import { Link } from "react-router-dom";
import "../assets/styles/NotFound.css";

const NotFound = ({}) => {
  return (
    <div className="notFound">
      <h1>We could not Find this business</h1>
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
