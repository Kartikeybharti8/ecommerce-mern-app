import React from "react";
import "./About.css";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

const Content = styled.div`
  min-height: 100vh;
  padding: 0px 230px 0px 230px;
  background-color: white;
  color: black;
  margin: 0;
  align-items: center;
  display: block;
  text-align: center;
  font-family: "Philosopher", sans-serif;
  font-weight: 300;
  font-size: large;
  letter-spacing: 0em;
`;

const P = styled.div`
  padding: 15px;
  border: 2px double #ee6c4d;
  border-radius: 40px;
`;

const H1 = styled.div`
  padding: 50px 0px 0px 0px;
  font-size: x-large;
`;

function About() {
  function scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  scroll();
  return (
    <div>
      <Announcement />
      <Navbar />
      <Content>
        <H1>
          
          <h1> Our Story</h1>
        </H1>
        <br />
        <p>
          A handwritten note on a piece of recycled paper and a handmade trinket
          is what one receives with every order, neatly wrapped in eco-friendly
          packaging from Udaipur, making it one of the most loved e-commerce
          portals to a discerning domestic and global audience who are
          enthusiastic about Indian handicraft and handloom products. The online
          store for handicraft, handlooms, fabrics, jewelry, paintings, and
          other artworks is India’s only crafts and loom retailer with a hundred
          percent inventory of handmade artisanal products ranging from Punjab’s
          phulkari dupattas and Gujarat’s bandhani sarees to Andhra’s ikkat
          handloom fabrics, and Odisha’s pattachitra paintings. It sources
          products, including jewelry, dress materials, and household items from
          all over India, making it the largest curated portal for art and
          handicraft products.
        </p>
        <br />
        <br />
        <img
          id="image"
          src="https://cdn.shopify.com/s/files/1/0281/8729/5828/files/Leshemi_7_Process_Weaving_LESHEMI-80_15x10_300_1024x1024.jpg?v=1596651748"
        ></img>
        <br />
        <br />
        <br />
        <br />
        <P>
          "Our aim is simple: to go beyond established commercial relationships
          between buyers and makers of handcrafted objects by providing
          opportunities for learning; creating lasting value through a dialogue
          between us and our generation of emerging artists, artisans, and
          designers."
        </P>
        <H1>
          <h1>Our Philosophy</h1>
        </H1>
        <div class="row">
          <div class="col-4">
            <div class="card_container">
              <div class="img_block">
                <img src="//cdn.shopify.com/s/files/1/0155/8131/files/WhatsApp_Image_2022-08-24_at_3.49.52_PM.png?v=1661349023&amp;width=100" />
              </div>
              <div class="text_block">
                <h2 class="column_heading">With Love</h2>
                <p class="column_description">
                  All products are personally sourced with care and respect, for
                  the artisan, craftform and you. Pyaar se dekho and pyaar se
                  khareedo.
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card_container">
              <div class="img_block">
                <img src="//cdn.shopify.com/s/files/1/0155/8131/files/unfinished-jug.png?v=1661349276&amp;width=100" />
              </div>
              <div class="text_block">
                <h2 class="column_heading">Nature-Friendly</h2>
                <p class="column_description">
                  Crafts are hand-made and by nature organic, environmentally
                  friendly. By supporting local, you are creating a sustainable
                  future.
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card_container">
              <div class="img_block">
                <img src="//cdn.shopify.com/s/files/1/0155/8131/files/WhatsApp_Image_2022-08-24_at_3.43.16_PM.png?v=1661349449&amp;width=100" />
              </div>
              <div class="text_block">
                <h2 class="column_heading">Artisan-First</h2>
                <p class="column_description">
                  We partner with and support 500+ artisan families and their
                  legacy in craft. They give us the confidence to bring these
                  products to you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <H1>
          <h1>Our Team</h1>
        </H1>
        <div class="row">
          <div class="col-4">
            <div class="card_container">
              <div class="img_block1">
                <img src="https://media-exp1.licdn.com/dms/image/D4D03AQGYhZCVM-SiFQ/profile-displayphoto-shrink_100_100/0/1667811123164?e=1673481600&v=beta&t=btJ_1nIFzokGSj8L3AYd62wr4r5ISZHPnrhwB2BmYHM" />
              </div>
              <div class="text_block">
                <h2 class="column_heading">Hasnain Abbas Tinwala</h2>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card_container">
              <div class="img_block1">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEfLKfQFMOcBA/profile-displayphoto-shrink_100_100/0/1657949961571?e=1673481600&v=beta&t=5QSRrU5LySMGJq62UmaojmJNLPYWAAt1ZP4LbgbmrW0" />
              </div>
              <div class="text_block">
                <h2 class="column_heading">Kartikey Bharti</h2>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card_container">
              <div class="img_block1">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHStm4x_Cqlxw/profile-displayphoto-shrink_100_100/0/1662222288075?e=1673481600&v=beta&t=0765H3OfPqmCG2gbgdBY9aggqfvhgcVWCS-4y7v4bUY" />
              </div>
              <div class="text_block">
                <h2 class="column_heading">Nidhi Mantri</h2>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="card_container">
              <div class="img_block1">
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHhis8A-nqNOw/profile-displayphoto-shrink_100_100/0/1639962989239?e=1673481600&v=beta&t=YRDvsYAZXkeEsFFdupCG6Sef6ligJmVmtuIl5YvGGb8" />
              </div>
              <div class="text_block">
                <h2 class="column_heading">Nitesh Kumawat</h2>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card_container">
              <div class="img_block1">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFwxrRnMonjRw/profile-displayphoto-shrink_100_100/0/1657048370889?e=1673481600&v=beta&t=FL_wNofU2Mrgm-JMhdQc5VqCustvFVFPS3zfLKA0imE" />
              </div>
              <div class="text_block">
                <h2 class="column_heading">Sheetal Sharma</h2>
              </div>
            </div>
          </div>
        </div>
      </Content>


      <Footer />
    </div>
  );
}

export default About;
