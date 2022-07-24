import React, { useEffect, useState } from "react";
import Icon from "../../assets/svgs";
import "./my-cart.scss";

function MyCart(props) {
  const { cart } = props;
  const [cartPrice, setCartPrice] = useState(200);

  const localProducts = localStorage.getItem("item");
  const products = JSON.parse(localProducts);

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
          <>
            <h4>Sepetim</h4>
            <div className="mycart-box">
              {products.map((item) => (
                <div className="mycart-info">
                  <div>
                    <h5>{item.title}</h5>
                    <span>₺{item.price}</span>
                  </div>
                  <div className="cart-button">
                    <button className="trash-btn">
                      <Icon name="trash" size="16" fill="#5D3EBC" />
                    </button>
                    <span>1</span>
                    <button className="plus-btn">
                      <Icon name="plus" size="10" fill="#5D3EBC" />
                    </button>
                  </div>
                </div>
              ))}
              <div className="go-to-cart">
                <button>Sepete Git</button>
                <span>₺{cartPrice}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MyCart;
