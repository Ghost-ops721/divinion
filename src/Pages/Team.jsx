import React from 'react'
import AboutBanThree from '../Components/AboutBanThree'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import OurPartners from "../Components/OurPartners"


const Team = () => {
  useDocumentTitle("Team - Divinion investment");
  return (
    <>
    <header>
      <Navbar />
    </header>
      <main id="main-content">
        <h1 className="visually-hidden">Team</h1>
        <AboutBanThree />
        <OurPartners />
      </main>
      <Footer />
    </>)
}

export default Team