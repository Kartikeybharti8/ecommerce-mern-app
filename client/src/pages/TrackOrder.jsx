import React, { useRef } from "react";
// import emailjs from "@npm i @emailjs/browser";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./track.css";

const Track = () => {
  const form = useRef();
  return (
    <>
    <Navbar/>
    <Announcement/>
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
        <p className="order-track-text-stat">Manufracturing In Progress</p>
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


      <Footer/>
    </>  );
};

export default Track;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    top-margin: 20px;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: 2px;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
