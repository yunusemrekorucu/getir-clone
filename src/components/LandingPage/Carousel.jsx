const Carousel = () => {
  const loginModal = ()=>{
    console.log("aşsdkfjas")
  }
  return (
    <div className="carousel">
      <img src="./images/carousel-item.png" alt="" width="100%" height="500" />
      <div className="image-blur">
        <div className="container intro-form">
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
              <input type="text" placeholder="Telefon Numarası" />
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
