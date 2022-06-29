import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./big-carousel.scss"

const Carousel = () => {
  let navigate = useNavigate();
  const [loginForm, setLoginForm] = useState("");
  const loginModal = () => {
    if (loginForm.length <= 4) {
      alert("lütfen geçerli bir telefon numarası giriniz");
    } else {
      navigate("/kategori");
    }
  };
  return (
    <div className="carousel">
      <img src="./images/carousel-item.png" alt="" width="100%" height="500" />
      <div className="image-blur container">
        <div className="intro-form">
          <div className="advertisement">
            <img
              src="./svg/getir-circle-logo.svg"
              alt=""
              width={180}
              height={180}
            />
            <div>
              <h1>Dakikalar İçinde Kapınızda</h1>
            </div>
          </div>
          <div className="login-form">
            <h5>Giriş yap veya kayıt ol</h5>
            <div className="form">
              <select name="" id="">
                <option value="">+90</option>
                <option value="">+49</option>
                <option value="">+93</option>
              </select>
              <input
                onChange={(e) => setLoginForm(e.target.value)}
                value={loginForm}
                type="text"
                placeholder="Telefon Numarası"
              />
            </div>
            <button onClick={() => loginModal()} className="auth-button">
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
