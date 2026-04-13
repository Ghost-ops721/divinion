import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import useDocumentTitle from "../Components/heperFunctions/SetPageTitle"

const DistributorCorner = () => {
  useDocumentTitle("Distributor Corner - Divinion Investment");
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Ensures the footer stays at the bottom */}
      <Navbar />
      <main id="main-content">
        <h1 className="visually-hidden">Distributor Corner - Divinion investment</h1>
        <div className="flex-grow flex flex-col items-center justify-center py-10 font-joe">
          <p className="text-center p-4">
            {" "}
            {/* Added padding and centered text */}
            <a
              href="https://drive.google.com/drive/folders/1QhZdeWDJD6OQOoFj0rZyuNk71hpCFR-3?usp=sharing"
              className="text-blue-500 hover:underline "
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>{" "}
            for Distributor Empanelment forms.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DistributorCorner;
