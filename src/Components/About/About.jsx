import React from "react";
import "./About.css";
import { FaRegCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="container"> 
      <div className="row py-5 d-flex justify-content-between align-items-center About_sections">
        <div className="col-xll-4 col-xl-4 col-lg-5 col-md-9">
          <div className="About_caption p-2">
            <div className="About_single d-flex justify-content-center align-items-center gap-1">
              <FaRegCheckCircle className="check_icons col-2" />
              <p className="fs-6 col-10 texts text-secondary">Be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="About_single d-flex justify-content-between align-items-center gap-1">
              <FaRegCheckCircle className="check_icons col-2" />
              <p className="fs-6 col-10 texts text-secondary">Psum available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="About_single d-flex justify-content-between align-items-center gap-1">
              <FaRegCheckCircle className="check_icons col-2" />
              <p className="fs-6 col-10 texts text-secondary">Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="About_single d-flex justify-content-between align-items-center gap-1">
              <FaRegCheckCircle className="check_icons col-2" />
              <p className="fs-6 col-10 texts text-secondary">Humour available be the majority have suffered alteration in some form, by injected.</p>
            </div>
          </div>
        </div>
        <div className="col-xll-4 col-xl-4 col-lg-6 col-md-6">
            <img src="https://preview.colorlib.com/theme/narosundar/assets/img/gallery/about1.jpg.webp" alt="About" className="img-fluid"/>
        </div>
        <div className="col-xll-3 col-xl-4 col-lg-5 col-md-6">
            <div className="About-caption p-2 p-md-5">
                <div className="section-title mb-5">
                    <h1 className="titles py-3">ABOUT OUR STORY</h1>
                    <p className=" texts text-secondary fs-6">There are many variations of passages of Lorem Ipsum available be the majority have suffered alteration in some form, by injected humour or randomised words.</p>
                    <button className=" btn btn-outline-danger p-2 w-50">BOOK NOW</button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
