import React from "react";
import "./Brochure.css";

const Brochure = () => {
  return (
    <div className="sm-banner section-p1">
      <div className="banner-box">
        <h4>Crazy Deals</h4>
        <h2>BUY 2 GET ONE FREE </h2>
        <span>The Best Suit in Town these days</span>
        <button className="white">Learn More</button>
      </div>
      <div className="banner-box banner-box2">
        <h4>Summer & Spring</h4>
        <h2>Upcoming Season</h2>
        <span>The Best Suit in Town these days</span>
        <button className="white">Collection</button>
      </div>
    </div>
  );
};

export default Brochure;
