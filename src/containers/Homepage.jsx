import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Landing from "../components/Landing";

const Homepage = ({ currentUser, Page, position, title }) => {
  const navigate = useNavigate();
  console.log(currentUser);
  return (
    <>
      {currentUser.isAuthenticated ? (
        <>
          <Nav
            navigate={navigate}
            position={position}
            title={title}
            role={currentUser.user.role}
          />
          <Page user={currentUser.user} />
        </>
      ) : (
        <Landing />
      )}
    </>
  );
};

export default Homepage;
