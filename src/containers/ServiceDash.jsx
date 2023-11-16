import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import add from "../assets/svg/add.svg";
import cross from "../assets/svg/cross.svg";
import { updateUser } from "../store/actions/user";
import ServiceLine from "../components/ServiceLine";

const ServiceDash = ({ user, updateUser }) => {
  const [pop, setPop] = useState(false);
  const [view, setView] = useState(false);
  const [char, setChar] = useState({
    category: "",
    service: "",
    price: "",
    time: 0,
    tag: [],
    catId: "",
  });
  const [tag, setTag] = useState([]);
  const [timed, setTimed] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChar((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!view) {
      setView(true);
      updateUser(char);
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
    setPop(false);
    setChar({
      category: "",
      service: "",
      price: "",
      time: 0,
      tag: [],
    });
    setTimed(0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [user.category]);

  const handleRemove = (e, cat, ser) => {
    const categoryDiv = e.currentTarget.closest(".rem");
    if (categoryDiv) {
      categoryDiv.classList.add("btn-load");
    }
    updateUser({
      category: cat.name,
      service: ser.name,
      price: ser.price,
      time: ser.time,
      removeService: true,
    });
  };

  const handleEdit = (cat, ser) => {
    setChar({
      category: cat.name,
      service: ser.name,
      price: ser.price,
      time: ser.time,
      tag: ser.tag,
      catId: cat._id,
    });
    setTimed(ser.time / 60);
    setPop(true);
  };

  useEffect(() => {
    if (!pop) {
      setChar({
        category: "",
        service: "",
        price: "",
        time: 0,
        tag: [],
      });
      setTimed(0);
    }
  }, [pop]);

  useEffect(() => {
    setChar((prevFormData) => ({
      ...prevFormData,
      time: timed * 60,
    }));
  }, [timed]);

  const handleFilter = (tg) => {
    const newTag = char.tag.filter((taag) => tg !== taag);
    setChar((prevFormData) => ({
      ...prevFormData,
      tag: newTag,
    }));
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      setChar((prevFormData) => ({
        ...prevFormData,
        tag: [...char.tag, tag],
      }));
      setTag("");
    }
  };

  return (
    <div className="home profile">
      <div className="headr">My Services</div>
      <div className="info ser">
        <p className="space">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
        <div className="new" onClick={() => setPop(true)}>
          <span>Add New Service</span>
          <img src={add} alt="" />
        </div>
      </div>
      <div className="service">
        {user.category &&
          user.category.map((cat, i) =>
            cat.service.map((ser, ind) => (
              <ServiceLine
                key={`${i} ${ind}`}
                ser={ser}
                cat={cat}
                handleEdit={handleEdit}
                handleRemove={handleRemove}
              />
            ))
          )}
      </div>
      <div className="hr"></div>
      <div className="btn-cover">
        <div className="btn">Save Changes</div>
      </div>
      <div className={`pop ${pop ? "" : "hide"}`}>
        <div className="cancel" onClick={() => setPop(false)}></div>
        <div className="inner">
          <img src={cross} alt="" onClick={() => setPop(false)} />
          <div className="form">
            <div className="item">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                name="category"
                onChange={handleChange}
                value={char.category}
                type="text"
                placeholder="Ex: "
              >
                <option value="">--Please choose an option--</option>
                <option value="Nails">Nails</option>
                <option value="Makeup">Makeup</option>
                <option value="Skincare">Skincare</option>
                <option value="Massage">Massage</option>
                <option value="Hair Removal">Hair Removal</option>
                <option value="Barber">Barber</option>
                <option value="Aesthetics">Aesthetics</option>
                <option value="Hair">Hair</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="service">Service:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.service}
                name="service"
              />
            </div>
            <div className="item">
              <label htmlFor="service">Tags:</label>
              <input
                type="text"
                onChange={(e) => setTag(e.target.value)}
                value={tag}
                name="tag"
                onKeyUp={handleKeyUp}
              />
            </div>
            {char.tag && char.tag.length > 0 && (
              <div className="tag">
                {char.tag.map((tg, i) => (
                  <div className="inner" key={i}>
                    <span>#{tg}</span>
                    <img src={cross} alt="" onClick={() => handleFilter(tg)} />
                  </div>
                ))}
              </div>
            )}
            <div className="item">
              <label htmlFor="price">
                Price ({user.currency === "pounds" ? "£" : "€"}):
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={char.price}
                name="price"
              />
            </div>
            <div className="item">
              <label htmlFor="time">Time (Hrs):</label>
              <input
                type="number"
                onChange={(e) => setTimed(e.target.value)}
                value={timed}
                name="time"
              />
            </div>
          </div>
          <div
            className={`btn ${view ? "btn-load" : ""}`}
            onClick={handleSubmit}
          >
            <span className="btn_text">Save Changes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, { updateUser })(ServiceDash);
