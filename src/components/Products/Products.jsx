import React from "react";
import ProductCard from "../common/ProductCard/ProductCard";
import "./products.scss";
import products from "../../Json/products.json";

function Products(props) {
  const { setCart, cart } = props;
  return (
    <div className="products">
      <h4>Su ve İçecek {">"} Birlikte İyi gider</h4>
      <div className="products-box">
        {products.map((product) =>
          new Array(1).fill(
            <ProductCard product={product} setCart={setCart} cart={cart} />
          )
        )}
      </div>
    </div>
  );
}

export default Products;
