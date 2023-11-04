import React, { useState, useEffect } from "react";
import "../assets/styles/settings.css";
import { connect } from "react-redux";
import { getTicketFn } from "../store/actions/ticket";

const ShowTicket = ({ getTicketFn, ticket }) => {
  const [char, setChar] = useState({
    firstName: "",
    lastName: "",
    description: "",
    subject: "",
    no: "",
    createdAt: "",
    time: "",
  });
  const [id, setId] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split("/").pop();
    setId(id);
  }, []);

  useEffect(() => {
    if (ticket) {
      for (const key in ticket) {
        if (key in char) {
          if (key === "createdAt") {
            const dateString = ticket[key];
            const date = new Date(dateString);
            const formattedDate = `${
              date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()}`;
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const formattedTime = `${hours}:${
              minutes < 10 ? "0" : ""
            }${minutes}`;
            setChar((prevFormData) => ({
              ...prevFormData,
              createdAt: formattedDate,
              time: formattedTime,
            }));
          } else {
            setChar((prevFormData) => ({
              ...prevFormData,
              [key]: ticket[key],
            }));
          }
        }
      }
    }
  }, [ticket]);

  useEffect(() => {
    if (id) {
      getTicketFn(id);
    }
  }, [id]);

  return (
    <div className="home settings">
      <div className="top-bins">
        <div className="tic-name">Ticket Number: {char.no}</div>
        <div className="deets">
          <div className="date">Date: {char.createdAt}</div>
          <div className="subject">Subject: {char.subject}</div>
        </div>
      </div>
      <hr />
      <div className="ticket">
        <div className="item">
          <div className="img"></div>
          <div className="down">
            <div className="tic-line">
              <div className="name">
                {char.firstName} {char.firstName}
              </div>
              <div className="date">{char.time}</div>
            </div>
            <div className="message">{char.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
    ticket: state.ticket.one,
  };
}

export default connect(mapStateToProps, { getTicketFn })(ShowTicket);
