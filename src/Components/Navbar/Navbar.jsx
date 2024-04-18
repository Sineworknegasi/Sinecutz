import React from "react";
import "./Navbar.css";
import { GiBeard } from "react-icons/gi";
const Navbar = () => {
  return (
    <section className="bg-primary2">
      <nav className="navbar navbar-expand-lg navbar-light container d-flex justify-content-between py-3">
        <a className=" text-decoration-none fs-4 fw-bolder d-flex align-items-center " href="#e">
            <GiBeard className=" fs-1 Logo_icon"/>
          SINECUTZ
        </a>
        <button
          class="navbar-toggler bg-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse align-items-center justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav ">
            <a class="nav-item text-center mx-3 text-decoration-none fs-5 " href="#e">
              Home
            </a>
            <a class="nav-item text-center mx-3 text-decoration-none fs-5" href="#e">
              About
            </a>
            <a class="nav-item text-center mx-3 text-decoration-none fs-5 " href="#e">
              Services
            </a>
            <a class="nav-item text-center mx-3  text-decoration-none fs-5" href="#e">
              Gallary
            </a>
            <a class="nav-item text-center mx-3 text-decoration-none fs-5 " href="#e">
              Blog
            </a>
            <a class="nav-item text-center mx-3 text-decoration-none fs-5 " href="#d">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
