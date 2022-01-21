import React from "react";
import "./Product.css";
import { productitems } from "../../data";
import { ShoppingCartOutlined, StarOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Products = () => {
  return (
    <div className="product1 section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="pro-container">
        {productitems.map((item) => (
          <div className="pro">
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

export default Products;
