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
        images: "https://preview.colorlib.com/theme/narosundar/assets/img/gallery/barber5.jpg.webp"
    },
    {
        images: "https://preview.colorlib.com/theme/narosundar/assets/img/gallery/barber6.jpg.webp"
    }
].map((items) => {
    return (
        <div className="col-xll-4 col-xl-4 col-lg-6 col-md-6 single-barber ">
            <img src={items.images} alt="About" className="Image" />
        </div>
    )
})

const Price = () => {
  return (
    <section className="Price_section">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 row flex-wrap">
            {images}
        </div>
        <div className="col-md-6 px-5">
          <p className="titles">OUR TOP PRICES</p>
          <table>
            <thead>
              
            </thead>
            <tbody>
              <tr>
                <td>Beard Trim</td>
                <td>$<span>20.00</span></td>
              </tr>
              <tr>
                <td>Beard Shave</td>
                <td>$<span>25.00</span></td>
              </tr>
              <tr>
                <td>Beard Coloring</td>
                <td>$<span>30.00</span></td>
              </tr>
              <tr>
                <td>Beard Wash</td>
                <td>$<span>15.00</span></td>
              </tr>
              <tr>
                <td>Beard Wash</td>
                <td>$<span>15.00</span></td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
};

export default Price;
