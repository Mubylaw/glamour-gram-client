import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import add from "../assets/svg/add.svg";
import cross from "../assets/svg/cross.svg";
import { updateUser } from "../store/actions/user";

const ServiceDash = ({ user, updateUser }) => {
  const [pop, setPop] = useState(false);
  const [view, setView] = useState(false);
  const [char, setChar] = useState({
    category: "",
    service: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChar((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setView(true);
    updateUser(char);
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
    });
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
      removeService: true,
    });
  };

  const handleEdit = (cat, ser) => {
    setChar({
      category: cat.name,
      service: ser.name,
      price: ser.price,
    });
    setPop(true);
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
              <div className="line" key={`${i} ${ind}`}>
                <div className="name">{ser.name}</div>
                <div className="btn-group">
                  <div className="btn" onClick={() => handleEdit(cat, ser)}>
                    Edit
                  </div>
                  <div
                    className={`btn rem`}
                    onClick={(e) => handleRemove(e, cat, ser)}
                  >
                    <span className="btn_text">Remove</span>
                  </div>
                </div>
              </div>
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
              <input
                type="text"
                id="category"
                onChange={handleChange}
                value={char.category}
                name="category"
              />
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
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                onChange={handleChange}
                value={char.price}
                name="price"
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
