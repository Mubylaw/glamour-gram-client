import React, { useState } from "react";
import "../assets/styles/landing.css";
import SectionWrapper from "../hocs/SectionWrapper";

const Landing = ({}) => {
  return (
    <div className="landing">
      <h1>Landing</h1>
    </div>
  );
};

export default SectionWrapper(Landing, "Landing");
