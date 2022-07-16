import React from "react";
import "./my-cart.scss";

function MyCart() {
  return (
    <div className="my-cart">
      <h4>Sepetim</h4>
      <div className="mycart-box">
        <img src="./svg/bag.svg" alt="" width={86}/>
        <h3>Sepetiniz şuan boş</h3>
        <p>Sipariş vermek için sepetinize ürün ekleyin</p>
      </div>
    </div>
  );
}

export default MyCart;
