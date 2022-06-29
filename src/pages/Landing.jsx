//! İMPORTS
import React from "react";
//* COMPONENTS
import Campaigins from "../components/Campaigins/Campaigins";
import Categorys from "../components/Categorys/Categorys";
import Carousel from "../components/BigCarousel/Carousel";
//? CSS
import "../styles/Landing.scss";
import Footer from "../components/Footer/Footer";

const Landing = () => {
  return (
    <div>
      <Carousel />
      <Categorys />
      <Campaigins />
      <Footer />
    </div>
  );
};

export default Landing;
