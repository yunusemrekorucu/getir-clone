import "./categorys.scss";
const Categorys = () => {
  return (
    <div className="categorys">
      <div className="container">
        <p>Kategoriler</p>
      </div>
      <section className="product-categorys container">
        {new Array(17).fill(
          <div className="product-categorys-item">
            <img src="./images/sandviç.jpeg" alt="" width={48} height={48} />
            <span>Yiyecek</span>
          </div>
        )}
      </section>
    </div>
  );
};

export default Categorys;
