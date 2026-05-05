import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SubscribeForm from '../Components/SubscribeForm'
import useDocumentTitle from "../Components/heperFunctions/SetPageTitle"
const Subscribe = () => {
  useDocumentTitle("Contact Us - Divinion Investment");
  return (
    <>
    <header>
      <Navbar />
    </header>
      <main id="main-content">
        <h1 className="visually-hidden">Contact Us</h1>
        <SubscribeForm />
      </main>
      <Footer />

    </>
  )
}

export default Subscribe
