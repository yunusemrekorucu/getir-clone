import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import Icon from "../../assets/svgs";
import "./product-carousel.css";

function ProductCarousel() {
  return (
    <div className="container">
      <div className="product-carousel">
        <span className="arrow left-arr">
          <Icon name="leftArrow" fill="#7A61C7" size="14" />
        </span>
        <ReactOwlCarousel items={3} autoplay={true} loop={true} dots={false}>
          <div className="carousel-item">
            <img src="./images/product-carousel-item1.jpeg" alt="" />
          </div>
          <div className="carousel-item">
            <img src="./images/product-carousel-item2.jpeg" alt="" />
          </div>
          <div className="carousel-item">
            <img src="./images/product-carousel-item3.jpeg" alt="" />
          </div>
          <div className="carousel-item">
            <img src="./images/product-carousel-item4.jpeg" alt="" />
          </div>
          <div className="carousel-item">
            <img src="./images/product-carousel-item5.jpeg" alt="" />
          </div>
          <div className="carousel-item">
            <img src="./images/product-carousel-item6.jpeg" alt="" />
          </div>
        </ReactOwlCarousel>
        <span className="arrow right-arr">
          <Icon name="rightArrow" fill="#7A61C7" size="14" />
        </span>
      </div>
    </div>
  );
}

export default ProductCarousel;
