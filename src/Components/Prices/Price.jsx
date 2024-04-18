import React from "react";
import "./Price.css";

const images = [ 
    {
        images:"https://preview.colorlib.com/theme/narosundar/assets/img/gallery/barber1.jpg.webp"
    },
    {
        images:"https://preview.colorlib.com/theme/narosundar/assets/img/gallery/barber2.jpg.webp"
    },{
        images: "https://preview.colorlib.com/theme/narosundar/assets/img/gallery/barber3.jpg.webp"
    },
    {
        images: "https://preview.colorlib.com/theme/narosundar/assets/img/gallery/barber4.jpg.webp"
    },
    {
        images: "https://preview.colorlib.com/theme/narosundar/assets/img/gallery/barber4.jpg.webp"
    },
    {
        images: "https://preview.colorlib.com/theme/narosundar/assets/img/gallery/barber4.jpg.webp"
    }
].map((items) => {
    return (
        <div className="col-xll-4 col-xl-4 col-lg-6 col-md-6 ">
            <img src={items.images} alt="About" className="Image"/>
        </div>
    )
})

const Price = () => {
  return (
    <section className="Price_section">
      <div className="row">
        <div className="col-md-6 row gap-3">
            {images}
        </div>
        <div className="col-md-6">
          <p className="title">OUR TOP PRICES</p>
          <div>
            <p>Special Beard Treatment</p>
            <p>
              From<span>$40</span>
            </p>
          </div>
          <div>
            <p>Special Beard Treatment</p>
            <p>
              From<span>$40</span>
            </p>
          </div>
          <div>
            <p>Color your Beard</p>
            <p>
              From <span>$40</span>
            </p>
          </div>
          <div>
            <p>Wax your Beard</p>
            <p>
              From <span>$40</span>
            </p>
          </div>
          <div>
            <p>Wax your Beard</p>
            <p>
              From <span>$40</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
