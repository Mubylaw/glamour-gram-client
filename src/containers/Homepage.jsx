import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Landing from "../components/Landing";
import Header from "../components/Header";

const Homepage = ({ currentUser, Page, position, title, noSide, exPos }) => {
  const navigate = useNavigate();
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

export default Homepage;
