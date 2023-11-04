import React, { useState, useEffect } from "react";
import DayLine from "../components/DayLine";
import arrow from "../assets/svg/sideBlack.svg";
import { calendar, months } from "../utils/calendar";
import "../assets/styles/show.css";

const Calendar = ({ cal, time, dates, handleClick, times, handleTime }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(false);
  const [days, setDays] = useState({});
  const [nextDays, setNextDays] = useState({});
  const [nextYear, setNextYear] = useState(false);
  const [month, setMonth] = useState(false);
  const [nextmonth, setNextMonth] = useState(false);
  const [year, setYear] = useState(false);
  const [pump, setPump] = useState(0);

  useEffect(() => {
    if (!month && pump === 0) {
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
    setNextYear(nextYear);
    setDays(days);
    setNextDays(nextDays);
  }, [month]);

  const handleMonth = (e) => {
    if (e.target.className === "right") {
      if (pump < 4) {
        const nextMonth = (month + 1) % 12;
        const nextYear = month + 1 > 11 ? year + 1 : year;
        setMonth(nextMonth);
        setYear(nextYear);
        const newP = pump + 1;
        setPump(newP);
      }
    } else {
      const lastMonth = (month - 1 + 12) % 12;
      const lastYear = month - 1 < 0 ? year - 1 : year;
      setMonth(lastMonth);
      setYear(lastYear);
      const newP = pump - 1;
      setPump(newP);
    }
  };

  let setValue = (val) => (val > 9 ? "" : "0") + val;

  return (
    <>
      {year ? (
        <div className={`calendar ${cal ? "" : "hide"}`}>
          {pump > 0 && (
            <img src={arrow} alt="" className="left" onClick={handleMonth} />
          )}
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
                  handleClick={handleClick}
                  dates={dates}
                  year={year}
                  pump={pump}
                  days={days.mondays}
                  currentDay={currentDay}
                  month={days.month}
                  currentMonth={currentMonth}
                  max={0}
                />
                <DayLine
                  handleClick={handleClick}
                  dates={dates}
                  year={year}
                  pump={pump}
                  days={days.tuesdays}
                  currentDay={currentDay}
                  month={days.month}
                  currentMonth={currentMonth}
                  max={1}
                />
                <DayLine
                  handleClick={handleClick}
                  dates={dates}
                  year={year}
                  pump={pump}
                  days={days.wednesdays}
                  currentDay={currentDay}
                  month={days.month}
                  currentMonth={currentMonth}
                  max={2}
                />
                <DayLine
                  handleClick={handleClick}
                  dates={dates}
                  year={year}
                  pump={pump}
                  days={days.thursdays}
                  currentDay={currentDay}
                  month={days.month}
                  currentMonth={currentMonth}
                  max={3}
                />
                <DayLine
                  handleClick={handleClick}
                  dates={dates}
                  year={year}
                  pump={pump}
                  days={days.fridays}
                  currentDay={currentDay}
                  month={days.month}
                  currentMonth={currentMonth}
                  max={4}
                />
                <DayLine
                  handleClick={handleClick}
                  dates={dates}
                  year={year}
                  pump={pump}
                  days={days.saturdays}
                  currentDay={currentDay}
                  month={days.month}
                  currentMonth={currentMonth}
                  max={5}
                />
                <DayLine
                  handleClick={handleClick}
                  dates={dates}
                  year={year}
                  pump={pump}
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
                {months[nextmonth]} {nextYear}
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
                  handleClick={handleClick}
                  dates={dates}
                  year={nextYear}
                  pump={pump}
                  days={nextDays.mondays}
                  currentDay={currentDay}
                  month={nextDays.month}
                  currentMonth={currentMonth}
                  max={0}
                />
                <DayLine
                  handleClick={handleClick}
                  dates={dates}
                  year={nextYear}
                  pump={pump}
                  days={nextDays.tuesdays}
                  currentDay={currentDay}
                  month={nextDays.month}
                  currentMonth={currentMonth}
                  max={1}
                />
                <DayLine
                  handleClick={handleClick}
                  dates={dates}
                  year={nextYear}
                  pump={pump}
                  days={nextDays.wednesdays}
                  currentDay={currentDay}
                  month={nextDays.month}
                  currentMonth={currentMonth}
                  max={2}
                />
                <DayLine
                  handleClick={handleClick}
                  dates={dates}
                  year={nextYear}
                  pump={pump}
                  days={nextDays.thursdays}
                  currentDay={currentDay}
                  month={nextDays.month}
                  currentMonth={currentMonth}
                  max={3}
                />
                <DayLine
                  handleClick={handleClick}
                  dates={dates}
                  year={nextYear}
                  pump={pump}
                  days={nextDays.fridays}
                  currentDay={currentDay}
                  month={nextDays.month}
                  currentMonth={currentMonth}
                  max={4}
                />
                <DayLine
                  handleClick={handleClick}
                  dates={dates}
                  year={nextYear}
                  pump={pump}
                  days={nextDays.saturdays}
                  currentDay={currentDay}
                  month={nextDays.month}
                  currentMonth={currentMonth}
                  max={5}
                />
                <DayLine
                  handleClick={handleClick}
                  dates={dates}
                  year={nextYear}
                  pump={pump}
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
              {times.length === 0 ? (
                <div>No free session available</div>
              ) : (
                times.map((tm) => (
                  <div
                    className="time"
                    key={tm._id}
                    onClick={() => handleTime(tm)}
                  >
                    {setValue(tm.hour)}:{setValue(tm.minute)}
                  </div>
                ))
              )}
            </div>
          )}
          {pump < 4 && (
            <img src={arrow} alt="" className="right" onClick={handleMonth} />
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Calendar;
