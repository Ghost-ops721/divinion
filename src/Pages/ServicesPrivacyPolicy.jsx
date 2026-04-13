import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SPPComponent from '../Components/SPPComponent'
import useDocumentTitle from "../Components/heperFunctions/SetPageTitle"
const ServicesPrivacyPolicy = () => {
  useDocumentTitle("Privacy Policy - Divinion Investment");
  return (
    <>
      <Navbar />
      <main id="main-content">
        <h1 className="visually-hidden">Privacy Policy - Divinion investment</h1>
        <SPPComponent />
      </main>
      <Footer />
    </>
  )
}

export default ServicesPrivacyPolicy
