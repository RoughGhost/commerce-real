import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Brochure.css";

const Brochure = ({ item }) => {
  return (
    <div className="sm-brochure">
      <img src={item.image} alt="" className="brochure-image" />
      <div className="brochure-info">
        <h1 className="brochure-title">{item.title}</h1>
        <span className="brochure-desco">{item.desco}</span>
        <Link to={`/products/${item.cat}`}>
          <button className="white">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Brochure;
