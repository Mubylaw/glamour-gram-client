import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import { updateUser } from "../store/actions/user";
import { uploadAvatar } from "../store/actions/auth";
import slugify from "slugify";

const Profile = ({ user, updateUser, uploadAvatar }) => {
  const [char, setChar] = useState({
    location: "",
    phoneNo: "",
    industry: "",
    certs: "",
    insta: "",
    username: "",
    facebook: "",
    twitter: "",
    firstName: "",
    lastName: "",
    male: false,
    email: "",
    female: true,
    picture: "",
    about: "",
    priceType: "flat",
    priceAmount: 0,
    currency: "euros",
    address: "",
    homeService: "",
    // type: "",
  });
  const [view, setView] = useState(false);
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    var { name, value } = e.target;
    if (name === "username") {
      value = slugify(value, { lower: true });
    }
    if (name === "phoneNo") {
      const pattern = /^(?:\+44|\+353|44|353)/;
      if (value.length > 4 && !pattern.test(value)) {
        value = "";
        setErr("Phone No should start with either +353 or +44");
      } else {
        setErr(false);
      }
    }

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
      const elementsWithBtnLoad = document.querySelectorAll(".btn-load");
      if (elementsWithBtnLoad.length > 0) {
        elementsWithBtnLoad.forEach((element) => {
          element.classList.remove("btn-load");
        });
      }
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
    if (!view) {
      setView(true);
      updateUser(char);
    }
  };

  const handleFileChange = (e) => {
    const imgDiv = e.currentTarget.closest(".img");
    if (imgDiv) {
      imgDiv.classList.add("btn-load");
    }
    if (e.target.files) {
      var formData = new FormData();
      formData.append("avatar", e.target.files[0]);
      uploadAvatar(formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  };

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setChar((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  return (
    <div className="home profile">
      <div className="headr">Profile Settings</div>
      <div className="info nil">
        <div className="img">
          <input type="file" onChange={handleFileChange} />
          {char.picture && char.picture !== "no-user.jpg" && (
            <img src={char.picture} alt="" />
          )}
          <span className="btn_text"></span>
        </div>
        <div className="name">
          {user.role === "business"
            ? char.name
            : `${char.firstName} ${char.lastName}`}
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
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                onChange={handleChange}
                value={char.username}
                name="username"
              />
            </div>
            <div className="item">
              <label htmlFor="about">About Business:</label>
              <textarea
                type="text"
                id="about"
                onChange={handleChange}
                value={char.about}
                name="about"
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
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.address}
                name="address"
              />
            </div>
            <div className="item">
              <label htmlFor="priceType">Booking Fee:</label>
              <select
                id="priceType"
                name="priceType"
                onChange={handleChange}
                value={char.priceType}
                type="text"
                placeholder="Ex: "
              >
                <option value="">--Please choose an option--</option>
                <option value="flat">Flat rate</option>
                <option value="percent">Percentage of service</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="currency">Currency:</label>
              <select
                id="currency"
                name="currency"
                onChange={handleChange}
                value={char.currency}
                type="text"
                placeholder="Ex: "
              >
                <option value="">--Please choose an option--</option>
                <option value="euros">€</option>
                <option value="pounds">£</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="priceAmount">
                Price (
                {char.priceType === "flat"
                  ? char.currency === "pounds"
                    ? "£"
                    : "€"
                  : "%"}
                ):
              </label>
              <input
                type="number"
                onChange={handleChange}
                value={char.priceAmount}
                name="priceAmount"
              />
            </div>
            <div className="item">
              <label htmlFor="phoneNo">Phone Number:</label>
              <div className="tos">
                {err && <div className="err">{err}</div>}
                <input
                  type="text"
                  onChange={handleChange}
                  value={char.phoneNo}
                  name="phoneNo"
                  className={err ? "err-inp" : ""}
                />
              </div>
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
            <div className="item">
              <label htmlFor="homeService">Home Service:</label>
              <div className="input">
                <div className="box">
                  <input
                    type="checkbox"
                    id="type"
                    onChange={handleCheck}
                    checked={char.homeService}
                    name="homeService"
                  />
                </div>
              </div>
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
                    onChange={handleCheck}
                    checked={char.female}
                    name="female"
                  />
                  <label htmlFor="">Women</label>
                </div>
                <div className="box">
                  <input
                    type="checkbox"
                    id="type"
                    onChange={handleCheck}
                    checked={char.male}
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
  uploadAvatar,
})(Profile);
