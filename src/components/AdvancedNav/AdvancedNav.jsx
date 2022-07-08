import React from "react";
import "./advanced-nav.scss";
import Icon from "../../assets/svgs"

function AdvancedNav() {
  return (
    <nav className="advanced-nav container">
      <img src="./svg/getir.svg" alt="" height={27} />
      <div className="input-box">
        <img
          className="search-svg"
          src="./svg/search.svg"
          alt=""
          width={14}
          height={14}
        />
        <input type="text" placeholder="Ürün Ara" />
        <button>
          <img src="./svg/home.svg" alt="" />
          Ev
          <img src="./svg/right-arrow.svg" alt="" width={12} height={12} />
          <Icon name="rightArrow" size="12"/>
        </button>
        <span>TVS 9 dk</span>
      </div>
      <div />
    </nav>
  );
}

export default AdvancedNav;
