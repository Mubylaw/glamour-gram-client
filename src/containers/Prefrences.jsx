import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import { updateUser } from "../store/actions/user";

const Prefrence = ({ user, updateUser }) => {
  const [emailNotification, setEmailNotification] = useState(false);
  const [siteNotification, setSiteNotification] = useState(false);
  const [smsNotification, setSmsNotification] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click) {
      updateUser({ emailNotification, smsNotification, siteNotification });
    }
  }, [emailNotification, siteNotification, smsNotification]);

  useEffect(() => {
    setEmailNotification(user.emailNotification);
    setSmsNotification(user.smsNotification);
    setSiteNotification(user.siteNotification);
  }, [user]);

  return (
    <div className="home profile cali">
      <div className="headr">Prefrences</div>
      <div className="info ser">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
      </div>
      <div className="service">
        <div className="line">
          <div className="name">Email</div>
          <div className="btn-group">
            <div
              className={`btn ${emailNotification ? "rem" : ""}`}
              onClick={() => {
                setEmailNotification(!emailNotification);
                setClick(true);
              }}
            >
              {emailNotification ? "on" : "off"}
            </div>
          </div>
        </div>
        <div className="line">
          <div className="name">Website</div>
          <div className="btn-group">
            <div
              className={`btn ${siteNotification ? "rem" : ""}`}
              onClick={() => {
                setSiteNotification(!siteNotification);
                setClick(true);
              }}
            >
              {siteNotification ? "on" : "off"}
            </div>
          </div>
        </div>
        <div className="line">
          <div className="name">SMS Messages</div>
          <div className="btn-group">
            <div
              className={`btn ${smsNotification ? "rem" : ""}`}
              onClick={() => {
                setSmsNotification(!smsNotification);
                setClick(true);
              }}
            >
              {smsNotification ? "on" : "off"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, { updateUser })(Prefrence);
