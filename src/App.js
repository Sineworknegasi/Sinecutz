import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Price from "./Components/Prices/Price";
import Service from "./Components/Service/Service";
import Catagories from "./Components/Catagories/Catagories";
import Testimonial from "./Components/Testimonial/Testimonial";
import AboutUS from "./pages/AboutUs";
import Gallary from "./pages/Gallary";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Price />
                <Service />
                <Catagories />
                <Testimonial />
              </>
            }
          ></Route>
          <Route
            path="about"
            element={
              <>
                {" "}
                <AboutUS />
                <About />
                <Price />
                <Service />
                <Catagories />
                <Testimonial />
              </>
            }
          />
          <Route path="services" element={
          <>
           <Services />
           <Service />
                <Catagories />
                <Testimonial />
          </>
         } />
          <Route path="gallary" element={<Gallary />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
