import React from "react";
import './Title.css';

const Title = (props) => {
  return (
    <div className="row">
      <div className="col-12 col-sm-6 col-md-6 bg-primary2 d-flex justify-content-center align-items-center ">
        <p className=" display-4 fw-bolder">{props.brand}</p>
      </div>
      <div className="col-12 col-sm-6 col-md-6">
        <img
          src="https://preview.colorlib.com/theme/narosundar/assets/img/hero/hero1.jpg.webp"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Title;
