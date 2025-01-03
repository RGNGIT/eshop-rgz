import Carousel from "../carousel-component";
import '../../styles/landing.css';
import Header from "../header-component";
import Footer from "../footer-component";
import LandingComponent from "../landing-component";

export default function Landing() {
  return (
    <div>
      <Header />
      <Carousel />
      <LandingComponent/>
      <Footer />
    </div>
  );
}