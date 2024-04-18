import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Price from './Components/Prices/Price';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Price/>
    </>
  );
}

export default App;
