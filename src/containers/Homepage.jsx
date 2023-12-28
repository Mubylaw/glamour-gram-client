import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Landing from "../components/Landing";
import Header from "../components/Header";
import { connect } from "react-redux";
import { getUser } from "../store/actions/user";
import { googleUser } from "../store/actions/auth";

const Homepage = ({
  currentUser,
  Page,
  position,
  googleUser,
  title,
  noSide,
  exPos,
  getUser,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser.user.iat) {
      getUser(currentUser.user.id);
    }
  }, []);

  useEffect(() => {
    const query = window.location.search;
    if (query.includes("code=")) {
      googleUser(query);
    }
  }, []);

  return (
    <>
      {currentUser.isAuthenticated ? (
        <>
          <Header user />
          <div className="dash-container">
            <Nav
              navigate={navigate}
              position={position}
              title={title}
              role={currentUser.user.role}
              noSide={noSide}
              exPos={exPos}
            />
            <Page user={currentUser.user} />
          </div>
        </>
      ) : (
        <Landing />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
    url: state.authUrl.url,
  };
}

export default connect(mapStateToProps, {
  getUser,
  googleUser,
})(Homepage);
