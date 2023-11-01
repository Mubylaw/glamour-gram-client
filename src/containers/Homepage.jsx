import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Landing from "../components/Landing";
import Header from "../components/Header";

const Homepage = ({ currentUser, Page, position, title, noSide }) => {
  const navigate = useNavigate();
  console.log(currentUser);
  return (
    <>
      {!currentUser.isAuthenticated ? (
        <>
          <Header />
          <div className="dash-container">
            <Nav
              navigate={navigate}
              position={position}
              title={title}
              role={currentUser.user.role}
              noSide={noSide}
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
