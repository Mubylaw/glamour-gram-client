import React, { useState } from "react";
// import "../assets/styles/nav.css";

import { logout } from "../store/actions/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = ({ logout, navigate, position, title, role }) => {
  return (
    <div className="nav">
      <h1 className="nav">this is the nav</h1>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {
  logout,
})(Nav);
