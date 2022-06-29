import "./campaigins.scss";
const Campaigins = () => {
  return (
    <div className="campaigins container">
      <h6>Kampanyalar</h6>
      <section className="banners">
        <img src="./images/banner1.jpeg" alt="" width={400} height={200} />
        <img src="./images/banner2.png" alt="" width={400} height={200} />
        <img src="./images/banner3.jpeg" alt="" width={400} height={200} />
      </section>

      <section className="big-banner">
        <img
          src="./images/bigbanner.png"
          alt=""
          width="100%"
          style={{ borderRadius: "8px", margin: "24px 0px" }}
        />
        <div className="bigbanner-detail">
          <div className="big-banner-comment">
            <h2>Getir'i indirin!</h2>
            <span>
              istediğiniz ürünleri dakikaler içinde kapınıza getirelim.
            </span>
          </div>
          <div className="banner-phone">
            <img src="./images/phone.png" alt="" width="605" />
          </div>
        </div>
      </section>
      <section className="properties">
        <div className="properties-item">
          <img src="./svg/prop-item-1.svg" alt="" width={150} height={150} />
          <span>Her siparişinize bir kampanya</span>
          <p>
            Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
          </p>
        </div>
        <div className="properties-item">
          <img src="./svg/prop-item-2.svg" alt="" width={150} height={150} />
          <span>Her siparişinize bir kampanya</span>
          <p>Getir’le siparişiniz dakikalar içinde kapınıza gelir.</p>
        </div>
        <div className="properties-item">
          <img src="./svg/prop-item-3.svg" alt="" width={150} height={150} />
          <span>Her siparişinize bir kampanya</span>
          <p>Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.</p>
        </div>
      </section>
    </div>
  );
};

export default Campaigins;
