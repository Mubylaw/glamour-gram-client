import React, { useState, useEffect } from "react";
import "../assets/styles/explore.css";
import { connect } from "react-redux";
import Header from "../components/Header";
import Down from "../assets/svg/downNav.jsx";
import leftStars from "../assets/svg/leftStars.svg";
import rightStars from "../assets/svg/rightStars.svg";
import cross from "../assets/svg/cross.svg";
import revStars from "../assets/svg/revStars.svg";
import leftArrow from "../assets/svg/leftArrow.svg";
import side from "../assets/svg/side.svg";
import Footer from "../components/Footer";
import MultiRangeSlider from "../components/MultiSlider";
import { getUsersFn } from "../store/actions/user.jsx";
import ServiceCard from "../components/serviceCard.jsx";

const Explore = ({ getUsersFn, users, total }) => {
  const [loc, setLoc] = useState(false);
  const [price, setPrice] = useState(false);
  const [ava, setAva] = useState(false);
  const [close, setClose] = useState(false);
  const [service, setService] = useState([]);
  const [location, setLocation] = useState(false);
  const [temp, setTemp] = useState("");

  useEffect(() => {
    var search = window.location.search;
    if (search) {
      search = decodeURIComponent(search);
      var service = search.split("?service=")[1].split("&")[0];
      service = service.split("-");
      var location = search.split("&location=")[1];
      setService(service);
      setLocation(location);
    }
    getUsersFn(`role=business`);
  }, []);

  const handleFilter = (ser) => {
    const newService = service.filter((seer) => ser !== seer);
    setService(newService);
  };

  const handleAdd = () => {
    if (temp) {
      setService((ser) => [...ser, temp]);
      setTemp("");
    }
  };

  console.log(users);

  return (
    <div>
      <Header />
      <div className={`xplor ${close ? "close" : ""}`}>
        <div className="ex-nav">
          <div className="bord" onClick={() => setClose(!close)}>
            <img src={side} alt="" className={close ? "rota" : ""} />
          </div>
          <div className="inner">
            <div className="title">Filters</div>
            <div className="item">
              <div className="t-nav" onClick={() => setPrice(!price)}>
                <span>Price</span>
                <Down fill={"#000"} rota={!price ? false : true} />
              </div>
              <div className={`filer ${price ? "" : "hide"}`}>
                <MultiRangeSlider min={0} max={100} onChange={() => {}} />
              </div>
            </div>
            <div className="item">
              <div className="t-nav" onClick={() => setLoc(!loc)}>
                <span>Location</span>
                <Down fill={"#000"} rota={!loc ? false : true} />
              </div>
              <div className={`filer ra ${loc ? "" : "hide"}`}>
                <div className="rad">
                  <input type="checkbox" id="half" name="half" />
                  <label for="half">Within 1/2 mile</label>
                </div>
                <div className="rad">
                  <input type="checkbox" id="half" name="half" />
                  <label for="half">Within 1/2 mile</label>
                </div>
                <div className="rad">
                  <input type="checkbox" id="half" name="half" />
                  <label for="half">Within 1/2 mile</label>
                </div>
                <div className="rad">
                  <input type="checkbox" id="half" name="half" />
                  <label for="half">Within 1/2 mile</label>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="t-nav">
                <span>Special Offers</span>
                <Down fill={"#000"} />
              </div>
            </div>
            <div className="item">
              <div className="t-nav" onClick={() => setAva(!ava)}>
                <span>Availability</span>
                <Down fill={"#000"} rota={!ava ? false : true} />
              </div>
              <div className={`filer ra ${ava ? "" : "hide"}`}>
                <div className="tags">
                  <div className="iem">
                    <span className="tag-name">Tomorrow</span>
                  </div>
                  <div className="iem">
                    <span className="tag-name">This Week</span>
                  </div>
                  <div className="iem">
                    <span className="tag-name">This Month</span>
                  </div>
                  <div className="iem">
                    <span className="tag-name">Select Date</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="t-nav">
                <span>Rating Score</span>
                <Down fill={"#000"} />
              </div>
            </div>
            <div className="item cat">
              <span>Category Tags</span>
              <div className="tags">
                {service.map((ser, i) => (
                  <div className="iem" key={i}>
                    <span className="tag-name">#{ser}</span>
                    <img src={cross} alt="" onClick={() => handleFilter(ser)} />
                  </div>
                ))}
              </div>
              <div className="input-cover">
                <input
                  type="text"
                  placeholder="Add more tags...."
                  name="service"
                  value={temp}
                  onChange={(e) => setTemp(e.target.value)}
                />
                <img src={cross} alt="" onClick={handleAdd} />
              </div>
            </div>
          </div>
        </div>
        <div className="main-tab">
          <div className="top">
            <img className="star" src={leftStars} alt="" />
            <img className="star" src={rightStars} alt="" />
            <div className="title">Search Result</div>
            <div className="subtitle">
              Showing {total} result{total > 1 ? "s" : ""}
            </div>
            <div className="input-cov">
              <input type="text" placeholder="search service" />
              <img src={cross} alt="" />
            </div>
          </div>
          <div className="sort">
            <label for="sort">Sort By:</label>
            <select type="text" id="sort">
              <option value="">Choose option</option>
              <option value="rated">Highest Rated</option>
              <option value="price">Most Expensive</option>
              <option value="location">Closest Option</option>
            </select>
          </div>
          <div className="res-tab">
            {users.map((usr) => (
              <ServiceCard service={usr} key={usr._id} />
            ))}
          </div>
        </div>
      </div>
      <Footer top />
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    errors: state.errors,
    users: state.user.all,
    total: state.user.total,
  };
}

export default connect(mapStateToProps, { getUsersFn })(Explore);
