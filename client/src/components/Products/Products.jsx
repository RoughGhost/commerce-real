import React, { useEffect, useState } from "react";
import "./Product.css";
import { productitems } from "../../data";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from "@material-ui/icons";
import axios from "axios";

const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

   useEffect(() => {
    const getProducts = async ()=> {
      try{
       const res = await axios.get("https://localhost:5000/api/products");
       console.log(res)
      }catch(err){
        
      }
    }
    getProducts()
   }, [cat])

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
            <div className="badge">
              <div className="icon-dim">
                <ShoppingCartOutlined className="cart" />
              </div>
              <div className="icon-dim">
                <SearchOutlined className="cart" />
              </div>
              <div className="icon-dim">
                <FavoriteBorderOutlined className="cart" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
