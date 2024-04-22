import React from "react";
import Title from "./Title";
import './Contact.css'
import { FaTwitter,FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt,FaEnvelope, FaMobile  } from "react-icons/fa";


const Contact = () => {
  return (
    <>
      <Title
        brand="Contact"
        images="https://preview.colorlib.com/theme/narosundar/assets/img/hero/hero4.jpg.webp"
      />
      <div className=" d-flex justify-content-center bg-primary2 py-5 ">
        <div className="form">
          <div className="contact-info">
            <h3 className="Contact_title">Let's get in touch</h3>
            <p className="Conatct_text">
              {" "}
              Contact us with the following details. and fillup the form with
              the details.{" "}
            </p>
            <div className="Contanct_info">
              <div className="social-information">
               
                <FaMapMarkedAlt/>
                <p className="m-0">Mekelle, TIgray, Ethiopia</p>
              </div>
              <div className="social-information">
               
                <FaEnvelope/>
                <p className="m-0">Sineworknegasi38@gmail.com</p>
              </div>
              <div className="social-information">
                <FaMobile/>
                <p className="m-0">+251966855900</p>
              </div>
            </div>
            <div className="social-media">
              <p className=" text-secondary">Connect with us :</p>
              <div className="social-icons">
                {" "}
                <a href="#">
                  
                  <FaFacebook/>
                </a>
                <a href="#">
                  
                  <FaTwitter/>
                </a>
                <a href="#/">
                  
                  <FaInstagram/>
                </a>{" "}
                <a href="#/">
                  <FaLinkedin/>
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="contact-info-form">
            {" "}
            <span className="circle one"></span> <span className="circle two"></span>
            <form action="#" onclick="return false;" autocomplete="off">
              <h3 className="Contact_title">Contact us</h3>
              <div className="social-input-containers">
                {" "}
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />{" "}
              </div>
              <div className="social-input-containers">
                {" "}
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />{" "}
              </div>
              <div className="social-input-containers">
                {" "}
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="Phone"
                />{" "}
              </div>
              <div className="social-input-containers textarea">
                {" "}
                <textarea
                  name="message"
                  className="input"
                  placeholder="Message"
                ></textarea>{" "}
              </div>{" "}
              <input type="submit" value="Send" className="btn text-white border-white w-25" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
