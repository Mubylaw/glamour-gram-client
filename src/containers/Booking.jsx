import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { getBookingsFn } from "../store/actions/booking";
import Policy from "../components/Policy";

const Booking = ({ getBookingsFn, user, bookings }) => {
  useEffect(() => {
    getBookingsFn(`user=${user.id}&populate=user`);
  }, []);

  return (
    <div className="home profile">
      <div className="headr">Booking Information</div>
      <div className="info book">
        <p className="space">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
        <div className="new">
          <Link to="/booking/new">New Policy</Link>
        </div>
      </div>
      <div className="booking">
        <div className="subtitle">Booking Policies</div>
        <div className="tril">Active:</div>
        {bookings.map((bk, i) => (
          <Policy bk={bk} active={true} key={i} />
        ))}
        <div className="tril">Inactive:</div>
        {bookings.map((bk, i) => (
          <Policy bk={bk} active={false} key={i} />
        ))}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
    bookings: state.booking.all,
  };
}

export default connect(mapStateToProps, {
  getBookingsFn,
})(Booking);
