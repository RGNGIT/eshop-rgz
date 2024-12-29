import Carousel from "./components/carousel-component";
import './App.css';
import Header from "./components/header-component";
import Footer from "./components/footer-component";

export default function App() {
    return (
        <div>
            <Header />
            <Carousel />
            <Footer/>
        </div>
    );
}