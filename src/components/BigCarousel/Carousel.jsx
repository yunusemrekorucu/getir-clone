import React from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../common/TextInput/TextInput";
import CountryInput from "../common/SelectInput/CountryInput";
import "./big-carousel.css";
//! Owl Carousel
import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


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
    <>
    <div className="carousel">
   <div className="image">  
   <ReactOwlCarousel autoplay={true} loop margin={0} touchDrag={false} mouseDrag={false} items={1} dots={false}>
   <img src="./images/carousel-item.png" alt=""  height="500" />
   <img src="./images/carousel-item2.jpeg" alt="" height="500" />
   <img src="./images/carousel-item3.jpeg" alt="" height="500" />
   <img src="./images/carousel-item4.jpeg" alt="" height="500" />
   </ReactOwlCarousel>
    <div className="blur"/>
   </div>
      <div className="image-form container">
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
    </>
  );
};

export default Carousel;
