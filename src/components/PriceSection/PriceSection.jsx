import React from "react";
import "./price-section.scss";

function PriceSection() {
  return (
    <section className="price-section container">
      <div className="price-timing">
        <div className="price">
          <img src="./svg/min.svg" alt="" height={32} />
          <div>
            <p>MİNİMUM</p>
            <span>₺50,00</span>
          </div>
        </div>
        <div className="timing">
          <img src="./svg/motor.svg" alt="" height={32} />
          <div>
            <p>GETİRMESİ</p>
            <span>₺0,00 - ₺8,99</span>
          </div>
        </div>
      </div>
      <div className="map">
        <div>
          <img src="./images/map.png" alt="" height={70} />
          <div className="linear" />
        </div>
      </div>
    </section>
  );
}

export default PriceSection;
