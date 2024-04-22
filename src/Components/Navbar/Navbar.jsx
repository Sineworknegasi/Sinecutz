import React from "react";
import "./Navbar.css";
import { GiBeard } from "react-icons/gi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="bg-primary2 position-fixed w-100 z-3">
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
            <Link class="nav-item text-center mx-3 text-decoration-none fs-6 py-2 py-sm-0 py-md-0 " to="/">
              Home
            </Link>
            <Link class="nav-item text-center mx-3 text-decoration-none fs-6 py-2 py-sm-0 py-md-0 " to="/about">
              About
            </Link>
            <Link class="nav-item text-center mx-3 text-decoration-none fs-6 py-2 py-sm-0 py-md-0  " to="/services">
              Services
            </Link>
            <Link class="nav-item text-center mx-3  text-decoration-none fs-6 py-2 py-sm-0 py-md-0 " to="/gallary">
              Gallary
            </Link>
            <Link class="nav-item text-center mx-3 text-decoration-none fs-6 py-2 py-sm-0 py-md-0  " to="/blog">
              Blog
            </Link>
            <Link class="nav-item text-center mx-3 text-decoration-none fs-6 py-2 py-sm-0 py-md-0  " to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
