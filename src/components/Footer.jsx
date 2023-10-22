import "../assets/styles/landing.css";
import { Link } from "react-router-dom";
import fadLogo from "../assets/svg/fadLogo.svg";

const Footer = ({}) => {
  return (
    <div className="footer">
      <div className="logo">
        <img src="/assets/logo.png" alt="" />
        <img src="/assets/baye.png" alt="" />
      </div>
      <div className="copy">Copyright 2023 Bayecapital</div>
      <Link to="/haqadas">Haqadas</Link>
      <div className="shad">
        <img src={fadLogo} alt="Fad Logo" />
      </div>
    </div>
  );
};

export default Footer;
