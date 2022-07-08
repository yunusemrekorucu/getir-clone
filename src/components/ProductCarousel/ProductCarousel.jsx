import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import Icon from "../../assets/svgs";
import "./product-carousel.scss";

function ProductCarousel() {
  return (
    <div className="product-carousel container">
      <span>
        <Icon name="leftArrow" />
      </span>
      <ReactOwlCarousel items={3} loop={true} margin={16} dots={false}>
        <div class="carousel-item">
          <img src="./images/product-carousel-item1.jpeg" alt="" />
        </div>
        <div class="carousel-item">
          <img src="./images/product-carousel-item1.jpeg" alt="" />
        </div>
        <div class="carousel-item">
          <img src="./images/product-carousel-item1.jpeg" alt="" />
        </div>
      </ReactOwlCarousel>
      <span>
        <Icon name="rightArrow" />
      </span>
    </div>
  );
}

export default ProductCarousel;
