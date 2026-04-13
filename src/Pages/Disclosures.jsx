import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import useDocumentTitle from "../Components/heperFunctions/SetPageTitle"
const Disclosures = () => {
  useDocumentTitle("Disclosures - Divinion Investment");
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Ensures the footer stays at the bottom */}
      <Navbar />
      <main id="main-content">
        <h1 className="visually-hidden">Disclosures - Divinion investment</h1>
        <div className="flex-grow flex flex-col items-center justify-center py-10 font-joe">
          <p className="text-center p-4">
            {" "}
            {/* Added padding and centered text */}
            <a
              href="https://drive.google.com/drive/folders/1JCigign8YK2REf0nsYSzBlJtMIQ1oOLS"
              className="text-blue-500 hover:underline "
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>{" "}
            for various Disclosures.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclosures;
