import React, { useEffect, useState } from "react";
import "./my-cart.scss";

function MyCart(props) {
  const { cart, setCart } = props;

  useEffect(() => {
    console.log(cart);
    if (cart == "") {
      console.log("sepet boş");
    } else {
      console.log("sepet dolu");
    }
  }, [cart]);

  return (
    <>
      <div className="my-cart">
        {cart == "" ? (
          <>
            <h4>Sepetim</h4>
            <div className="mycart-box">
              <div className="empty">
                <img src="./svg/bag.svg" alt="" width={86} />
                <h3>Sepetiniz şuan boş</h3>
                <p>Sipariş vermek için sepetinize ürün ekleyin</p>
              </div>
            </div>
          </>
        ) : (
          <div className="mycart-box">
            <div>
              <p>Nutella</p>
              <span>₺15.54</span>
            </div>
            <button>+</button>
          </div>
        )}
      </div>
    </>
  );
}

export default MyCart;
