import React from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../common/TextInput/TextInput";
import CountryInput from "../common/SelectInput/CountryInput";
import "./big-carousel.scss";

const Carousel = props => {
  const { loginForm, setLoginForm } = props;

  let navigate = useNavigate();
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
              <CountryInput />
              <TextInput
                loginForm={loginForm}
                setLoginForm={setLoginForm}
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
