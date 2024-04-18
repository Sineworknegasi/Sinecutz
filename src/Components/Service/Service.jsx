import React from "react";
import "./Service.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Service = () => {
  return (
    <section className="service_section container">
      .
      <div class="row d-flex justify-content-center align-items-center">
        <div className=" col-12 col-sm-6 col-md-6">
          <p className="titles">ALL WE DO FOR YOU</p>
          <div class="btn-group">
            <button
              type="button"
              class=" dropdown dropdownbtn p-4"
              data-bs-toggle="dropdown"
            >
              FOR HAIR <IoMdArrowDropdown />
            </button>
            <ul class="dropdown-menu ">
              <li>
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
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <button
              type="button"
              class=" dropdownbtn p-4"
              data-bs-toggle="dropdown"
            >
              For Beard<IoMdArrowDropdown />
            </button>
            <ul class="dropdown-menu ">
              <li>
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
              </li>
            </ul>
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
