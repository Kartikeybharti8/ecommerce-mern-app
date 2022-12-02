import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Counter from "../components/Counter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import spinner from "../components/spinner";


const Home = () => {
  return (

    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Counter />
      <Footer />
    </div>
  );
};


export default Home;
