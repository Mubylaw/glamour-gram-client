import React, { useState } from "react";
import Lottie from "lottie-react";
import load from "../assets/animation/load.json";
import "../assets/styles/NotFound.css";

const Loader = ({}) => {
  return (
    <div className="notFound load">
      <Lottie animationData={load} />
    </div>
  );
};

export default Loader;
