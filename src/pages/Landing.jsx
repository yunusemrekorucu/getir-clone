//! İMPORTS
//* COMPONENTS
import LandingCarousel from "../components/LandingCarousel";
import Navbar from "../components/Navbar";
//? CSS
import "../styles/Landing.scss";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <LandingCarousel />
    </div>
  );
};

export default Landing;
