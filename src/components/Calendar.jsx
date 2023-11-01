import React, { useState, useEffect } from "react";
import DayLine from "../components/DayLine";
import arrow from "../assets/svg/sideBlack.svg";
import { calendar, months } from "../utils/calendar";
import "../assets/styles/show.css";

const Calendar = ({ cal, time }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(false);
  const [days, setDays] = useState({});
  const [nextDays, setNextDays] = useState({});
  const [month, setMonth] = useState(false);
  const [nextmonth, setNextMonth] = useState(false);
  const [year, setYear] = useState(false);

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
    <>
      {month ? (
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
          {!time && (
            <div className="times">
              <div className="time">10:00</div>
              <div className="time">10:00</div>
              <div className="time">10:00</div>
              <div className="time">10:00</div>
              <div className="time">10:00</div>
              <div className="time">10:00</div>
              <div className="time">10:00</div>
            </div>
          )}
          <img src={arrow} alt="" className="right" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Calendar;
