import React from "react";
import './Title.css';

const Title = (props) => {
  return (
    <section className="Hero_section bg-primary2 pt-5 ">
    <div className="row w-100 d-flex flex-row align-items-center p-2 pt-4">
      <div className="col-md-1">
      </div>
      <div className="col-12 col-sm-5 col-md-5 bg-primary2 d-flex justify-content-center align-items-center">
        <p className=" display-4 fw-bolder">{props.brand}</p>
      </div>
      <div className="col-12 col-sm-6 col-md-6 p-0">
        <img
          src={props.images}
          alt="Images"
          className="w-100"
        />
      </div>
    </div>
  </section>
    
  );
};

export default Title;


/**
 * <div className="row title ">
      <div className="col-12 col-sm-6 col-md-6 bg-primary2 d-flex justify-content-center align-items-center">
        <p className=" display-4 fw-bolder">{props.brand}</p>
      </div>
      <div className="col-12 col-sm-6 col-md-6 p-0">
        <img
          src={props.images}
          alt="Images"
        />
      </div>
    </div>
 */
