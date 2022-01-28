import React from "react";
import { newarrival } from "../../data";
import { ShoppingCartOutlined, StarOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import "./Arrival.css";

const Arrival = () => {
  return (
    <div className="product1 section-p1">
      <h2>New Arrivals </h2>
      <p>Hit Summer Collection Design</p>
      <div className="pro-container">
        {newarrival.map((item) => (
          <div className="arrival">
            <img src={item.image} alt="product images" />
            <div className="des">
              <span>{item.desc}</span>
              <h5>{item.title}</h5>
              <div className="star">
                <StarOutlined className="icon" />
                <StarOutlined className="icon" />
                <StarOutlined className="icon" />
                <StarOutlined className="icon" />
                <StarOutlined className="icon" />
              </div>
              <h4>{item.price}</h4>
            </div>
            <Badge className="badge">
              <ShoppingCartOutlined className="cart" />
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arrival;
