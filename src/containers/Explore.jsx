import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/explore.css";
import { connect } from "react-redux";
import Header from "../components/Header";
import Down from "../assets/svg/downNav.jsx";
import leftStars from "../assets/svg/leftStars.svg";
import rightStars from "../assets/svg/rightStars.svg";
import cross from "../assets/svg/cross.svg";
import refresh from "../assets/svg/refresh.svg";
import side from "../assets/svg/side.svg";
import Footer from "../components/Footer";
import MultiRangeSlider from "../components/MultiSlider";
import { getBusinessFn } from "../store/actions/user.jsx";
import ServiceCard from "../components/serviceCard.jsx";
import Fuse from "fuse.js";
import NotFound from "../components/NotFound.jsx";
import Loader from "../components/Loader.jsx";

const Explore = ({ getBusinessFn, users, total, currentUser, errors }) => {
  const navigate = useNavigate();
  const [loc, setLoc] = useState(false);
  const [price, setPrice] = useState(false);
  const [ava, setAva] = useState(false);
  const [close, setClose] = useState(false);
  const [service, setService] = useState([]);
  const [location, setLocation] = useState(false);
  const [select, setSelect] = useState(false);
  const [temp, setTemp] = useState("");
  const [sorted, setSorted] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [distance, setDistance] = useState(500);
  const [date, setDate] = useState("");
  const [free, setFree] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [hasSort, setHasSort] = useState(false);
  const [landing, setLanding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

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
    getBusinessFn();
    if (window.innerWidth < 960) {
      setClose(true);
    }
    setLanding(true);
  }, []);

  useEffect(() => {
    if (landing) {
      var search = window.location.search;
      if (search) {
        search = decodeURIComponent(search);
        var service = search.split("?service=")[1].split("&")[0];
        service = service.split("-");
        var location = search.split("&location=")[1];
        setService(service);
        setLocation(location);
      }
      getBusinessFn();
      if (window.innerWidth < 960) {
        setClose(true);
      }
      setHasSort(false);
    }
  }, [window.location.href]);

  useEffect(() => {
    if (location) {
      getBusinessFn({ location, distance });
    }
  }, [location, distance]);

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

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  useEffect(() => {
    setLoading(false);
    if (service.length > 0 && users.length > 0) {
      var sort = !hasSort ? users : sorted;
      service.forEach((ser) => {
        const fuseOptions = {
          findAllMatches: true,
          includeMatches: true,
          threshold: 0.3,
          keys: [
            "name",
            "category.name",
            "category.service.name",
            "category.service.tag",
          ],
        };

        const fuse = new Fuse(sort, fuseOptions);

        const newArray = fuse.search(ser);
        sort = newArray.map((obj) => obj.item);
      });
      if (sort.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
      setSorted(sort);
      setHasSort(true);
    } else if (users.length > 0) {
      setNotFound(false);
      setSorted(users);
      setHasSort(true);
    } else {
      setNotFound(true);
    }
  }, [service, users]);

  const handlePrice = (val) => {
    setMax(val.max);
    setMin(val.min);
  };

  useEffect(() => {
    if (sorted.length > 0) {
      const filt = sorted.filter((sor) =>
        sor.category.some((cat) =>
          cat.service.some((ser) => ser.price >= min && ser.price <= max)
        )
      );
      setSorted(filt);
    }
  }, [max, min]);

  const handleRefresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (free !== "date") {
      setDate("");
    }
    const currentDate = new Date();
    const day = currentDate.getDay();
    let tomor = day + 1;
    tomor = tomor % 7;
    const dateF = currentDate.getDate();
    const month = currentDate.getMonth();
    if (free === "tomorrow") {
      const filt = sorted.filter((sor) =>
        sor.freeTime.some((entry) => entry.day === tomor)
      );
      setSorted(filt);
    } else if (free === "week") {
      const filt = sorted.filter((sor) =>
        sor.freeTime.some((entry) => entry.day > day)
      );
      setSorted(filt);
    } else if (free === "month") {
      const filt = sorted.filter((sor) =>
        sor.freeTime.some(
          (entry) => entry.date > dateF && entry.month === month
        )
      );
      setSorted(filt);
    } else if (free === "date") {
      if (date) {
        const ndate = new Date(date);
        const dateF = ndate.getDate();
        const month = ndate.getMonth();
        const filt = sorted.filter((sor) =>
          sor.freeTime.some(
            (entry) => entry.date === dateF && entry.month === month
          )
        );
        setSorted(filt);
      }
    }
  }, [free]);

  useEffect(() => {
    if (sortBy === "rated") {
      const sortCopy = [...sorted].sort((a, b) => b.rating - a.rating);

      setSorted(sortCopy);
    } else if (sortBy === "price") {
      const sor = [...sorted].slice().sort((a, b) => {
        const priceA = a.category.reduce(
          (minPrice, category) =>
            Math.min(
              minPrice,
              ...category.service.map((service) => service.price)
            ),
          Infinity
        );

        const priceB = b.category.reduce(
          (minPrice, category) =>
            Math.min(
              minPrice,
              ...category.service.map((service) => service.price)
            ),
          Infinity
        );

        return priceA - priceB;
      });
      setSorted(sor);
    } else if (sortBy === "location") {
      if (!location) {
        const successCallback = (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          getBusinessFn({ distance, latitude, longitude });
        };

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(successCallback, () => {}, {
            enableHighAccuracy: true,
          });
        } else {
          alert("Geolocation is not supported in your browser");
        }
      }
    }
  }, [sortBy]);

  const handleCheck = (val) => {
    if (location) {
      if (distance === val) {
        setDistance(500);
      } else {
        setDistance(val);
      }
    }
  };

  useEffect(() => {
    if (errors.message) {
      setLoading(false);
      setNotFound(true);
    }
  }, [errors]);

  return (
    <div>
      <Header user={currentUser.isAuthenticated} />
      <div className={`xplor ${close ? "close" : ""}`}>
        <div className="ex-nav">
          <div className="bord" onClick={() => setClose(!close)}>
            <img src={side} alt="" className={close ? "rota" : ""} />
          </div>
          <div className="inner">
            <div className="tiop">
              <div className="title">Filters</div>
              <img
                src={refresh}
                alt=""
                className="refresh"
                onClick={handleRefresh}
              />
            </div>
            <div className="item">
              <div className="t-nav" onClick={() => setPrice(!price)}>
                <span>Price</span>
                <Down fill={"#000"} rota={!price ? false : true} />
              </div>
              <div className={`filer ${price ? "" : "hide"}`}>
                <MultiRangeSlider min={0} max={1000} onChange={handlePrice} />
              </div>
            </div>
            <div className="item">
              <div className="t-nav" onClick={() => setLoc(!loc)}>
                <span>Location</span>
                <Down fill={"#000"} rota={!loc ? false : true} />
              </div>
              <div className={`filer ra ${loc ? "" : "hide"}`}>
                <div className="rad">
                  <input
                    type="checkbox"
                    id="half"
                    name="half"
                    onChange={() => handleCheck(10)}
                    checked={distance === 10 ? true : false}
                  />
                  <label htmlFor="half">Within 10 miles</label>
                </div>
                <div className="rad">
                  <input
                    type="checkbox"
                    id="half"
                    name="half"
                    onChange={() => handleCheck(50)}
                    checked={distance === 50 ? true : false}
                  />
                  <label htmlFor="half">Within 50 miles</label>
                </div>
                <div className="rad">
                  <input
                    type="checkbox"
                    id="half"
                    name="half"
                    onChange={() => handleCheck(100)}
                    checked={distance === 100 ? true : false}
                  />
                  <label htmlFor="half">Within 100 miles</label>
                </div>
                <div className="rad">
                  <input
                    type="checkbox"
                    id="half"
                    name="half"
                    onChange={() => handleCheck(250)}
                    checked={distance === 250 ? true : false}
                  />
                  <label htmlFor="half">Within 250 miles</label>
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
                  <div
                    className={`iem ${free === "tomorrow" ? "active" : ""}`}
                    onClick={() => setFree("tomorrow")}
                  >
                    <span className="tag-name">Tomorrow</span>
                  </div>
                  <div
                    className={`iem ${free === "week" ? "active" : ""}`}
                    onClick={() => setFree("week")}
                  >
                    <span className="tag-name">This Week</span>
                  </div>
                  <div
                    className={`iem ${free === "month" ? "active" : ""}`}
                    onClick={() => setFree("month")}
                  >
                    <span className="tag-name">This Month</span>
                  </div>
                  <div
                    className={`iem ${free === "date" ? "active" : ""}`}
                    onClick={() => setFree("date")}
                  >
                    <span className="tag-name">Select Date</span>
                  </div>
                </div>
                {free === "date" && (
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                )}
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
                  onKeyUp={handleKeyUp}
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
              Showing {sorted.length} result{sorted.length > 1 ? "s" : ""}
            </div>
            <div className="input-cov">
              <input
                type="text"
                placeholder="search service"
                name="service"
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
                onKeyUp={handleKeyUp}
              />
              <img src={cross} alt="" />
            </div>
            <div className="mob sm">
              <div className={`tags-over ${select ? "slii" : ""}`}>
                <div className="ins">
                  <span>Category Tags:</span>
                  <span className="tags">
                    {service.map((ser, i) => (
                      <span className="iem" key={i}>
                        <span className="tag-name">#{ser}</span>
                        <img
                          src={cross}
                          alt=""
                          onClick={() => handleFilter(ser)}
                        />
                      </span>
                    ))}
                  </span>
                </div>
              </div>
              <div className="down">
                <div className="filter" onClick={() => setSelect(!select)}>
                  <span>Sort By</span>
                  <Down fill={"#000"} rota={!select ? false : true} />
                </div>
                {select && (
                  <select
                    type="text"
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="">Choose option</option>
                    <option value="rated">Highest Rated</option>
                    <option value="price">Most Expensive</option>
                    <option value="location">Closest Option</option>
                  </select>
                )}
                <div className="filter" onClick={() => setClose(!close)}>
                  <span>Filter By</span>
                  <Down fill={"#000"} rota={close ? false : true} />
                </div>
              </div>
            </div>
          </div>
          <div className="sort bg">
            <label htmlFor="sort">Sort By:</label>
            <select
              type="text"
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Choose option</option>
              <option value="rated">Highest Rated</option>
              <option value="price">Most Expensive</option>
              <option value="location">Closest Option</option>
            </select>
          </div>
          {loading && !notFound ? (
            <Loader xplor />
          ) : notFound ? (
            <NotFound xplor />
          ) : (
            <div className="res-tab">
              {sorted.map((usr) => (
                <ServiceCard service={usr} key={usr._id} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer top />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
    users: state.user.all,
    total: state.user.total,
  };
}

export default connect(mapStateToProps, { getBusinessFn })(Explore);
