import React, { useRef } from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./track.css";

const Track = () => {
  function scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  scroll();
  const form = useRef();
  console.log(form);
  return (
    <>
      <Navbar />
      <Announcement />
      <section className="root">
        <figure>
          <img
            src="https://cdn.shopify.com/s/files/1/0155/8131/products/0Q8A6927_480x.jpg?v=1664965442"
            alt=""
          />
          <figcaption>
            <h4>Mug</h4>
            <h6>pottery</h6>
            <h2>₹ 23</h2>
          </figcaption>
        </figure>
        <div className="order-track">
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot" />
              <span className="order-track-status-line" />
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat">Order Received</p>
              <span className="order-track-text-sub">1st November, 2022</span>
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot" />
              <span className="order-track-status-line" />
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat">Order Processed</p>
              <span className="order-track-text-sub">2nd November, 2022</span>
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot" />
              <span className="order-track-status-line" />
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat">
                Manufracturing In Progress
              </p>
              <span className="order-track-text-sub">3rd November, 2022</span>
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot" />
              <span className="order-track-status-line" />
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat">Order Dispatched</p>
              <span className="order-track-text-sub">15th November, 2022</span>
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot" />
              <span className="order-track-status-line" />
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat">Order Deliverd</p>
              <span className="order-track-text-sub">21st November, 2022</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Track;
