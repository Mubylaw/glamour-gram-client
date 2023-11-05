import React, { useState, useEffect } from "react";
import "../assets/styles/calendar.css";
import { connect } from "react-redux";
import moment from "moment-timezone";
import cross from "../assets/svg/cross.svg";
import { days, splitTime } from "../utils/calendar";
import { addTime, removeTime } from "../store/actions/user";

const Availability = ({ addTime, removeTime, user }) => {
  const [time, setTime] = useState({
    day: "",
    hour: "",
    endhour: "",
    endminute: "",
    breakhour: "",
    breakminute: "",
    breakendhour: "",
    breakendminute: "",
    minute: "",
    zone: "",
  });
  const [zones, setZones] = useState([]);
  const [err, setErr] = useState("");
  const [view, setView] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTime((prev) => ({
      ...prev,
      [name]: parseInt(value)
        ? parseInt(value)
        : parseInt(value) == 0
        ? 0
        : value,
    }));

    setErr("");
    if (time.hasOwnProperty(name)) {
      const inputElement = document.querySelector(`input[name="${name}"]`);
      const selectElement = document.querySelector(`select[name="${name}"]`);
      if (inputElement) {
        inputElement.classList.remove("error");
      }
      if (selectElement) {
        selectElement.classList.remove("error");
      }
    }
  };

  useEffect(() => {
    const zone = moment.tz.guess();
    const zones = moment.tz.names();
    setZones(zones);
    setTime((prev) => ({
      ...prev,
      zone,
    }));
  }, []);

  const handleSubmit = () => {
    setView(true);
    var count = 0;
    var emptyFields = "Please add ";
    for (const key in time) {
      if (
        time.hasOwnProperty(key) &&
        time[key] === "" &&
        !key.startsWith("break")
      ) {
        count++;
        emptyFields += ` ${key}`;
        var inputElement = document.querySelector(`input[name="${key}"]`);
        var selectElement = document.querySelector(`select[name="${key}"]`);
        if (inputElement) {
          inputElement.classList.add("error");
        }
        if (selectElement) {
          selectElement.classList.add("error");
        }
      }
    }

    let brake = false;
    if (
      time.breakendhour ||
      time.breakendminute ||
      time.breakhour ||
      time.breakminute
    ) {
      if (
        time.breakhour > time.breakendhour ||
        (time.breakhour === time.breakendhour &&
          time.breakminute > time.breakendminute) ||
        (time.breakhour === time.breakendhour &&
          time.breakminute === time.breakendminute)
      ) {
        count++;
        emptyFields = `Break start time cannot be greater than break end time`;
      }
      brake = true;
    }

    if (
      time.hour > time.endhour ||
      (time.hour === time.endhour && time.minute > time.endminute) ||
      (time.hour === time.endhour && time.minute === time.endminute)
    ) {
      count++;
      emptyFields = `Start time cannot be greater than end time`;
    }

    if (count > 0) {
      setErr(emptyFields);
      setView(false);
      document.body.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      var times = [];
      if (time.day === "all") {
        delete time.day;
        for (let i = 0; i < 7; i++) {
          times.push({
            day: i,
            brake,
            ...time,
          });
        }
      } else if (time.day === "weekday") {
        delete time.day;
        for (let i = 1; i < 6; i++) {
          times.push({
            day: i,
            brake,
            ...time,
          });
        }
      } else if (time.day === "weekend") {
        delete time.day;
        times.push({
          day: 0,
          brake,
          ...time,
        });
        times.push({
          day: 6,
          brake,
          ...time,
        });
      } else {
        times.push({ brake, ...time });
      }
      let freeTime = [];
      times.forEach((tim) => {
        const timeSlots = splitTime(tim);
        freeTime.push(...timeSlots);
      });
      addTime({ freeTime });
    }
  };

  useEffect(() => {
    setView(false);
    const elementsWithBtnLoad = document.querySelectorAll(".btn-load");
    if (elementsWithBtnLoad.length > 0) {
      elementsWithBtnLoad.forEach((element) => {
        element.classList.remove("btn-load");
      });
    }
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTime((prev) => ({
      ...prev,
      day: "",
      hour: "",
      endhour: "",
      endminute: "",
      minute: "",
    }));
  }, [user.freeTime]);

  let setValue = (val) => (val > 9 ? "" : "0") + val;

  const handleRemove = (e, id) => {
    const categoryDiv = e.currentTarget.closest(".mm");
    if (categoryDiv) {
      categoryDiv.classList.add("btn-load");
    }
    removeTime(id);
  };

  return (
    <div className="home profile cali">
      <div className="headr">Availability Management</div>
      <div className="info">
        <p className="space">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ea.
          Facere eum corrupti atque officiis exercitationem culpa eos, neque
          veniam debitis ex id, error a necessitatibus soluta quaerat
          consequuntur sint.
        </p>
        <div className={`new ${view ? "btn-load" : ""}`} onClick={handleSubmit}>
          <span className="btn_text">Add Session</span>
        </div>
      </div>
      {err && <div className="err-alert">{err}</div>}
      <div className="form">
        <div className="item">
          <label htmlFor="day">Day(s):</label>
          <select name="day" id="day" value={time.day} onChange={handleChange}>
            <option value="">--- Choose Day ---</option>
            <option value={1}>Monday</option>
            <option value={2}>Tuesday</option>
            <option value={3}>Wednesday</option>
            <option value={4}>Thursday</option>
            <option value={5}>Friday</option>
            <option value={6}>Saturday</option>
            <option value={0}>Sunday</option>
            <option value="all">Everyday</option>
            <option value="weekday">Weekdays</option>
            <option value="weekend">Weekends</option>
          </select>
        </div>
        <div className="duo">
          <div className="item">
            <label htmlFor="hour">Start Hour:</label>
            <select
              name="hour"
              id="startTime"
              value={time.hour}
              onChange={handleChange}
            >
              <option value="">--- Choose Hour ---</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>
              <option value={6}>06</option>
              <option value={8}>08</option>
              <option value={9}>09</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={0}>00</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="minute">Start Minute:</label>
            <select
              name="minute"
              id="stopTime"
              value={time.minute}
              onChange={handleChange}
            >
              <option value="">--- Choose Minute ---</option>
              <option value={0}>00</option>
              <option value={15}>15</option>
              <option value={30}>30</option>
              <option value={45}>45</option>
            </select>
          </div>
        </div>
        <div className="duo">
          <div className="item">
            <label htmlFor="endhour">End Hour:</label>
            <select
              name="endhour"
              id="startTime"
              value={time.endhour}
              onChange={handleChange}
            >
              <option value="">--- Choose Hour ---</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>
              <option value={6}>06</option>
              <option value={8}>08</option>
              <option value={9}>09</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={0}>00</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="endminute">End Minute:</label>
            <select
              name="endminute"
              id="stopTime"
              value={time.endminute}
              onChange={handleChange}
            >
              <option value="">--- Choose Minute ---</option>
              <option value={0}>00</option>
              <option value={15}>15</option>
              <option value={30}>30</option>
              <option value={45}>45</option>
            </select>
          </div>
        </div>
        <div className="duo">
          <div className="item">
            <label htmlFor="breakhour">Break Start Hour:</label>
            <select
              name="breakhour"
              id="startTime"
              value={time.breakhour}
              onChange={handleChange}
            >
              <option value="">--- Choose Hour ---</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>
              <option value={6}>06</option>
              <option value={8}>08</option>
              <option value={9}>09</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={0}>00</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="breakminute">Break Start Minute:</label>
            <select
              name="breakminute"
              id="stopTime"
              value={time.breakminute}
              onChange={handleChange}
            >
              <option value="">--- Choose Minute ---</option>
              <option value={0}>00</option>
              <option value={15}>15</option>
              <option value={30}>30</option>
              <option value={45}>45</option>
            </select>
          </div>
        </div>
        <div className="duo">
          <div className="item">
            <label htmlFor="breakendhour">Break End Hour:</label>
            <select
              name="breakendhour"
              id="startTime"
              value={time.breakendhour}
              onChange={handleChange}
            >
              <option value="">--- Choose Hour ---</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>
              <option value={6}>06</option>
              <option value={8}>08</option>
              <option value={9}>09</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={0}>00</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="breakendminute">Break End Minute:</label>
            <select
              name="breakendminute"
              id="stopTime"
              value={time.breakendminute}
              onChange={handleChange}
            >
              <option value="">--- Choose Minute ---</option>
              <option value={0}>00</option>
              <option value={15}>15</option>
              <option value={30}>30</option>
              <option value={45}>45</option>
            </select>
          </div>
        </div>
        <div className="item">
          <label htmlFor="zone">Time Zone:</label>
          <input
            type="text"
            list="timezone"
            name="zone"
            id="time-zone"
            value={time.zone}
            placeholder="Ex: Europe/London"
            onChange={handleChange}
          />
          <datalist id="timezone">
            {zones.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </datalist>
        </div>
      </div>
      <div className="tril">Free Time:</div>
      <div className="times">
        {user.freeTime &&
          user.freeTime.map((tm) => (
            <div className="mm" key={tm._id}>
              <span className="btn_text">
                {days[tm.day]} {setValue(tm.hour)}:{setValue(tm.minute)} -{" "}
                {setValue(tm.endhour)}:{setValue(tm.endminute)}
              </span>
              <img
                src={cross}
                alt=""
                onClick={(e) => handleRemove(e, tm._id)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, { addTime, removeTime })(Availability);
