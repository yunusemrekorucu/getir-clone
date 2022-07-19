import React from "react";
import "./advanced-nav.scss";
import Icon from "../../assets/svgs";

function AdvancedNav() {
  return (
    <nav className="advanced-nav container">
      <img src="./svg/getir.svg" alt="" height={27} />
      <div className="input-box">
        <div className="search-svg">
          <Icon name="search" size="14" fill="#674AC0" />
        </div>

        <input type="text" placeholder="Ürün Ara" />
        <button>
          <img src="./svg/home.svg" alt="" />
          Ev
          <Icon name="rightArrow" size="12" />
        </button>
        <span>TVS 9 dk</span>
      </div>
      <div />
    </nav>
  );
}

export default AdvancedNav;
