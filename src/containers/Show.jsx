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
import { getUser, getUsersFn, updateUser } from "../store/actions/user.jsx";
import { getPaymentUrl } from "../store/actions/payment.jsx";
import { getAppointmentsFn } from "../store/actions/appointment";
import { createChatFn, askQuestion } from "../store/actions/chat";
import NotFound from "../components/NotFound.jsx";
import Loader from "../components/Loader.jsx";

const Show = ({
  getUser,
  getUsersFn,
  business,
  currentUser,
  updateUser,
  portShow,
  availShow,
  serviceShow,
  getPaymentUrl,
  url,
  appointments,
  getAppointmentsFn,
  createChatFn,
  exist,
  askQuestion,
  answer,
  errors,
}) => {
  const [bookmark, setBookmark] = useState(false);
  const [cal, setCal] = useState(false);
  const [trunc, setTrunc] = useState(false);
  const [chat, setChat] = useState(false);
  const [book, setBook] = useState(false);
  const [username, setUsername] = useState(false);
  const [err, setErr] = useState("");
  const [dateNo, setDateNo] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currDate, setCurrDate] = useState(new Date());
  const [times, setTimes] = useState([]);
  const [allTimes, setAllTimes] = useState([]);
  const [portfolio, setPortfolio] = useState(["", "", "", "", ""]);
  const [booking, setBooking] = useState({});
  const [calen, setCalen] = useState(false);
  const [pay, setPay] = useState(false);
  const [service, setService] = useState("");
  const [price, setPrice] = useState(0);
  const [payable, setPayable] = useState(0);
  const [selectTime, setSelectTime] = useState(false);
  const [view, setView] = useState(false);
  const [viewg, setViewg] = useState(false);
  const [dateString, setDateString] = useState("");
  const [duration, setDuration] = useState("");
  const [homeService, setHomeService] = useState(false);
  const [convo, setConvo] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const handlePrice = (e) => {
    const categoryDiv = e.currentTarget.closest(".category");
    if (categoryDiv) {
      categoryDiv.classList.toggle("hide");
    }
  };

  useEffect(() => {
    const path = window.location.pathname;
    const username = path.split("/")[1];
    setUsername(username);
    const day = currentDate.getDay();
    setDateNo(day);
    var search = window.location.search;
    if (search) {
      search = decodeURIComponent(search);
      var service = search.split("?service=")[1].split("&")[0];
      var price = search.split("&price=")[1];
      var duration = search.split("&duration=")[1];
      setService(service);
      setPrice(parseInt(price));
      setDuration(duration ? (parseInt(duration) ? parseInt(duration) : 0) : 0);
    }
    if (availShow) {
      setCal(true);
    }
  }, []);

  useEffect(() => {
    if (username) {
      const userna = username.replace(/,/g, "");
      getUsersFn(`populate=reviews%20booking&username=${userna}`);
    }
  }, [username]);

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

  useEffect(() => {
    if (errors.message) {
      setLoading(false);
      setNotFound(true);
    }
  }, [errors]);

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

  const handleClick = (e, dayNo, day, month, year, times) => {
    if (e) {
      var categoryDiv = e.currentTarget.closest(".dm");
    }
    if (categoryDiv && !categoryDiv.classList.contains("fade")) {
      const elementsWithBtnLoad = document.querySelectorAll(".activeDate");
      if (elementsWithBtnLoad.length > 0) {
        elementsWithBtnLoad.forEach((element) => {
          element.classList.remove("activeDate");
        });
      }
      categoryDiv.classList.add("activeDate");
      setDateNo(dayNo);
      const curDat = new Date(year, month, day);
      if (day) {
        setCurrDate(curDat);
      }

      setTimes(times);
    }
  };

  useEffect(() => {
    if (business.name) {
      setLoading(false);
      setNotFound(false);
    }
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
    if (business.priceType === "flat") {
      setPayable(business.priceAmount);
    } else {
      const perc = business.priceAmount === 0 ? 0 : business.priceAmount / 100;
      setPayable(price * perc);
    }
    const freeTime = business.freeTime;
    if (freeTime) {
      setAllTimes(freeTime);
    }
    if (business._id) {
      const date = new Date();
      getAppointmentsFn(
        `store=${business._id}&_greatertime=${date}&select=time%20duration&_boolstate=true`
      );
    }
  }, [business]);

  const handleTime = (tim) => {
    setSelectTime(tim);
    setCalen(false);
    setPay(true);
  };

  let setValue = (val) => (val > 9 ? "" : "0") + val;

  const handlePay = (pal) => {
    if (!view && !viewg) {
      if (pal === "view") {
        setView(true);
      } else {
        setViewg(true);
      }
      getPaymentUrl({
        cartItems: [
          {
            name: `${service} By ${business.name}`,
            image: portfolio[0],
            desc: `${service} By ${business.name} at ${setValue(
              selectTime.hour
            )}:${setValue(selectTime.minute)} - ${setValue(
              selectTime.endhour
            )}: ${setValue(selectTime.endminute)} (${selectTime.duration}mins)`,
            price: payable,
            cartQuantity: 1,
            selectTime,
            business,
            date: currDate,
            homeService,
          },
        ],
      });
    }
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

  const handleChat = () => {
    if (business._id && currentUser.isAuthenticated) {
      setChat(!chat);
      createChatFn({ biz: business._id });
    }
  };

  const handleAsk = () => {
    if (business._id && currentUser.isAuthenticated) {
      askQuestion({ biz: business._id, question });
      setConvo([...convo, { question }]);
      setQuestion("");
      const body = document.querySelector(".body.qual");
      body.scrollTop = body.scrollHeight;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleAsk();
    }
  };

  useEffect(() => {
    if (answer.text && convo.length > 0) {
      const last = convo.length - 1;
      const lastObj = { ...convo[last] };
      lastObj.answer = answer.text;
      const updatedConvo = [...convo.slice(0, last), lastObj];
      setConvo(updatedConvo);
    }
  }, [answer]);

  return (
    <div>
      <Header user={currentUser.isAuthenticated} />
      {loading && !notFound ? (
        <Loader />
      ) : notFound ? (
        <NotFound />
      ) : (
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
              <div className="item" onClick={handleBookMark}>
                <BookmarkSvg solid={bookmark} />
              </div>
            </div>
          </div>
          {err && <div className="err">{err}</div>}
          <div className="guid sm">
            <Link
              to={`/${business.username}`}
              className={`list ${!availShow && !portShow ? "active" : ""}`}
            >
              Profile
            </Link>
            <Link
              to={`/${business.username}/availability`}
              className={`list ${availShow ? "active" : ""}`}
              onClick={() => setCal(true)}
            >
              Availability
            </Link>
            <Link
              to={`/${business.username}/portfolio`}
              className={`list ${portShow ? "active" : ""}`}
            >
              Portfolio
            </Link>
            <div
              className={`shadow ${availShow ? "ava" : ""} ${
                portShow ? "port" : ""
              }`}
            ></div>
          </div>
          <div className={`avail ${availShow ? "" : "hide"}`}>
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
            <Calendar
              cal={cal}
              handleClick={handleClick}
              times={times}
              allTimes={allTimes}
              appointments={appointments}
              duration={duration}
            />
          </div>
          {portShow ? (
            <div className="portfolio-ex">
              {business.pin &&
                business.pin.map((p, i) => <img src={p} alt="" />)}
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
                  <div className="total">
                    Total: {business.currency === "pounds" ? "£" : "€"}
                    {price}
                  </div>
                  <div className="total">
                    Booking fee: {business.currency === "pounds" ? "£" : "€"}
                    {payable}
                  </div>
                  {business.homeService && (
                    <div className="box">
                      <input
                        type="checkbox"
                        id="type"
                        onChange={(e) => setHomeService(e.target.checked)}
                        checked={homeService}
                        name="homeService"
                      />
                      <label htmlFor="type">Do you want home service?</label>
                    </div>
                  )}
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
                            <div className="cost">
                              {business.currency === "pounds" ? "£" : "€"}
                              {ser.price}
                            </div>
                            <a
                              href={`/${business.username}/service?service=${ser.name}&price=${ser.price}&duration=${ser.time}`}
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
              <div className={`about ${availShow ? "hide" : ""}`}>
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
              <div className={`portfolio ${!portShow ? "hide" : ""}`}>
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
                <Link to={`/${business.username}/portfolio`} className="more">
                  <span>View More</span> <img src={leftArrow} alt="" />
                </Link>
              </div>
              <div className={`price ${availShow ? "hide" : ""}`}>
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
                            <div className="cost">
                              {business.currency === "pounds" ? "£" : "€"}
                              {ser.price}
                            </div>
                            <a
                              href={`/${business.username}/service?service=${ser.name}&price=${ser.price}&duration=${ser.time}`}
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
              <div className={`popular ${availShow ? "hide" : ""}`}>
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
              <div className={`faq ${availShow ? "hide" : ""}`}>
                <div className="name">
                  Want to find out more about the services provided by Hair by
                  xyz?
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
            </>
          )}

          <div className="chat">
            <div className="head" onClick={handleChat}>
              Chat with us ...
            </div>
            <div className={`body qual ${chat ? "" : "hide"}`}>
              {exist ? (
                <>
                  <div className="inner ins">
                    {convo.map((cnv) => (
                      <>
                        <div className="ques">{cnv.question}</div>
                        <div className="ans">
                          {cnv.answer ? (
                            cnv.answer
                          ) : (
                            <div className="inner load ansa">
                              <div className="btn btn-load">
                                <span className="btn_text"></span>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                  <div className="input">
                    <img src={message} alt="" onClick={handleAsk} />
                    <input
                      type="text"
                      id="chat"
                      placeholder="Ask a question ..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      onKeyUp={handleKeyUp}
                    />
                  </div>
                </>
              ) : (
                <div className="inner load">
                  <div className="btn btn-load">
                    <span className="btn_text"></span>
                  </div>
                </div>
              )}
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
                  ${business.name} has not activated a booking policy. As soon
                  as they do you would be able to read it here
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
                    allTimes={allTimes}
                    appointments={appointments}
                    duration={duration}
                  />
                </div>
              </div>
              <div className={`checkout pay ${pay ? "" : "hide"}`}>
                <div className="inn" onClick={() => setPay(false)}></div>
                <div className="pop">
                  <div className="ins">
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
                      {setValue(selectTime.hour)}:{setValue(selectTime.minute)}{" "}
                      - {setValue(selectTime.endhour)}:
                      {setValue(selectTime.endminute)} ({selectTime.duration}
                      mins)
                    </div>
                    {homeService && (
                      <div className="time">Booked for a home service</div>
                    )}
                    <div
                      className="back"
                      onClick={() => {
                        setPay(false);
                        setCalen(true);
                      }}
                    >
                      Choose a different time/date
                    </div>
                    <div className="total">
                      Total for service:{" "}
                      {business.currency === "pounds" ? "£" : "€"}
                      {price}
                    </div>
                    <div className="total">
                      Total to pay: {business.currency === "pounds" ? "£" : "€"}
                      {payable}
                    </div>
                    <div className="choice">
                      <div className="item">
                        <div className="str">Easy Breezy Access</div>
                        <p>
                          If you have an account, log in to breeze through the
                          process. New to us? Register and get benefits like
                          booking history and loyalty rewards. Let's complete
                          your booking!
                        </p>
                        {currentUser.isAuthenticated ? (
                          <div className="btn-cover ex-sm">
                            <div
                              className={`btn ${view ? "btn-load" : ""}`}
                              onClick={() => handlePay("view")}
                            >
                              <span className="btn_text">Pay</span>
                            </div>
                          </div>
                        ) : (
                          <div className="btn-cover ex-sm">
                            <Link
                              to="/signin"
                              className={`btn ${view ? "btn-load" : ""}`}
                            >
                              <span className="btn_text">Log in</span>
                            </Link>
                          </div>
                        )}
                      </div>
                      <div className="line"></div>
                      <div className="ora ex-sm">
                        <div className="rea"></div>
                        <div className="rea"></div>
                      </div>
                      <div className="item">
                        <div className="str">In a rush ?</div>
                        <p>
                          Book your beauty service hassle-free by juat entering
                          your information for booking confirmation. Want to
                          save time on future bookings? Create an account later.
                          Let's get you booked!
                        </p>
                        <div className="btn-cover ex-sm">
                          <div
                            className={`btn guest ${viewg ? "btn-load" : ""}`}
                            onClick={handlePay}
                          >
                            <span className="btn_text">Guest Checkout</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="or">OR</div>
                    <div className="choice ex-bg">
                      {currentUser.isAuthenticated ? (
                        <div className="btn-cover">
                          <div
                            className={`btn ${view ? "btn-load" : ""}`}
                            onClick={() => handlePay("view")}
                          >
                            <span className="btn_text">Pay</span>
                          </div>
                        </div>
                      ) : (
                        <div className="btn-cover">
                          <Link
                            to="/signin"
                            className={`btn ${view ? "btn-load" : ""}`}
                          >
                            <span className="btn_text">Log in</span>
                          </Link>
                        </div>
                      )}

                      <div className="line bee"></div>
                      <div className="btn-cover">
                        <div
                          className={`btn guest ${viewg ? "btn-load" : ""}`}
                          onClick={handlePay}
                        >
                          <span className="btn_text">Guest Checkout</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <Footer top />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
    business: state.user.all.length > 0 ? state.user.all[0] : {},
    url: state.payment.url,
    appointments: state.appointment.all,
    exist: state.chat.exist,
    answer: state.chat.answer,
  };
}

export default connect(mapStateToProps, {
  getUser,
  getUsersFn,
  updateUser,
  getPaymentUrl,
  getAppointmentsFn,
  createChatFn,
  askQuestion,
})(Show);
