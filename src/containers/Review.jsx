import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import revStar from "../assets/svg/revStars.svg";

const Review = ({}) => {
  return (
    <div className="home profile">
      <div className="headr">My Reviews (111)</div>
      <div className="info ser">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          nobis ex ad. Perspiciatis illo neque impedit quasi unde sunt
          obcaecati. Deserunt quo aliquid ab, ipsa esse beatae ratione rerum
          libero.
        </p>
      </div>
      <div className="sort">
        <label for="sort">Sort By:</label>
        <select type="text" id="sort">
          <option value="">Choose option</option>
          <option value="rated">Highest Rated</option>
          <option value="price">Lowest Rated</option>
        </select>
      </div>
      <div className="review">
        <div className="item">
          <div className="top">
            <div className="icon">
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
            </div>
            <div className="name">- Name</div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reprehenderit vel voluptate corporis odio, inventore ut tenetur cum
            eveniet in, voluptatem harum accusantium neque nisi, aliquam facere
            adipisci porro cupiditate.
          </div>
        </div>
        <div className="item">
          <div className="top">
            <div className="icon">
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
            </div>
            <div className="name">- Name</div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reprehenderit vel voluptate corporis odio, inventore ut tenetur cum
            eveniet in, voluptatem harum accusantium neque nisi, aliquam facere
            adipisci porro cupiditate.
          </div>
        </div>
        <div className="item">
          <div className="top">
            <div className="icon">
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
            </div>
            <div className="name">- Name</div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reprehenderit vel voluptate corporis odio, inventore ut tenetur cum
            eveniet in, voluptatem harum accusantium neque nisi, aliquam facere
            adipisci porro cupiditate.
          </div>
        </div>
        <div className="item">
          <div className="top">
            <div className="icon">
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
            </div>
            <div className="name">- Name</div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reprehenderit vel voluptate corporis odio, inventore ut tenetur cum
            eveniet in, voluptatem harum accusantium neque nisi, aliquam facere
            adipisci porro cupiditate.
          </div>
        </div>
        <div className="item">
          <div className="top">
            <div className="icon">
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
            </div>
            <div className="name">- Name</div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reprehenderit vel voluptate corporis odio, inventore ut tenetur cum
            eveniet in, voluptatem harum accusantium neque nisi, aliquam facere
            adipisci porro cupiditate.
          </div>
        </div>
        <div className="item">
          <div className="top">
            <div className="icon">
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
            </div>
            <div className="name">- Name</div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reprehenderit vel voluptate corporis odio, inventore ut tenetur cum
            eveniet in, voluptatem harum accusantium neque nisi, aliquam facere
            adipisci porro cupiditate.
          </div>
        </div>
        <div className="item">
          <div className="top">
            <div className="icon">
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
            </div>
            <div className="name">- Name</div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reprehenderit vel voluptate corporis odio, inventore ut tenetur cum
            eveniet in, voluptatem harum accusantium neque nisi, aliquam facere
            adipisci porro cupiditate.
          </div>
        </div>
        <div className="item">
          <div className="top">
            <div className="icon">
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
            </div>
            <div className="name">- Name</div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reprehenderit vel voluptate corporis odio, inventore ut tenetur cum
            eveniet in, voluptatem harum accusantium neque nisi, aliquam facere
            adipisci porro cupiditate.
          </div>
        </div>
        <div className="item">
          <div className="top">
            <div className="icon">
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
            </div>
            <div className="name">- Name</div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reprehenderit vel voluptate corporis odio, inventore ut tenetur cum
            eveniet in, voluptatem harum accusantium neque nisi, aliquam facere
            adipisci porro cupiditate.
          </div>
        </div>
        <div className="item">
          <div className="top">
            <div className="icon">
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
              <img src={revStar} alt="" />
            </div>
            <div className="name">- Name</div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reprehenderit vel voluptate corporis odio, inventore ut tenetur cum
            eveniet in, voluptatem harum accusantium neque nisi, aliquam facere
            adipisci porro cupiditate.
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

export default connect(mapStateToProps, {})(Review);
