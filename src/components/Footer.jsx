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
          <div className="conr">
            <p>contact</p>
            <a href="tel:+2347081741484" className="no">
              02031234123
            </a>
            <a href="mailto:info@glamorgram.com" className="email">
              info@glamorgram.com
            </a>
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
            <a href="/blog" className="item">
              FAQs
            </a>
            <a href="/blog" className="item">
              Blogs
            </a>
            <a href="/blog" className="item">
              Help and Support
            </a>
          </div>
          <div className="line">
            <a href="/blog" className="item">
              Pricing
            </a>
            <a href="/blog" className="item">
              Sign up to our newsletter
            </a>
            <a href="/blog" className="item">
              Testimonials
            </a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="copy">© 2023 GlamorGram. All rights reserved.</div>
        <div className="terms">
          <a href="/blog">Privacy Policy</a>
          <a href="/blog">Terms of Service</a>
          <a href="/blog">Cookie Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
