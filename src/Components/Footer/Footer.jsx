import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GiBeard } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdFax } from "react-icons/md";

const Footer = () => {
  return (
    <section className="Footer_section p-1 p-sm-3 p-md-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1 className=" fw-bolder">SINECUTZ<GiBeard className="text-danger"/></h1>
            <p className=" text-secondary ">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-3">
            <h2>Products</h2>
            <ul className="d-flex flex-column gap-1 text-secondary">
                <li>COMBS</li>
                <li>SHAMPOS</li>
                <li>CONDITIONER</li>
                <li>GEL</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2>Quick Links</h2>
            <ul className="d-flex flex-column gap-1 text-secondary">
                <li><a href="" className=" text-decoration-none text-secondary">Home </a></li>
                <li><a href="" className=" text-decoration-none text-secondary">About </a></li>
                <li><a href="" className=" text-decoration-none text-secondary">Services </a></li>
                <li><a href="" className=" text-decoration-none text-secondary">Products </a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className="">Contact</h2>
            <ul className="d-flex flex-column gap-1 text-secondary">
                <li className=" fs-6"><FaHome/> Mekelle, TIgray ,Ethiopia</li>
                <li className=" fs-6"><IoMail/> SineworkNegasi38@gmail.com</li>
                <li className=" fs-6"><FaPhoneAlt/> +251 933 33 33 33</li>
                <li className=" fs-6"><MdFax />+251 933 33 33 33</li>
            </ul>
          </div>
        </div>
        <div className=" d-flex flex-sm-row flex-column justify-content-between align-items-center">
            <p className=" fs-5">copyright© reserved {new Date().getFullYear()} developed by Sinework</p>
            <ul className=" d-flex justify-content-between gap-4 list-unstyled fs-2">
              <li className=" btn btn-outline-danger fs-3  ">
                <FaFacebook />
              </li>
              <li className=" btn btn-outline-danger fs-3 ">
                <FaInstagram />
              </li>
              <li  className=" btn btn-outline-danger fs-3 ">
                <FaLinkedinIn />
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
