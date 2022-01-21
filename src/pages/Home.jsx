import React from "react";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Banner />
    </div>
  );
};

export default Home;
