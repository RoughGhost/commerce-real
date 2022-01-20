import React from "react";
import First from "../../Images/undraw_Shopping_re_3wst.png";
import Second from "../../Images/undraw_Security_re_a2rk.png";
import Third from "../../Images/undraw_Winners_re_wr1l.png";
import Fourth from "../../Images/undraw_Contact_us_re_4qqt.png";
import Fifth from "../../Images/undraw_Feedback_re_urmj.png";
import "./Features.css";

const Features = () => {
  return (
    <div className="feature section-p1">
      <div className="fe-box">
        <img src={First} alt="" />
        <h6>Online Shopping</h6>
      </div>
      <div className="fe-box">
        <img src={Second} alt="" />
        <h6>100% Security</h6>
      </div>
      <div className="fe-box">
        <img src={Third} alt="" />
        <h6>Team Work</h6>
      </div>
      <div className="fe-box">
        <img src={Fourth} alt="" />
        <h6>Online Marketing</h6>
      </div>
      <div className="fe-box">
        <img src={Fifth} alt="" />
        <h6>Networking</h6>
      </div>
    </div>
  );
};

export default Features;
