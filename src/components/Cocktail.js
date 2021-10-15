import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, alco, url, type }) => {
  return (
    <div className="card-body">
      <div className="image">
        <img src={url} alt={alco} />
      </div>
      <div className="about">
        <h2>{name}</h2>
        <p>{alco}</p>
        <p>{type}</p>
        <Link to={`/cocktail/${id}`}>
          <button className="details">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
