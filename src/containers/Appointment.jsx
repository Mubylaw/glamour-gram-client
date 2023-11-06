import React, { useState, useEffect } from "react";
import "../assets/styles/calendar.css";
import { connect } from "react-redux";
import Calendar from "../components/Calendar";
import { getAppointmentsFn } from "../store/actions/appointment";
import Appoints from "../components/Appointment";

const Appointment = ({ getAppointmentsFn, user, appointments }) => {
  const [dates, setDates] = useState({});
  useEffect(() => {
    console.log(user);
    const date = new Date();
    getAppointmentsFn(
      `store=${user.id}&_greatertime=${date}&populate=user&sort=time&_boolstate=true`
    );
  }, []);

  useEffect(() => {
    var datt = [];
    appointments.map((app) => datt.push(app.time));
    setDates(datt);
  }, [appointments]);

  return (
    <div className="home cali">
      <div className="headr">Calendar Integration</div>
      <div className="info ser">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
      </div>
      <div className="calend">
        <Calendar cal={true} time dates={dates} />
      </div>
      <div className="tril">Appointments:</div>
      {appointments &&
        appointments.map((app, i) => <Appoints key={i} app={app} />)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
    appointments: state.appointment.all,
  };
}

export default connect(mapStateToProps, { getAppointmentsFn })(Appointment);
