import React from "react";
import Title from "./Title";

const Images = [
  {
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/gallery/instra2.jpg.webp",
  },
  {
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/gallery/instra1.jpg.webp",
  },
  {
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/gallery/instra3.jpg.webp",
  },
  {
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/gallery/instra4.jpg.webp",
  },
  {
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/gallery/instra5.jpg.webp",
  },
  {
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/gallery/instra6.jpg.webp",
  },
].map((index) => {
  return (
      <div className="col-md-4 col-sm-6 col-12 p-1">
        <img
          src={index.image}
          alt="Gallery"
          className="img-fluid w-100 h-100"
        />
      </div>
  );
});

const Gallary = () => {
  return (
    <>
      <Title
        brand="Gallary"
        images="https://preview.colorlib.com/theme/narosundar/assets/img/hero/hero3.jpg.webp"
      />
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="titles w-auto my-5">Gallary</h1>
        <div className="row">
         {Images}
        </div>
      </div>
    </>
  );
};

export default Gallary;
