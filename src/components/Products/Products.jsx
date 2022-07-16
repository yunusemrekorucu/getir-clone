import React from "react";
import ProductCard from "../common/ProductCard/ProductCard";
import "./products.scss";

function Products() {
  return (
    <div className="products">
      <h4>Su ve İçecek {">"} Birlikte İyi gider</h4>
      <div className="products-box">{new Array(130).fill(<ProductCard />)}</div>
    </div>
  );
}

export default Products;
