import React from "react";
// import AnimatedCard from '../Components/animatedCard/AnimatedCard'
import AboutBanOne from "../Components/AboutBanOne";
import AboutBanTwo from "../Components/AboutBanTwo";
import AboutBanThree from "../Components/AboutBanThree";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import OrgPhilo from "../Components/OrgPhilo";
import useDocumentTitle from "../Components/heperFunctions/SetPageTitle";
const About = () => {
  useDocumentTitle("About Us - Divinion investment");
  return (
    <>
    <header>
      <Navbar />
    </header>
      <main id="main-content">
        <h1 className="visually-hidden">About Us</h1>
        <OrgPhilo />
        <AboutBanOne />
        <AboutBanTwo />
        {/* <AboutBanThree /> */}
      </main>
      <Footer />
    </>
  );
};

export default About;
