const Categorys = () => {
  return (
    <div className="categorys container">
      <p>Kategoriler</p>
      <section className="product-categorys">
        <div className="product-categorys-item">
          <img src="./images/suveiçecek.jpeg" alt="" width={48} height={48} />
          <span>Su ve İçecek</span>
        </div>

        <div className="product-categorys-item">
          <img src="./images/tomatoes.jpeg" alt="" width={48} height={48} />
          <span>Meyve & Sebze</span>
        </div>
        <div className="product-categorys-item">
          <img src="./images/bagel.jpeg" alt="" width={48} height={48} />
          <span>Fırından</span>
        </div>
        <div className="product-categorys-item">
          <img src="./images/sphagetti.jpeg" alt="" width={48} height={48} />
          <span>Temel Gıda</span>
        </div>
        <div className="product-categorys-item">
          <img src="./images/chips.jpeg" alt="" width={48} height={48} />
          <span>Atıştırmalık</span>
        </div>
        <div className="product-categorys-item">
          <img src="./images/icecream.jpeg" alt="" width={48} height={48} />
          <span>Dondurma</span>
        </div>
        <div className="product-categorys-item">
          <img src="./images/milk.jpeg" alt="" width={48} height={48} />
          <span>Süt Ürünleri</span>
        </div>
        <div className="product-categorys-item">
          <img src="./images/egg.jpeg" alt="" width={48} height={48} />
          <span>Kahvaltılık</span>
        </div>
        <div className="product-categorys-item">
          <img src="./images/sandviç.jpeg" alt="" width={48} height={48} />
          <span>Yiyecek</span>
        </div>
        {new Array(8).fill(
          <div className="product-categorys-item">
            <img src="./images/magnolia.jpeg" alt="" width={48} height={48} />
            <span>Fit & Form</span>
          </div>
        )}
      </section>
    </div>
  );
};

export default Categorys;
