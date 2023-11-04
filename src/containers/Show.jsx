import React, { useState, useEffect } from "react";
import "../assets/styles/show.css";
import { connect } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import leftStars from "../assets/svg/leftStars.svg";
import rightStars from "../assets/svg/rightStars.svg";
import calendarSvg from "../assets/svg/calendar.svg";
import BookmarkSvg from "../assets/svg/bookmark.jsx";
import cross from "../assets/svg/cross.svg";
import message from "../assets/svg/message.svg";
import leftArrow from "../assets/svg/leftArrow.svg";
import leftArrowBlack from "../assets/svg/leftArrowBlack.svg";
import Down from "../assets/svg/downNav";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";
import { getUser, updateUser } from "../store/actions/user.jsx";
import { getPaymentUrl } from "../store/actions/payment.jsx";

const Show = ({
  getUser,
  business,
  currentUser,
  updateUser,
  portShow,
  serviceShow,
  getPaymentUrl,
  url,
}) => {
  const [bookmark, setBookmark] = useState(false);
  const [cal, setCal] = useState(false);
  const [trunc, setTrunc] = useState(false);
  const [chat, setChat] = useState(false);
  const [book, setBook] = useState(false);
  const [id, setId] = useState(false);
  const [err, setErr] = useState("");
  const [dateNo, setDateNo] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currDate, setCurrDate] = useState(new Date());
  const [times, setTimes] = useState([]);
  const [portfolio, setPortfolio] = useState(["", "", "", "", ""]);
  const [booking, setBooking] = useState({});
  const [calen, setCalen] = useState(false);
  const [pay, setPay] = useState(false);
  const [service, setService] = useState("");
  const [price, setPrice] = useState(0);
  const [selectTime, setSelectTime] = useState(false);
  const [view, setView] = useState(false);
  const [dateString, setDateString] = useState("");

  const handlePrice = (e) => {
    const categoryDiv = e.currentTarget.closest(".category");
    if (categoryDiv) {
      categoryDiv.classList.toggle("hide");
    }
  };

  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split("/")[1];
    setId(id);
    console.log("id", id);
    const day = currentDate.getDay();
    setDateNo(day);
    var search = window.location.search;
    if (search) {
      search = decodeURIComponent(search);
      var service = search.split("?service=")[1].split("&")[0];
      var price = search.split("&price=")[1];
      setService(service);
      setPrice(parseInt(price));
    }
  }, []);

  useEffect(() => {
    if (id) {
      const idd = id.replace(/,/g, "");
      getUser(idd, "populate=reviews%20booking", true);
    }
  }, [id]);

  let rating = 5;
  if (business.rating) {
    rating = business.rating / 100;
  }

  useEffect(() => {
    if (currentUser.isAuthenticated && business) {
      const fav = currentUser.user.favorite;
      if (fav && fav.includes(business.id)) {
        setBookmark(true);
      }
    }
  }, [currentUser, business]);

  useEffect(() => {
    if (currentUser.user.iat) {
      getUser(currentUser.user.id);
    }
  }, [currentUser]);

  const handleBookMark = () => {
    if (currentUser.isAuthenticated) {
      var fav = business.favorite;
      if (!fav && !bookmark) {
        fav = [business.id];
      } else if (fav && !bookmark) {
        fav = [...fav, business.id];
      } else if (fav && bookmark) {
        fav = fav.filter((fv) => fv != business.id);
      }
      updateUser({ favorite: fav });
      setBookmark(!bookmark);
    } else {
      setErr("You need to be logged in to add favorite");
      setTimeout(() => {
        setErr("");
      }, 5000);
    }
  };

  useEffect(() => {
    if (business) {
      const freeTime = business.freeTime;
      if (freeTime) {
        const times = freeTime.filter((ft) => ft.day == dateNo);
        setTimes(times);
      }
    }
  }, [dateNo, business]);

  const handleClick = (e, dayNo, day, month, year) => {
    const categoryDiv = e.currentTarget.closest(".dm");
    if (categoryDiv && !categoryDiv.classList.contains("fade")) {
      const elementsWithBtnLoad = document.querySelectorAll(".activeDate");
      if (elementsWithBtnLoad.length > 0) {
        elementsWithBtnLoad.forEach((element) => {
          element.classList.remove("activeDate");
        });
      }
      categoryDiv.classList.add("activeDate");
      setDateNo(dayNo);
      if (day) {
        const curDat = new Date(year, month, day);
        setCurrDate(curDat);
      }
    }
  };

  useEffect(() => {
    if (business.pin) {
      setPortfolio([...business.pin]);
      if (business.pin.length < 5) {
        const toAdd = 5 - business.pin.length;
        for (let i = 0; i < toAdd; i++) {
          if (business.portfolio[i]) {
            setPortfolio((prev) => [...prev, business.portfolio[i]]);
          } else {
            setPortfolio((prev) => [...prev, ""]);
          }
        }
      }
    }
    if (business.booking) {
      const book = business.booking.find((obj) => obj.active === true);
      if (book) {
        setBooking(book);
      } else {
        setBooking(false);
      }
    }
  }, [business]);

  const handleTime = (tim) => {
    setSelectTime(tim);
    setCalen(false);
    setPay(true);
  };

  let setValue = (val) => (val > 9 ? "" : "0") + val;

  const handlePay = () => {
    setView(true);
    getPaymentUrl({
      cartItems: [
        {
          name: `${service} By ${business.name}`,
          image: portfolio[0],
          desc: `${service} By ${business.name} on ${dateString} at ${setValue(
            selectTime.hour
          )}:${setValue(selectTime.minute)} - ${setValue(
            selectTime.endhour
          )}: ${setValue(selectTime.endminute)} (${selectTime.duration}mins)`,
          id: 230183,
          price,
          cartQuantity: 1,
        },
      ],
    });
  };

  useEffect(() => {
    if (url) {
      window.location = url;
    }
  }, [url]);

  useEffect(() => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = currDate.toLocaleDateString("en-US", options);
    setDateString(formattedDate);
  }, [currDate]);

  console.log(url);

  return (
    <div>
      <Header user={currentUser.isAuthenticated} />
      <div className="show">
        <div className="top">
          <div className="name">{business.name}</div>
          <div className="img">
            <img src={business.picture} alt="" />
          </div>
          <div className="info">
            <div className="item">{business.location}</div>
            <div className="item">Rating:{rating}</div>
            <div className="item">
              {business.reviews ? business.reviews.length : "0"} Reviews
            </div>
            <div className="item">{business.phoneNo}</div>
            <div className="item" onClick={handleBookMark}>
              <BookmarkSvg solid={bookmark} />
            </div>
          </div>
        </div>
        {err && <div className="err">{err}</div>}
        <div className="avail">
          <div className="heading">
            <span onClick={() => setCal(true)}>View Availability</span>
            <img
              src={calendarSvg}
              className="cal"
              alt=""
              onClick={() => setCal(true)}
            />

            <img
              src={cross}
              className="cross"
              alt=""
              onClick={() => setCal(false)}
            />
          </div>
          <Calendar cal={cal} handleClick={handleClick} times={times} />
        </div>
        {portShow ? (
          <div className="portfolio-ex">
            {business.pin && business.pin.map((p, i) => <img src={p} alt="" />)}
            {business.portfolio &&
              business.portfolio.map((p, i) => <img src={p} alt="" />)}
          </div>
        ) : serviceShow ? (
          <>
            <div className="service">
              <img src={portfolio[0]} alt="" className="main" />
              <div className="title">Service Type: {service}</div>
              {/* <div className="tags">
                <div className="item">
                  <span>#Curly</span>{" "}
                  <img src={cross} alt="" className="cross" />
                </div>
                <div className="item">
                  <span>#Bob</span> <img src={cross} alt="" className="cross" />
                </div>
                <div className="item">
                  <span>#Weave</span>{" "}
                  <img src={cross} alt="" className="cross" />
                </div>
                <div className="item">
                  <span>#SewInWeave</span>{" "}
                  <img src={cross} alt="" className="cross" />
                </div>
              </div> */}
              <div className="add-on">
                <div className="hea">Add On Service(s)</div>
                {/* <ul>
                  <li>Bob</li>
                  <li>Curly</li>
                </ul> */}
                <div className="total">Total: £{price}</div>
                <div className="btn" onClick={() => setCalen(true)}>
                  Book this service
                </div>
              </div>
            </div>
            <div className="price">
              <div className="title">Similar Service</div>
              {business.category &&
                business.category.map((cat, i) => (
                  <div className="category hide" key={i}>
                    <div className="head-line">
                      <span>{cat.name}</span>
                      <div className="tag" onClick={handlePrice}>
                        <span>View Prices</span>
                        <Down fill="black" />
                      </div>
                    </div>
                    <div className="inner">
                      {cat.service.map((ser, ind) => (
                        <div className="item" key={ind}>
                          <div className="name">{ser.name}</div>
                          <div className="cost">£{ser.price}</div>
                          <a
                            href={`/${business._id}/service?service=${ser.name}&price=${ser.price}`}
                            className="book"
                          >
                            Book
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </>
        ) : (
          <>
            <div className="about">
              <div className="title">About Us</div>
              <div className="text">
                {business.about && (
                  <span>
                    {!trunc
                      ? business.about.length > 100
                        ? `${business.about.substring(0, 100)}...`
                        : business.about
                      : business.about}
                  </span>
                )}
                <span className="more" onClick={() => setTrunc(!trunc)}>
                  {trunc ? "View Less" : "View More"}{" "}
                  <Down fill="#EB335A" rota={trunc ? true : false} />
                </span>
              </div>
              <div className="certs">
                <div className="label">Credentials/Certifications: </div>
                <div className="item">{business.cert}</div>
              </div>
              <div className="social">
                <div className="label">Social Media Accounts: </div>
                <a href={business.insta}>
                  <img src="/assets/social%20(3).png" alt="" />
                </a>
                <a href={business.facebook}>
                  <img src="/assets/social%20(1).png" alt="" />
                </a>
                <a href={business.twitter}>
                  <img src="/assets/social%20(2).png" alt="" />
                </a>
              </div>
            </div>
            <div className="portfolio">
              <div className="title">Portfolio</div>
              <div className="img-group">
                <div className="img big">
                  <img src={portfolio[0]} alt="" />
                </div>
                <div className="duo">
                  <div className="img">
                    <img src={portfolio[1]} alt="" />
                  </div>
                  <div className="img">
                    <img src={portfolio[2]} alt="" />
                  </div>
                </div>
                <div className="img long">
                  <img src={portfolio[3]} alt="" />
                </div>
                <div className="img long">
                  <img src={portfolio[4]} alt="" />
                </div>
              </div>
              <Link to={`/${id}/portfolio`} className="more">
                <span>View More</span> <img src={leftArrow} alt="" />
              </Link>
            </div>
            <div className="price">
              <div className="title">Price List</div>
              {business.category &&
                business.category.map((cat, i) => (
                  <div className="category hide" key={i}>
                    <div className="head-line">
                      <span>{cat.name}</span>
                      <div className="tag" onClick={handlePrice}>
                        <span>View Prices</span>
                        <Down fill="black" />
                      </div>
                    </div>
                    <div className="inner">
                      {cat.service.map((ser, ind) => (
                        <div className="item" key={ind}>
                          <div className="name">{ser.name}</div>
                          <div className="cost">£{ser.price}</div>
                          <a
                            href={`/${business._id}/service?service=${ser.name}&price=${ser.price}`}
                            className="book"
                          >
                            Book
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
            <div className="popular">
              <div className="title">Popular Services</div>
              <div className="frame">
                <div className="item">
                  <img src="/assets/service%20type%20(1).png" alt="" />
                  <div className="info">
                    <div className="desc">Service Type</div>
                    <img src={leftArrowBlack} alt="" />
                  </div>
                </div>
                <div className="item">
                  <img src="/assets/service%20type%20(2).png" alt="" />
                  <div className="info">
                    <div className="desc">Service Type</div>
                    <img src={leftArrowBlack} alt="" />
                  </div>
                </div>
                <div className="item">
                  <img src="/assets/service%20type%20(3).png" alt="" />
                  <div className="info">
                    <div className="desc">Service Type</div>
                    <img src={leftArrowBlack} alt="" />
                  </div>
                </div>
                <div className="item">
                  <img src="/assets/service%20type%20(4).png" alt="" />
                  <div className="info">
                    <div className="desc">Service Type</div>
                    <img src={leftArrowBlack} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="faq">
          <div className="name">
            Want to find out more about the services provided by Hair by xyz?
          </div>
          <div className="btn-group">
            <div className="btn" onClick={() => setChat(true)}>
              Ask a Question
            </div>
            <div className="btn canc" onClick={() => setBook(true)}>
              Read Booking Policy
            </div>
          </div>
        </div>
        <div className="chat">
          <div className="head" onClick={() => setChat(!chat)}>
            Chat with us ...
          </div>
          <div className={`body ${chat ? "" : "hide"}`}>
            <div className="inner">
              <div className="ques">When are you releasing booking slots?</div>
              <div className="ans">
                Thank you for your interest in our services! Booking slots are
                typically released on the 15th of each month.
              </div>
              <div className="input">
                <img src={message} alt="" />
                <input type="text" id="chat" placeholder="Ask a question ..." />
              </div>
            </div>
          </div>
        </div>
        <div className={`booking ${book ? "" : "hide"}`}>
          <div className="inner" onClick={() => setBook(false)}></div>
          <div className="pop">
            <img
              src={cross}
              className="cross"
              alt=""
              onClick={() => setBook(false)}
            />
            <div className="title">Booking Policy</div>
            {booking ? (
              <>
                <p>{booking.cancellation}</p>
                <p>{booking.rescheduling}</p>
                <p>{booking.client}</p>
                <p>{booking.noShow}</p>
              </>
            ) : (
              <p>
                ${business.name} has not activated a booking policy. As soon as
                they do you would be able to read it here
              </p>
            )}
          </div>
        </div>
        {serviceShow && (
          <>
            <div className={`checkout ${calen ? "" : "hide"}`}>
              <div className="inn" onClick={() => setCalen(false)}></div>
              <div className="pop">
                <img
                  src={cross}
                  className="cross"
                  alt=""
                  onClick={() => setCalen(false)}
                />
                <div className="title">Select a date</div>
                <Calendar
                  cal={true}
                  handleClick={handleClick}
                  times={times}
                  handleTime={handleTime}
                />
              </div>
            </div>
            <div className={`checkout pay ${pay ? "" : "hide"}`}>
              <div className="inn" onClick={() => setPay(false)}></div>
              <div className="pop">
                <img
                  src={cross}
                  className="cross"
                  alt=""
                  onClick={() => setPay(false)}
                />
                <img className="star" src={leftStars} alt="" />
                <img className="star" src={rightStars} alt="" />
                <div className="title">{business.name}</div>
                <div className="servi">({service})</div>
                <div className="date">{dateString}</div>
                <div className="time">
                  {setValue(selectTime.hour)}:{setValue(selectTime.minute)} -{" "}
                  {setValue(selectTime.endhour)}:
                  {setValue(selectTime.endminute)} ({selectTime.duration}mins)
                </div>
                <div
                  className="back"
                  onClick={() => {
                    setPay(false);
                    setCalen(true);
                  }}
                >
                  Choose a different time/date
                </div>
                <div className="total">Total to pay: £{price}</div>
                <div className="choice">
                  <div className="item">
                    <div className="str">Easy Breezy Access</div>
                    <p>
                      If you have an account, log in to breeze through the
                      process. New to us? Register and get benefits like booking
                      history and loyalty rewards. Let's complete your booking!
                    </p>
                  </div>
                  <div className="line"></div>
                  <div className="item">
                    <div className="str">In a rush ?</div>
                    <p>
                      Book your beauty service hassle-free by juat entering your
                      information for booking confirmation. Want to save time on
                      future bookings? Create an account later. Let's get you
                      booked!
                    </p>
                  </div>
                </div>
                <div className="or">OR</div>
                <div className="choice">
                  <div className="btn-cover">
                    <div
                      className={`btn ${view ? "btn-load" : ""}`}
                      onClick={handlePay}
                    >
                      <span className="btn_text">Pay</span>
                    </div>
                  </div>
                  <div className="line bee"></div>
                  <div className="btn-cover">
                    <div className="btn guest">Guest Checkout</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer top />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
    business: state.user.one,
    url: state.payment.url,
  };
}

export default connect(mapStateToProps, { getUser, updateUser, getPaymentUrl })(
  Show
);
