import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import edit from "../assets/svg/edit.svg";
import arrow from "../assets/svg/sideBlack.svg";
import { addBookingFn } from "../store/actions/booking";
import { useNavigate } from "react-router-dom";

const NewBooking = ({ total, addBookingFn, booking }) => {
  const [show, setShow] = useState(3);
  const [char, setChar] = useState({
    cancellation: "",
    rescheduling: "",
    noShow: "",
    deposit: "",
    client: "",
    general: "",
    business: "",
  });
  const [view, setView] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChar((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!view) {
      setView(true);
      addBookingFn(char);
    }
  };

  useEffect(() => {
    if (booking.new && booking.new._id) {
      setView(false);
      navigate(`/booking/${booking.new._id}`);
    }
  }, [booking.new]);

  return (
    <div className="home profile">
      <div className="headr">Booking Information</div>
      <div className="info book">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
      </div>
      <div className="booking">
        <div className="subtitle">Booking Policies</div>
        <div className="subtitle">Hair by xyz booking policy V{total + 1}</div>
        <div className="form">
          <div className="item">
            <label htmlFor="cancellation">Cancellation Policy:</label>
            <textarea
              type="text"
              id="cancellation"
              name="cancellation"
              value={char.cancellation}
              onChange={handleChange}
            />
            <img src={edit} alt="" />
          </div>
          <div className="item">
            <label htmlFor="rescheduling">Rescheduling Policy:</label>
            <textarea
              type="text"
              id="rescheduling"
              name="rescheduling"
              value={char.rescheduling}
              onChange={handleChange}
            />
            <img src={edit} alt="" />
          </div>
          <div className="item">
            <label htmlFor="noShow">No Show Policy:</label>
            <textarea
              type="text"
              id="noShow"
              name="noShow"
              value={char.noShow}
              onChange={handleChange}
            />
            <img src={edit} alt="" />
          </div>
          <div className={`item ${show > 3 ? "" : "hide"}`}>
            <label htmlFor="deposit">Deposit Requirements:</label>
            <textarea
              type="text"
              id="deposit"
              name="deposit"
              value={char.deposit}
              onChange={handleChange}
            />
            <img src={edit} alt="" />
          </div>
          <div className={`item ${show > 4 ? "" : "hide"}`}>
            <label htmlFor="client">Instructions for Clients:</label>
            <textarea
              type="text"
              id="client"
              name="client"
              value={char.client}
              onChange={handleChange}
            />
            <img src={edit} alt="" />
          </div>
          <div className={`item ${show > 5 ? "" : "hide"}`}>
            <label htmlFor="general">General Information:</label>
            <textarea
              type="text"
              id="general"
              name="general"
              value={char.general}
              onChange={handleChange}
            />
            <img src={edit} alt="" />
          </div>
          <div className={`item ${show > 6 ? "" : "hide"}`}>
            <label htmlFor="business">Business Information:</label>
            <textarea
              type="text"
              id="business"
              name="business"
              value={char.business}
              onChange={handleChange}
            />
            <img src={edit} alt="" />
          </div>
        </div>
        <div
          className={`more ${show > 6 ? "hide" : ""}`}
          onClick={() => setShow(show + 1)}
        >
          <span>Add more sections</span>
          <img src={arrow} alt="" />
        </div>
        <div className="hr"></div>
        <div className="btn-cover">
          <div
            className={`btn ${view ? "btn-load" : ""}`}
            onClick={handleSubmit}
          >
            <span className="btn_text">Create Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
    total: state.booking.total,
    booking: state.booking,
  };
}

export default connect(mapStateToProps, { addBookingFn })(NewBooking);
