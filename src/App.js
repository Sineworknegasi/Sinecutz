import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Price from './Components/Prices/Price';
import Service from './Components/Service/Service';
import Catagories from './Components/Catagories/Catagories';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Price/>
    <Service/>
    <Catagories/>
    <Testimonial/>
    <Footer/>
    </>
  );
}

export default App;
