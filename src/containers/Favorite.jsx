import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../store/actions/user.jsx";
import ServiceCard from "../components/serviceCard.jsx";

const Favorite = ({ getUser, user }) => {
  useEffect(() => {
    getUser(user.id, "populate=favorite");
  }, []);

  return (
    <div className="home profile full">
      <div className="headr">Favorite</div>
      <div className="res-tab">
        {user.favorite &&
          user.favorite.map((usr) => (
            <ServiceCard service={usr} key={usr._id} locs />
          ))}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {
  getUser,
})(Favorite);
