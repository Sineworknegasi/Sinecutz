import React from "react";
import "./Service.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Service = () => {

  return (
    <section className="service_section container my-5">
      <div class="row d-flex justify-content-center align-items-center py-5">
        <div className=" col-12 col-sm-6 col-md-6">
          <p className="titles">ALL WE DO FOR YOU</p>
          <div id="accordion">
          <button className="dropdownbtn my-3" id="hairbtn" type="button" data-bs-toggle="collapse" data-bs-target="#hairtable">For Hair <IoMdArrowDropdown/></button>
          <table id="hairtable" class="collapse show" data-bs-parent="#accordion">
            <thead>
              
            </thead>
            <tbody>
              <tr>
                <td>Trim your Hair</td>
                <td>$<span>20.00</span></td>
              </tr>
              <tr>
                <td>Special Beard Treatment</td>
                <td>$<span>25.00</span></td>
              </tr>
              <tr>
                <td>Beard Coloring</td>
                <td>$<span>30.00</span></td>
              </tr>
              <tr>
                <td>Wax your Beard</td>
                <td>$<span>15.00</span></td>
              </tr>
            </tbody>

          </table>
          <button className="dropdownbtn my-3" id="hairbtn" type="button" data-bs-toggle="collapse" data-bs-target="#beardtable" >For Beard <IoMdArrowDropdown/></button>
          <table id="beardtable" data-bs-parent="#accordion">
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
        <div className=" col-12 col-sm-6 col-md-6">
            <img src="https://preview.colorlib.com/theme/narosundar/assets/img/gallery/about2.jpg.webp" alt="About" className="Image" />
        </div>
      </div>
    </section>
  );
};

export default Service;
