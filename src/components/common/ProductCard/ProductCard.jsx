import React from "react";
import Icon from "../../../assets/svgs";
import "./product-card.scss";

function ProductCard() {
  return (
    <div className="product-card">
      <div>
        <button className="add-cart-btn">
          <Icon name="plus" size="10" fill="#5D3EBC" />
        </button>
        <img
          src="https://cdn.getir.com/product/5f838256a0f7355dfe62acd8_tr_1609123580796.jpeg"
          alt=""
        />
      </div>
      <span className="product-price">₺11,99</span>
      <h5>Lays Fırından</h5>
      <span className="gr">96gr</span>
    </div>
  );
}

export default ProductCard;
