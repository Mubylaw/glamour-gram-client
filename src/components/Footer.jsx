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
            <a href="https://instagram.com/glamorxgram?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr">
              <img src={insta} alt="" />
            </a>
            <a href="https://x.com/glamorxgram?s=11&t=j4iufXeMahtgnzHNnLKoXA">
              <img src={twitter} alt="" />
            </a>
            <a
              href="https://www.tiktok.com/@glamorxgram?_t=8hYKa4FXt37&_r=1"
              className="tik"
            >
              <img src="/assets/tiktok.png" alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={youtube} alt="" />
            </a>
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
