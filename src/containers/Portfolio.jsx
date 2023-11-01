import React, { useState, useEffect } from "react";
import "../assets/styles/show.css";
import { connect } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { calendar, months } from "../utils/calendar";
import calendarSvg from "../assets/svg/calendar.svg";
import BookmarkSvg from "../assets/svg/bookmark.jsx";
import cross from "../assets/svg/cross.svg";
import message from "../assets/svg/message.svg";
import DayLine from "../components/DayLine";
import arrow from "../assets/svg/sideBlack.svg";

const Portfolio = ({}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(false);
  const [days, setDays] = useState({});
  const [nextDays, setNextDays] = useState({});
  const [month, setMonth] = useState(false);
  const [nextmonth, setNextMonth] = useState(false);
  const [year, setYear] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [cal, setCal] = useState(false);
  const [chat, setChat] = useState(false);
  const [book, setBook] = useState(false);

  useEffect(() => {
    if (!month) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const day = currentDate.getDate();
      setCurrentDay(day);
      setCurrentMonth(month);
      setMonth(month);
      setYear(year);
    }
    const days = calendar(month, year);
    const nextMonth = (month + 1) % 12;
    setNextMonth(nextMonth);
    const nextYear = month + 1 > 11 ? year + 1 : year;
    const nextDays = calendar(nextMonth, nextYear);
    setDays(days);
    setNextDays(nextDays);
  }, [month]);

  return (
    <div>
      <Header />
      <div className="show">
        <div className="top">
          <div className="name">Hair by XYZ</div>
          <div className="img">
            <img src="/assets/service%20(2).png" alt="" />
          </div>
          <div className="info">
            <div className="item">Epping Forest, Essex</div>
            <div className="item">Rating:4.9</div>
            <div className="item">111 Reviews</div>
            <div className="item">01234567890</div>
            <div className="item" onClick={() => setBookmark(!bookmark)}>
              <BookmarkSvg solid={bookmark} />
            </div>
          </div>
        </div>
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
          {month && (
            <div className={`calendar ${cal ? "" : "hide"}`}>
              <img src={arrow} alt="" className="left" />
              <div className="inner">
                <div className="month">
                  <div className="name">
                    {months[month]} {year}
                  </div>
                  <div className="day-header">
                    <div className="dh">Mo</div>
                    <div className="dh">Tu</div>
                    <div className="dh">We</div>
                    <div className="dh">Th</div>
                    <div className="dh">Fr</div>
                    <div className="dh">Sa</div>
                    <div className="dh">Su</div>
                  </div>
                  <div className="day-body">
                    <DayLine
                      days={days.mondays}
                      currentDay={currentDay}
                      month={days.month}
                      currentMonth={currentMonth}
                      max={0}
                    />
                    <DayLine
                      days={days.tuesdays}
                      currentDay={currentDay}
                      month={days.month}
                      currentMonth={currentMonth}
                      max={1}
                    />
                    <DayLine
                      days={days.wednesdays}
                      currentDay={currentDay}
                      month={days.month}
                      currentMonth={currentMonth}
                      max={2}
                    />
                    <DayLine
                      days={days.thursdays}
                      currentDay={currentDay}
                      month={days.month}
                      currentMonth={currentMonth}
                      max={3}
                    />
                    <DayLine
                      days={days.fridays}
                      currentDay={currentDay}
                      month={days.month}
                      currentMonth={currentMonth}
                      max={4}
                    />
                    <DayLine
                      days={days.saturdays}
                      currentDay={currentDay}
                      month={days.month}
                      currentMonth={currentMonth}
                      max={5}
                    />
                    <DayLine
                      days={days.sundays}
                      currentDay={currentDay}
                      month={days.month}
                      currentMonth={currentMonth}
                      max={6}
                    />
                  </div>
                </div>
                <div className="month">
                  <div className="name">
                    {months[nextmonth]} {year}
                  </div>
                  <div className="day-header">
                    <div className="dh">Mo</div>
                    <div className="dh">Tu</div>
                    <div className="dh">We</div>
                    <div className="dh">Th</div>
                    <div className="dh">Fr</div>
                    <div className="dh">Sa</div>
                    <div className="dh">Su</div>
                  </div>
                  <div className="day-body">
                    <DayLine
                      days={nextDays.mondays}
                      currentDay={currentDay}
                      month={nextDays.month}
                      currentMonth={currentMonth}
                      max={0}
                    />
                    <DayLine
                      days={nextDays.tuesdays}
                      currentDay={currentDay}
                      month={nextDays.month}
                      currentMonth={currentMonth}
                      max={1}
                    />
                    <DayLine
                      days={nextDays.wednesdays}
                      currentDay={currentDay}
                      month={nextDays.month}
                      currentMonth={currentMonth}
                      max={2}
                    />
                    <DayLine
                      days={nextDays.thursdays}
                      currentDay={currentDay}
                      month={nextDays.month}
                      currentMonth={currentMonth}
                      max={3}
                    />
                    <DayLine
                      days={nextDays.fridays}
                      currentDay={currentDay}
                      month={nextDays.month}
                      currentMonth={currentMonth}
                      max={4}
                    />
                    <DayLine
                      days={nextDays.saturdays}
                      currentDay={currentDay}
                      month={nextDays.month}
                      currentMonth={currentMonth}
                      max={5}
                    />
                    <DayLine
                      days={nextDays.sundays}
                      currentDay={currentDay}
                      month={nextDays.month}
                      currentMonth={currentMonth}
                      max={6}
                    />
                  </div>
                </div>
              </div>
              <div className="times">
                <div className="time">10:00</div>
                <div className="time">10:00</div>
                <div className="time">10:00</div>
                <div className="time">10:00</div>
                <div className="time">10:00</div>
                <div className="time">10:00</div>
                <div className="time">10:00</div>
              </div>
              <img src={arrow} alt="" className="right" />
            </div>
          )}
        </div>
        <div className="portfolio-ex">
          <img src="/assets/portfolio%20(4).png" alt="" />
          <img src="/assets/portfolio%20(1).png" alt="" />
          <img src="/assets/portfolio%20(2).png" alt="" />
          <img src="/assets/portfolio%20(3).png" alt="" />
          <img src="/assets/portfolio%20(5).png" alt="" />
          <img src="/assets/portfolio%20(6).png" alt="" />
          <img src="/assets/portfolio%20(7).png" alt="" />
          <img src="/assets/portfolio%20(8).png" alt="" />
          <img src="/assets/portfolio%20(9).png" alt="" />
          <img src="/assets/portfolio%20(10).png" alt="" />
          <img src="/assets/portfolio%20(11).png" alt="" />
          <img src="/assets/portfolio%20(12).png" alt="" />
          <img src="/assets/portfolio%20(13).png" alt="" />
          <img src="/assets/portfolio%20(14).png" alt="" />
          <img src="/assets/portfolio%20(15).png" alt="" />
          <img src="/assets/portfolio%20(16).png" alt="" />
          <img src="/assets/portfolio%20(17).png" alt="" />
          <img src="/assets/portfolio%20(18).png" alt="" />
          <img src="/assets/portfolio%20(19).png" alt="" />
          <img src="/assets/portfolio%20(20).png" alt="" />
          <img src="/assets/portfolio%20(21).png" alt="" />
        </div>

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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              quisquam, accusamus ipsam tempore eos sit mollitia eveniet
              officiis excepturi? Laudantium in iusto, deleniti dicta est minus
              blanditiis laborum possimus voluptatem.
            </p>
            <div className="img-group">
              <div className="imag">
                <img src="/assets/book%20(1).png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident consequatur porro modi iusto vitae? Provident.
                </p>
              </div>
              <div className="imag">
                <img src="/assets/book%20(2).png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident consequatur porro modi iusto vitae? Provident.
                </p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              quisquam, accusamus ipsam tempore eos sit mollitia eveniet
              officiis excepturi? Laudantium in iusto, deleniti dicta est minus
              blanditiis laborum possimus voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              quisquam, accusamus ipsam tempore eos sit mollitia eveniet
              officiis excepturi? Laudantium in iusto, deleniti dicta est minus
              blanditiis laborum possimus voluptatem. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Repellat quisquam, accusamus
              ipsam tempore eos sit mollitia eveniet officiis excepturi?
              Laudantium in iusto, deleniti dicta est minus blanditiis laborum
              possimus voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              quisquam, accusamus ipsam tempore eos sit mollitia eveniet
              officiis excepturi? Laudantium in iusto, deleniti dicta est minus
              blanditiis laborum possimus voluptatem.
            </p>
          </div>
        </div>
      </div>
      <Footer top />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, {})(Portfolio);
