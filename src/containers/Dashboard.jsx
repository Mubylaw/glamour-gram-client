import React, { useState, useEffect } from "react";
// import "../assets/dashboard/dashboard.css";
import { connect } from "react-redux";

const Dashboard = ({}) => {
  return <div className="home">Dashboard</div>;
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {})(Dashboard);
