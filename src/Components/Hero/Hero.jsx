import React from "react";
import { LuScissorsSquare } from "react-icons/lu";
import './Hero.css'

const Hero = () => {
  return (
    <section className="Hero_section bg-primary2">
      <div className="row 100vh w-100 d-flex flex-row align-items-center p-2">
        <div className="col-md-1">
        </div>
        <div className="col-md-5">
          <LuScissorsSquare className="text-danger " size={50} />
          <h1 className="Hero_text text-sm-center text-md-start ">WE'RE THE LAST OF BREED.</h1>
          <p className=" fs-4 ">Achieve your Dream Style</p>
          <button className="p-3 red fs-5 Book_btn w-25 ">Book Now</button>
        </div>
        <div className="col-md-6  Hero_image">
        </div>
      </div>
    </section>
  );
};

export default Hero;
