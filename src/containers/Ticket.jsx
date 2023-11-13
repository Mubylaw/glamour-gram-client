import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import { addTicketFn } from "../store/actions/ticket";
import { useNavigate } from "react-router-dom";

const Ticket = ({ addTicketFn, ticket }) => {
  const [char, setChar] = useState({
    firstName: "",
    lastName: "",
    description: "",
    subject: "",
  });
  const [view, setView] = useState(false);
  const [click, setClick] = useState(false);
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
      setClick(true);
      addTicketFn(char);
    }
  };

  useEffect(() => {
    if (ticket.new && ticket.new._id && click) {
      setView(false);
      navigate(`/ticket/${ticket.new._id}`);
    }
  }, [ticket.new]);

  return (
    <div className="home profile">
      <div className="headr">Raise a Ticket</div>
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, et!
          Obcaecati, accusantium ut id quos consequatur natus ipsum maiores
          saepe repudiandae enim, inventore officiis. Quibusdam adipisci eum
          eaque excepturi quidem.
        </p>
      </div>
      <div className="form">
        <div className="item">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={char.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={char.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={char.subject}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={char.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="btn-cover">
        <div className={`btn ${view ? "btn-load" : ""}`} onClick={handleSubmit}>
          <span className="btn_text">Send</span>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
    ticket: state.ticket,
  };
}

export default connect(mapStateToProps, { addTicketFn })(Ticket);
