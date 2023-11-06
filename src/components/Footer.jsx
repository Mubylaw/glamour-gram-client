import "../assets/styles/landing.css";
import facebook from "../assets/svg/facebook.svg";
import insta from "../assets/svg/insta.svg";
import twitter from "../assets/svg/twitter.svg";
import linkedin from "../assets/svg/linkedin.svg";
import youtube from "../assets/svg/youtube.svg";

const Footer = ({ top }) => {
  return (
    <div className={`footer ${top ? "br-top" : ""}`}>
      <div className="top">
        <div className="slide">
          <div className="logo bg">
            <img src="/assets/logo.png" alt="" />
          </div>
          <div>
            <p>contact</p>
            <div className="no">02031234123</div>
            <div className="email">info@glamorgram.co.uk</div>
          </div>
          <div className="social">
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
        <div className="slide info">
          <div className="line">
            <div className="item">FAQs</div>
            <div className="item">Blogs</div>
            <div className="item">Help and Support</div>
          </div>
          <div className="line">
            <div className="item">Pricing</div>
            <div className="item">Sign up to our newsletter</div>
            <div className="item">Testimonials</div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="copy">© 2023 Glamor Gram. All rights reserved.</div>
        <div className="terms">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Cookie Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
