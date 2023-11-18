import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import add from "../assets/svg/add.svg";
import pin from "../assets/svg/pin.svg";
import { useDrag, useDrop } from "react-dnd";
import { updateUser } from "../store/actions/user";
import ImgCov from "../components/ImgCover";

const PorfolioDash = ({ updateUser, user }) => {
  const [images, setImages] = useState([]);
  const moveImage = React.useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];
      clonedCards.splice(hoverIndex, 0, removedItem);
      localStorage.setItem("imagesOrder", JSON.stringify(clonedCards));
      return clonedCards;
    });
  }, []);

  const handleChange = (e) => {
    const imgDiv = e.currentTarget.closest(".new");
    if (imgDiv) {
      imgDiv.classList.add("btn-load");
    }
    if (e.target.files) {
      var formData = new FormData();
      formData.append("portfolio", e.target.files[0]);
      updateUser(formData, "", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  };

  useEffect(() => {
    const elementsWithBtnLoad = document.querySelectorAll(".btn-load");
    if (elementsWithBtnLoad.length > 0) {
      elementsWithBtnLoad.forEach((element) => {
        element.classList.remove("btn-load");
      });
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    var img = [];
    if (user.pin) {
      user.pin.forEach((p, i) => {
        img.push({ url: p, pin: true, id: `pin-${i}` });
      });
    }
    if (user.portfolio) {
      user.portfolio.forEach((p, i) => {
        img.push({ url: p, pin: false, id: `portfolio-${i}` });
      });
    }
    const storedImagesOrder = localStorage.getItem("imagesOrder");
    if (storedImagesOrder) {
      const parsedOrder = JSON.parse(storedImagesOrder);
      if (img.length > parsedOrder.length) {
        setImages(img);
      } else {
        setImages(parsedOrder);
      }
    } else {
      setImages(img);
    }
  }, [user.portfolio, user.pin]);

  const handlePin = (e, pin, state) => {
    const imgDiv = e.currentTarget.closest(".img-cover");
    if (imgDiv) {
      imgDiv.classList.add("btn-load");
    }
    if (state) {
      updateUser({ pin });
    } else {
      updateUser({ unpin: pin });
    }
  };

  return (
    <div className="home profile">
      <div className="headr">My Portfolio</div>
      <div className="info ser">
        <p className="space">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
        <div className="new btn-load">
          <span className="btn_text">Upload Image</span>
          <input type="file" onChange={handleChange} />
          <img src={add} alt="" />
        </div>
      </div>
      <div className="portfolio">
        {images &&
          images.map((p, i) => (
            <ImgCov
              p={p.url}
              pin={pin}
              handlePin={handlePin}
              moveImage={moveImage}
              index={i}
              val={p.pin}
              id={p.id}
              key={i}
            />
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

export default connect(mapStateToProps, {
  updateUser,
})(PorfolioDash);
