import React from "react";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
