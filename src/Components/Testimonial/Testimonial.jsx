import React from "react";
import "./Testimonial.css";
import { IoStar } from "react-icons/io5";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";

const testimonial = [{
    image: "https://i.pinimg.com/originals/3a/25/d4/3a25d4c633cf0b4b8bb3af3adb91d9a4.jpg",
    name: "John Doe",
    position: "CEO of Company",
    description: "Available be the majority have suffered alteration in some form, by injected humour."
}, {
    image: "https://c.pxhere.com/photos/fd/61/ben_knapen_portrait_person_face_expression_male_man_adult-1068652.jpg!d",
    name: "Jimmy Changa",
    position: "CEO of Company",
    description: "Available be the majority have suffered alteration in some form, by injected humour."
}, {
    
    image: "https://c.pxhere.com/photos/fd/61/ben_knapen_portrait_person_face_expression_male_man_adult-1068652.jpg!d",
    name: "Wilma Mumduya",
    position: "CEO of Company",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna."
}].map((item)=> {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 border rounded-3 p-4 testimonial_comments">
            <div className="testimonial_header py-3">
                <div className="testimonial_rating fs-4 text-danger">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoIosStarHalf />
                </div>
            </div>
            <div className="testimonial_content">
              <p className="fs-5 text-secondary">
                {item.description}
              </p>
              <div className="testimonial_author d-flex align-items-center gap-3 ">
                <img
                  src={item.image}
                  alt="Quote"
                />
                <div className="testimonial_author_info d-flex flex-column align-items-start">
                <h5 className=" fw-bolder fs-5">{item.name}</h5>
                <p className="text-secondary fs-6">{item.position}</p>
                </div>
              </div>
            </div>
          </div>
    )
});

const Testimonial = () => {
  return (
    <section className="section_testimonial py-5">
      <div className="container py-5">
        <p className="titles">CUSTOMERS SAY ABOUT US</p>
        <div className="row d-flex flex-column flex-sm-row py-5 gap-0">
            {testimonial}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
