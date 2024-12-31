import Carousel from "../carousel-component";
import '../../styles/landing.css';
import Header from "../header-component";
import Footer from "../footer-component";

export default function Landing() {
  return (
    <div>
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}