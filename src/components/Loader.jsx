import React, { useState } from "react";
import Lottie from "lottie-react";
import load from "../assets/animation/load.json";
import "../assets/styles/notFound.css";

const Loader = ({ xplor }) => {
  return (
    <div className={`notFound load ${xplor ? "xplor" : ""}`}>
      <Lottie animationData={load} />
    </div>
  );
};

export default Loader;
