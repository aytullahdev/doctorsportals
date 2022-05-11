import React from "react";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Appoinmentbanner from './Banners/Appoinmentbanner';
import Testimonial from './Testimonial/Testimonial';
import Contuctus from './Contuctus/Contuctus';
import Footer from './Footer/Footer';
const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Appoinmentbanner />
      <Testimonial />
      <Contuctus />
      <Footer />
    </div>
  );
};

export default Home;
