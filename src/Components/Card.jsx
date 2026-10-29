import React from "react";
import { Star } from "lucide-react";

const Card = ({ title, year, rating, image }) => {
  return (
    <div className="card">
      <div className="year">{year}</div>

      <img
        src={image || "https://via.placeholder.com/140x220?text=No+Image"}
        alt={title}
        className="card-img"
      />

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{year}</p>

        <div className="stars">
          <Star size={20} color="#facc15" fill="#facc15" />
          <Star size={20} color="#facc15" fill="#facc15" />
          <Star size={20} color="#facc15" fill="#facc15" />
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
