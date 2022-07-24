import React, { useState } from "react";
import AdvancedNav from "../../components/AdvancedNav/AdvancedNav";
import PriceSection from "../../components/PriceSection/PriceSection";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import ProductCategorys from "../../components/ProductCategorys/ProductCategorys";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import Categorys from "../../Json/product-categorys.json";
import "./home.scss";
import MyCart from "../../components/MyCart/MyCart";

const Home = () => {
  const [panel, setPanel] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <div className="home">
      <div className="mt" />
      <AdvancedNav />
      <PriceSection />
      <ProductCarousel />
      <section className="home-products container">
        <ProductCategorys
          panel={panel}
          setPanel={setPanel}
          Categorys={Categorys}
        />
        <Products cart={cart} setCart={setCart} />
        <MyCart cart={cart} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
