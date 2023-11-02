import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import { connect } from "react-redux";
import revStar from "../assets/svg/revStars.svg";
import { getReviewsFn } from "../store/actions/review";

const Review = ({ getReviewsFn, review, total, user }) => {
  const [sort, setSort] = useState("");
  useEffect(() => {
    // getReviewsFn(`store=${user.id}`);
    getReviewsFn();
  }, []);

  useEffect(() => {
    getReviewsFn(`sort=${sort}`);
  }, [sort]);
  return (
    <div className="home profile">
      <div className="headr">My Reviews ({total})</div>
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
        <select
          type="text"
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Choose option</option>
          <option value="-rating">Highest Rated</option>
          <option value="+rating">Lowest Rated</option>
        </select>
      </div>
      <div className="review">
        {review.map((rev, id) => (
          <div className="item" key={id}>
            <div className="top">
              <div className="icon">
                {Array.from({ length: rev.rating }, (_, i) => (
                  <img src={revStar} alt="" key={i} />
                ))}
              </div>
              <div className="name">- {rev.name}</div>
            </div>
            <div className="text">{rev.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
    review: state.review.all,
    total: state.review.total,
  };
}

export default connect(mapStateToProps, {
  getReviewsFn,
})(Review);
