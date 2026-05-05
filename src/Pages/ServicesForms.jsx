import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import useDocumentTitle from "../Components/heperFunctions/SetPageTitle"

const ServicesForms = () => {
  useDocumentTitle("Services Form - Divinion Investment");
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Ensures the footer stays at the bottom */}
      <header>
      <Navbar />
      </header>
      <main id="main-content">
        <h1 className="visually-hidden">Services Form - Divinion investment</h1>
        <div className="flex-grow flex flex-col items-center justify-center py-10 font-joe">
          <p className="text-center p-4">
            {" "}
            {/* Added padding and centered text */}
            <a
              href="https://drive.google.com/drive/folders/1dzx3-PfOmdXUT69WwiYma-9axpaVymD1?usp=sharing"
              className="text-blue-600 underline"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              Click here
            </a>{" "}
            for Service related forms.
          </p>
        </div>
      </main>
      <Footer />
    </div >
  );
};

export default ServicesForms;
