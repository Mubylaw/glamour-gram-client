import "../assets/styles/explore.css";
import { useState } from "react";
import revStars from "../assets/svg/revStars.svg";
import leftArrow from "../assets/svg/leftArrow.svg";

const ServiceCard = ({ service, locs }) => {
  if (!service.name) {
    return null;
  }
  let rating = 0;
  rating = Math.floor(service.rating / 100);
  let count = 0;
  return (
    <div className="service-card">
      <img className="ser" src={service.picture} alt="" />
      <div className="info-tab">
        <div className="up">
          <div className="name">{service.name} -</div>
          <div className="desc">{service.location}</div>
        </div>
        <div className="rev">
          {Array.from({ length: rating }, (_, i) => (
            <img src={revStars} alt="" key={i} />
          ))}
        </div>
      </div>
      {locs ? (
        <>
          <div className="address">
            <p>{service.location}</p>
          </div>
        </>
      ) : (
        <>
          <div className="service">
            {service.category.map((cat) => {
              return cat.service.map((ser) => {
                count++;
                return (
                  <div
                    className={`line ${count > 3 ? "hide" : ""}`}
                    key={count}
                  >
                    <span>{ser.name}</span>
                    <div className="price">£{ser.price}</div>
                  </div>
                );
              });
            })}
          </div>
        </>
      )}
      <a href={`/${service._id}`}>
        View More <img src={leftArrow} alt="" />
      </a>
    </div>
  );
};

export default ServiceCard;
