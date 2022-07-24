import React, { useState } from "react";
import Icon from "../../../assets/svgs";
import "./product-card.scss";

function ProductCard(props) {
  const { cart, setCart, product } = props;
  const addCart = () => {
    setCart([...cart, product]);
    localStorage.setItem("item", JSON.stringify([...cart, product]));
  };
  return (
    <div className="product-card">
      <div>
        <button onClick={addCart} className="add-cart-btn">
          <Icon name="plus" size="10" fill="#5D3EBC" />
        </button>
        <img src={product.image} alt="" />
      </div>
      <span className="product-price">₺{product.price}</span>
      <h5>{product.title}</h5>
      <span className="gr">{product.gr}gr</span>
    </div>
  );
}

export default ProductCard;
