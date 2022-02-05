import React from "react";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Banner from "../components/Banner/Banner";
import Arrival from "../components/Arrivals/Arrival";
import Brochures from "../components/Brochures/Brochures";
import Showcase from "../components/Showcase/Showcase";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      {/* <Categories /> */}
      <Products />
      <Banner />
      <Arrival />
      <Brochures />
      <Showcase />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
