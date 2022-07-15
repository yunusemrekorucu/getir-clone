import React, { useEffect, useState } from "react";
import AdvancedNav from "../components/AdvancedNav/AdvancedNav";
import PriceSection from "../components/PriceSection/PriceSection";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import ProductCategorys from "../components/ProductCategorys/ProductCategorys";
import Categorys from "../Json/product-categorys.json";

const Home = () => {
  const [panel, setPanel] = useState(false);

  useEffect(() => {
    
  }, [])
  

  return (
    <div className="home">
      <div className="mt" />
      <AdvancedNav />
      <PriceSection />
      <ProductCarousel />
      <div>
        <ProductCategorys panel={panel} setPanel={setPanel} Categorys={Categorys}/>
      </div>
    </div>
  );
};

export default Home;
