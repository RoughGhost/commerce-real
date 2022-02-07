import React from "react";
import "./Brochures.css";
import { brochure } from "../../data";
import Brochure from "../Brochure/Brochure";

const Brochures = () => {
  return (
    <div className="brochures-container">
      {brochure.map((item) => (
        <Brochure item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Brochures;
