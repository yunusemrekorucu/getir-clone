import React from "react";
import "../styles/Home.scss";
import AdvancedNav from "../components/AdvancedNav/AdvancedNav";
import PriceSection from "../components/PriceSection/PriceSection";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";

const Home = () => {
  return (
    <div className="home">
      <div className="mt" />
      <AdvancedNav />
      <PriceSection />
      <ProductCarousel />
    </div>
  );
};

export default Home;
