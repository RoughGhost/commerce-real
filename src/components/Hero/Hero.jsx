import React, { useState } from "react";
import "./Hero.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import HeroImg from "../../Images/media_result_20211228_7bc61ac6-2875-4483-9f55-b1fff735fefa.png";
import { slidercontent } from "../../data";

// const Carousel = ({ color }) => {
//   return <div className={`${color}`}></div>;
// };

const Hero = () => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-arrow1" onClick={() => handleArrow("r")}>
        <ArrowLeftOutlined />
      </div>
      <div
        className="hero-content"
        style={{
          transform: `translateX(${-100 * index}vw)`,
        }}
      >
        {slidercontent.map((item, i) => (
          <div
            className="hero-content_section "
            key={i}
            bg={item.bg}
            style={{ backgroundColor: `#${item.bg}` }}
          >
            <div className="hero-content-image">
              <img src={item.image} alt="" className="image-1" />
            </div>
            <div className="hero-info">
              <h4>{item.title}</h4>
              <h2>{item.desc}</h2>
              <h1>{item.desco}</h1>
              <p>{item.descon}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-arrow2" onClick={() => handleArrow("r")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Hero;
