import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import edit from "../assets/svg/edit.svg";
import arrow from "../assets/svg/sideBlack.svg";
import { getBookingFn, updateBookingFn } from "../store/actions/booking";

const Booking = ({ total, booking, getBookingFn, updateBookingFn, update }) => {
  const [show, setShow] = useState(3);
  const [id, setId] = useState("");
  const [char, setChar] = useState({
    cancellation: "",
    rescheduling: "",
    noShow: "",
    deposit: "",
    client: "",
    general: "",
    business: "",
    no: 0,
    active: false,
  });
  const [click, setClick] = useState(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split("/").pop();
    setId(id);
  }, []);

  useEffect(() => {
    if (id) {
      getBookingFn(id);
    }
  }, [id]);

  useEffect(() => {
    if (booking) {
      for (const key in booking) {
        if (key in char) {
          setChar((prevFormData) => ({
            ...prevFormData,
            [key]: booking[key],
          }));
        }
      }
    }
  }, [booking]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChar((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (update) {
      if (update._id && click) {
        setView(false);
        setClick(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  }, [update]);

  const handleSubmit = () => {
    if (!view) {
      setView(true);
      setClick(true);
      updateBookingFn(char, id);
    }
  };

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
        <div className="subtitle">Hair by xyz booking policy V{char.no}</div>
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
            className="btn acv"
            onClick={() =>
              setChar((prevFormData) => ({
                ...prevFormData,
                active: !char.active,
              }))
            }
          >
            {char.active ? "Deactivate" : "Activate"}
          </div>
          <div
            className={`btn ${view ? "btn-load" : ""}`}
            onClick={handleSubmit}
          >
            <span className="btn_text">Save Changes</span>
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
    booking: state.booking.one,
    update: state.booking.update,
  };
}

export default connect(mapStateToProps, {
  getBookingFn,
  updateBookingFn,
})(Booking);
