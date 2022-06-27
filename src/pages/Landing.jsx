//! İMPORTS
//* COMPONENTS
import Campaigins from "../components/LandingPage/campaigins";
import Categorys from "../components/LandingPage/Categorys";
import Footer from "../components/LandingPage/Footer";
import Carousel from "../components/LandingPage/Carousel";
import Navbar from "../components/LandingPage/Navbar";
//? CSS
import "../styles/Landing.scss";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Categorys />
      <Campaigins />
      <Footer />
    </div>
  );
};

export default Landing;
