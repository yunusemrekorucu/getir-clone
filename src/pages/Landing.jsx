//! İMPORTS
import React, { useState } from "react";
//* COMPONENTS
import Campaigins from "../components/Campaigins/Campaigins";
import Categorys from "../components/Categorys/Categorys";
import Carousel from "../components/BigCarousel/Carousel";
//? CSS
import "../styles/Landing.scss";
import Footer from "../components/Footer/Footer";
import CampaiginsCarousel from "../components/CampaiginsCarousel/CampaiginsCarousel";

const Landing = props => {
  const [loginForm, setLoginForm] = useState("");

  return (
    <div>
      <CampaiginsCarousel />
      <Carousel loginForm={loginForm} setLoginForm={setLoginForm} />
      <Categorys />
      <Campaigins />
      <Footer />
    </div>
  );
};

export default Landing;
