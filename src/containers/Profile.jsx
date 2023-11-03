import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import { updateUser } from "../store/actions/user";

const Profile = ({ user, updateUser }) => {
  const [char, setChar] = useState({
    location: "",
    phoneNo: "",
    industry: "",
    certs: "",
    portfolio: "",
    insta: "",
    facebook: "",
    twitter: "",
    firstName: "",
    lastName: "",
    male: false,
    email: "",
    female: true,
    // type: "",
  });
  const [view, setView] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChar((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!user.iat) {
      setView(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      for (const key in user) {
        if (key in char) {
          setChar((prevFormData) => ({
            ...prevFormData,
            [key]: user[key],
          }));
        }
      }
    }
  }, [user]);

  const handleSubmit = () => {
    setView(true);
    updateUser(char);
  };

  return (
    <div className="home profile">
      <div className="headr">Profile Settings</div>
      <div className="info nil">
        <div className="img"></div>
        <div className="name">
          {user.role === "business"
            ? user.name
            : `${user.firstName} ${user.lastName}`}
        </div>
      </div>
      <div className="form">
        {user.role === "business" ? (
          <>
            <div className="item">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                onChange={handleChange}
                value={char.location}
                name="location"
              />
            </div>
            <div className="item">
              <label htmlFor="industry">Industry:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.industry}
                name="industry"
              />
            </div>
            <div className="item">
              <label htmlFor="phoneNo">Phone Number:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.phoneNo}
                name="phoneNo"
              />
            </div>
            <div className="item">
              <label htmlFor="email">Email Address:</label>
              <input
                type="text"
                onChange={handleChange}
                readOnly
                value={char.email}
                name="email"
              />
            </div>
            <div className="item">
              <label htmlFor="certs">Certifications & Credentials:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.certs}
                name="certs"
              />
            </div>
            <div className="item">
              <label htmlFor="portfolio">Porfolio Link:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.portfolio}
                name="portfolio"
              />
            </div>
            <div className="item">
              <label htmlFor="insta">Instagram:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.insta}
                name="insta"
              />
            </div>
            <div className="item">
              <label htmlFor="twitter">Twitter:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.twitter}
                name="twitter"
              />
            </div>
            <div className="item">
              <label htmlFor="facebook">Facebook:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.facebook}
                name="facebook"
              />
            </div>
          </>
        ) : (
          <>
            <div className="item">
              <label htmlFor="firstName">Fist Name:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.firstName}
                name="firstName"
              />
            </div>
            <div className="item">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.lastName}
                name="lastName"
              />
            </div>
            <div className="item">
              <label htmlFor="phoneNo">Phone Number:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.phoneNo}
                name="phoneNo"
              />
            </div>
            <div className="item">
              <label htmlFor="email">Email Address:</label>
              <input
                type="text"
                onChange={handleChange}
                readOnly
                value={char.email}
                name="email"
              />
            </div>
            <div className="item">
              <label htmlFor="location">Show me services for:</label>
              <div className="input">
                <div className="box">
                  <input
                    type="checkbox"
                    id="type"
                    onChange={handleChange}
                    value={char.female}
                    name="female"
                  />
                  <label htmlFor="">Women</label>
                </div>
                <div className="box">
                  <input
                    type="checkbox"
                    id="type"
                    onChange={handleChange}
                    value={char.male}
                    name="male"
                  />
                  <label htmlFor="">Men</label>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="hr"></div>
      <div className="btn-cover">
        <div className={`btn ${view ? "btn-load" : ""}`} onClick={handleSubmit}>
          <span className="btn_text">Save Changes</span>
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

export default connect(mapStateToProps, {
  updateUser,
})(Profile);
