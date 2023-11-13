import React, { useState, useRef, useEffect } from "react";
import "../assets/styles/landing.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Empty = ({ currentUser }) => {
  return (
    <div className="landing">
      <Header user={currentUser.isAuthenticated} />
      <div className="empty"></div>
      <Footer />
    </div>
  );
};

export default Empty;
