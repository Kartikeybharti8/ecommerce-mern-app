import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_843wq8e",
        "template_b01foth",
        form.current,
        "YNnRsbNCdftTDmKh2"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  function scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  scroll();
  return (
    <>
      <Navbar />
      <Announcement />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <StyledContactForm>
          <h1 style={{ textAlign: "center" }}>Enquiry Form</h1>
          <h3
            style={{
              textAlign: "center",
              fontFamily: "Rage Italic",
              bold: false,
            }}
          >
            <i>No Question is silly ! Please feel free to enquire </i>
          </h3>
          <form ref={form} onSubmit={sendEmail}>
            {/* <form ref={form}> */}
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </StyledContactForm>
        <div className="container">
          <a href="https://wa.me/8619224578" target="_blank" rel="noreferrer">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
                    alt="whatsapp"
                  />
                </div>
                <div className="contentBx">
                  <h3>
                    <br />
                    <span> </span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>WhatsApp Us</li>
              </ul>
            </div>
          </a>
          <a href="mailto:nitesh@gmail.com" target="_blank" rel="noreferrer">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                    alt="mail"
                  />
                </div>
                <div className="contentBx">
                  {/* <h3>
                  <br />
                  <span>CC to Art</span>
                </h3> */}
                </div>
              </div>
              <ul className="sci">
                <li>Email us</li>
              </ul>
            </div>
          </a>
          <a
            href="https://goo.gl/maps/R9EUD6NkHnoAZNPP8"
            target="_blank"
            rel="noreferrer"
            alt="maps"
          >
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                    alt="icon"
                  />
                </div>
                <div className="contentBx"></div>
              </div>
              <ul className="sci">
                <li>Feel free to come at our office</li>
              </ul>
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

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
