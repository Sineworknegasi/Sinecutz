import React from "react";
import Title from "./Title";
import "./Blog.css";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

const blogInfo = [
  {
    id: 1,
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/blog/single_blog_1.jpg.webp",
    date: "15 jan",
    title: "Google inks pact for new 35-storey office",
    page: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    category: "Travel, LifeStyle",
    comments: "03 Comments",
  },
  {
    id: 2,
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/blog/single_blog_2.jpg.webp",
    date: "15 jan",
    title: "Google inks pact for new 35-storey office",
    page: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    category: "Travel, LifeStyle",
    comments: "03 Comments",
  },
  {
    id: 3,
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/blog/single_blog_3.jpg.webp",
    date: "15 jan",
    title: "Google inks pact for new 35-storey office",
    page: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    category: "Travel, LifeStyle",
    comments: "03 Comments",
  },
  {
    id: 4,
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/blog/single_blog_4.jpg.webp",
    date: "15 <br /> jan",
    title: "Google inks pact for new 35-storey office",
    page: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    category: "Travel, LifeStyle",
    comments: "03 Comments",
  },
  {
    id: 5,
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/blog/single_blog_5.jpg.webp",
    date: "15 jan",
    title: "Google inks pact for new 35-storey office",
    page: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    category: "Travel, LifeStyle",
    comments: "03 Comments",
  },
].map((item) => {
  return (
    <div>
      <div className="blog_cards p-3 my-4">
        <img
          src={item.image}
          alt="Blog_Images"
          className="img-fluid position-relative w-100"
        />
        <div
          className="Blog_date fs-5 red d-flex flex-column justify-content-center align-items-center fw-normal rounded-2 position-absolute translate-middle-y translate-middle-x"
          style={{ width: "90px", height: "90px", lineHeight: "30px" }}
        >
          <span className="fs-2 fw-bolder">
            15 <br />{" "}
          </span>
          jan
        </div>
        <h2 className="Blog_title fw-bold">{item.title}</h2>
        <p className="page fs-6 fw-light">{item.page}</p>
        <div className="page opacity-50 fs-6 d-flex flex-row justify-content-left align-items-center gap-2">
          <div className="Blog_footer">
            <FaUser />
            <span>{item.catagory}</span>
          </div>{" "}
          |{" "}
          <div className="Blog_footer">
            {" "}
            <FaComments /> <span>{item.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

const blogSidebarRecent = [
  {
    id: 1,
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/post/post_1.jpg.webp",
    title: "From life was you fish...",
    time: "January 04,2022",
  },
  {
    id: 2,
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/post/post_2.jpg.webp",
    title: "The Amazing Hubble",
    time: "02 Hours ago",
  },
  {
    id: 3,
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/post/post_3.jpg.webp",
    title: "Astrology or astronomy?",
    time: " 03 Hours ago",
  },
  {
    id: 4,
    image:
      "https://preview.colorlib.com/theme/narosundar/assets/img/post/post_4.jpg.webp",
    title: "Asteroids telescope",
    time: " 01 Hours ago",
  },
].map((items) => {
  return (
    <div className="d-flex flex-row align-items-center gap-3 py-2">
      <img src={items.image} alt="Recent_Post" className="img-fluid w-25" />
      <div className="Blog_sidebar_recent_post_content">
        <p className="fs-6 fw-bold">{items.title}</p>
        <span className="opacity-50">{items.time}</span>
      </div>
    </div>
  );
});


const Feeds = [
  {
    image: "https://preview.colorlib.com/theme/narosundar/assets/img/post/post_5.jpg.webp"
  },
  {
    image: "https://preview.colorlib.com/theme/narosundar/assets/img/post/post_3.jpg.webp"
  },
  {
    image:"https://preview.colorlib.com/theme/narosundar/assets/img/post/post_5.jpg.webp"
  },
  {
    image: "https://preview.colorlib.com/theme/narosundar/assets/img/post/post_1.jpg.webp"
  },
  {
    image: "https://preview.colorlib.com/theme/narosundar/assets/img/post/post_5.jpg.webp"
  },
  {
    image: "https://preview.colorlib.com/theme/narosundar/assets/img/post/post_3.jpg.webp"
  },
].map((items)=> {
  return (
  <a href="#" className="col-md-4 m-2 p-0">
    <img src={items.image} alt="Images" className="img-fluid w-100" />
  </a>
  )
})

const Blog = () => {
  return (
    <>
      <Title
        brand="Blog"
        images="https://preview.colorlib.com/theme/narosundar/assets/img/hero/hero4.jpg.webp"
      />
      <div className="container">
        <div className="row">
          <div class-md-4></div>
          <div className="col-md-8">{blogInfo}</div>
          <div className="col-md-4">
            <div className="blog_sidebar p-3 my-4">
              <div className="blog_sidebar_search d-flex flex-row my-5 p-4">
                <input
                  type="text"
                  className="form-control rounded-0 border"
                  placeholder="Search Keyword"
                />
                <button className="red border p-2">Search</button>
              </div>
              <div className="blog_sidebar_categories d-flex flex-column flex-row my-5 p-4">
                <h3 className="fw-bold Blog_sidebar_title ">Categories</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-decoration-none">
                      <span>Travel</span>
                      <span className="">(03)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      <span>LifeStyle</span>
                      <span className="">(05)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      <span>Photography</span>
                      <span className="">(10)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      <span>Food</span>
                      <span className="">(01)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      <span>Technology</span>
                      <span className="">(03)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blog_sidebar_recent_post d-flex flex-column flex-row my-5 p-4">
                <h3 className="Blog_sidebar_title">Recent Post</h3>
                {blogSidebarRecent}
              </div>
              <div className="blog_sidebar_tags d-flex flex-column flex-row my-5 p-4">
                <h3 className="Blog_sidebar_title">Tag Clouds</h3>
                <div className="d-flex flex-row flex-wrap gap-2 pt-5">
                  <button className="red border p-2">Project</button>
                  <button className="red border p-2">Love</button>
                  <button className="red border p-2">Technology</button>
                  <button className="red border p-2">travel</button>
                  <button className="red border p-2">Technology</button>
                  <button className="red border p-2">restaurant</button>
                  <button className="red border p-2">life style</button>
                  <button className="red border p-2">design</button>
                  <button className="red border p-2">illustration</button>                </div>
                </div>
              <div className="blog_sidebar_archive d-flex flex-column flex-row my-5 p-4">
                <h3 className="Blog_sidebar_title">Instagram Feeds</h3>
                <div className="row">
                  {Feeds}
                </div>
              </div>
              <div className="blog_sidebar_Newsletter d-flex flex-column flex-row my-5 p-4">
                <h3 className="Blog_sidebar_title mb-5">Newsletter</h3>
                <div className="d-flex flex-column flex-row gap-2">
                  <input
                    type="text"
                    className="form-control rounded-0 border p-3"
                    placeholder="Enter Your Email"
                  />
                  <button className="red  border p-3">Subscribe</button>
                  </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
