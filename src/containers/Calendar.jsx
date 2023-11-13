import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import add from "../assets/svg/add.svg";
import { googleUrl, googleUser } from "../store/actions/auth";
import { updateUser } from "../store/actions/user";

const Calendar = ({ googleUrl, url, googleUser, user, updateUser }) => {
  const [view, setView] = useState(false);
  const handleUrl = () => {
    googleUrl();
  };

  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);

  useEffect(() => {
    const query = window.location.search;
    if (query.includes("code=")) {
      googleUser(query);
    }
  }, []);

  const handleSubmit = () => {
    if (!view) {
      setView(true);
      updateUser({ refreshToken: undefined });
    }
  };

  return (
    <div className="home profile cali">
      <div className="headr">Calendar Integration</div>
      <div className="info ser">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
        <div className="new" onClick={handleUrl}>
          <span>Add Calendar</span>
          <img src={add} alt="" />
        </div>
      </div>
      <div className="service">
        {user.refreshToken && (
          <div className="line">
            <div className="name">Google Calendar</div>
            <div className="btn-group">
              <div
                className={`btn rem ${view ? "btn-load" : ""}`}
                onClick={handleSubmit}
              >
                <span className="btn_text">Remove</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hr"></div>
      <div className="btn-cover">
        <div className="btn">Save Changes</div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
    url: state.authUrl.url,
  };
}

export default connect(mapStateToProps, {
  googleUrl,
  googleUser,
  updateUser,
})(Calendar);
