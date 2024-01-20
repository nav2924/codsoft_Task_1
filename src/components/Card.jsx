import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
const Card = ({ data }) => {
  const {
    companyName,
    companyLogo,
    minPrice,
    maxPrice,
    jobLocation,
    employmentType,
    postingDate,
    description,
    jobTitle,
  } = data;
  return (
    <div>
      <section className="card">
        <Link to={"/"} className="flex gap-2 flex-row sm:flex-col items-start">
          <img src={companyLogo} alt=""></img>
          <div>
            <h4 className="text-black mb-1 ">{companyName}</h4>
            <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>
            <div className="text-black/70 text-base flex flex-wrap gap-1 mb-2">
              <span className="flex items-center gap-2">
                <FiMapPin />
                {jobLocation}
              </span>
              <span className="flex items-center gap-2">
                <FiClock />
                {employmentType}
              </span>
              <span className="flex items-center gap-2">
                <FiDollarSign />
                {minPrice}-{maxPrice}
              </span>
              <span className="flex items-center gap-2">
                <FiCalendar />
                {postingDate}
              </span>

              <p className="text-base text-black">{description}</p>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Card;
