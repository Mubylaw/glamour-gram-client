import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import add from "../assets/svg/add.svg";
import pin from "../assets/svg/pin.svg";
import { updateUser } from "../store/actions/user";

const PorfolioDash = ({ updateUser, user }) => {
  const handleChange = (e) => {
    const imgDiv = e.currentTarget.closest(".new");
    if (imgDiv) {
      imgDiv.classList.add("btn-load");
    }
    if (e.target.files) {
      var formData = new FormData();
      formData.append("portfolio", e.target.files[0]);
      updateUser(formData, "", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  };

  useEffect(() => {
    const elementsWithBtnLoad = document.querySelectorAll(".btn-load");
    if (elementsWithBtnLoad.length > 0) {
      elementsWithBtnLoad.forEach((element) => {
        element.classList.remove("btn-load");
      });
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [user.portfolio, user.pin]);

  const handlePin = (e, pin, state) => {
    const imgDiv = e.currentTarget.closest(".img-cover");
    if (imgDiv) {
      imgDiv.classList.add("btn-load");
    }
    if (state) {
      updateUser({ pin });
    } else {
      updateUser({ unpin: pin });
    }
  };

  return (
    <div className="home profile">
      <div className="headr">My Portfolio</div>
      <div className="info ser">
        <p className="space">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
        <div className="new btn-load">
          <span className="btn_text">Upload Image</span>
          <input type="file" onChange={handleChange} />
          <img src={add} alt="" />
        </div>
      </div>
      <div className="portfolio">
        {user.pin &&
          user.pin.map((p, i) => (
            <div
              className="img-cover"
              key={i}
              onClick={(e) => handlePin(e, p, false)}
            >
              <img className="main" src={p} alt="" />
              <img src={pin} className="pin active" alt="" />
              <span className="btn_text"></span>
            </div>
          ))}
        {user.portfolio &&
          user.portfolio.map((p, i) => (
            <div
              className="img-cover "
              key={i}
              onClick={(e) => handlePin(e, p, true)}
            >
              <img className="main" src={p} alt="" />
              <img src={pin} className="pin" alt="" />
              <span className="btn_text"></span>
            </div>
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
  updateUser,
})(PorfolioDash);
