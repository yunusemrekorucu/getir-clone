import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./campaigins-carousel.scss";

function CampaiginsCarousel() {
  return (
    <div className="campaigins-carousel">
      <ReactOwlCarousel autoplay={true} items={1} loop={true}>
     <img src="./images/banner1.jpeg" alt="" width={400} height={200} /> 
     <img src="./images/banner2.png" alt="" width={400} height={200} /> 
     <img src="./images/banner3.jpeg" alt="" width={400} height={200} /> 
    </ReactOwlCarousel>
    </div>
  );
}

export default CampaiginsCarousel;
