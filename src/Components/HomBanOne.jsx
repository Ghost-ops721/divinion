import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Modal = ({ text, title, visible, onClose, closeButtonRef }) => {
  if (!visible) return null;
  return (
    <div role="dialog" aria-modal="false" aria-label={title} className="fixed inset-0 flex items-center justify-center bg-white/20 z-50">
      <div className="bg-white/80 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="text-lg text-black">{text}</div>
        <div className="flex flex-row-reverse">
          <button
            aria-label="Close"
            ref={closeButtonRef}
            onClick={onClose}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                onClose();
              }
              if (e.key === "Tab") {
                e.preventDefault();
                closeButtonRef.current?.focus();
              }
            }}
            className="mt-4  text-black border-black border-2 rounded-full px-2 hover:bg-black hover:text-white rounded  transition duration-300"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

const HomBanOne = () => {
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);
  const [visibleModal, setVisibleModal] = useState(null);

  const openModal = (index, event) => {
    triggerRef.current = event.currentTarget;
    setVisibleModal(index);
  };

  useEffect(() => {
    if (visibleModal !== null && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [visibleModal]);

  const closeModal = () => {
    setVisibleModal(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };


  const modalTitles = [
    "Genesis Of Divinion",
    "Dynamic Fund Management",
    "Alternative Investment Endeavor",
  ];

  const modalTexts = [
    "Established in October 2020, Divinion Advisory Services Private Limited reflects the fusion of expertise and insight in financial management. The name 'Divinion,' derived from 'Divine' and 'Union,' signifies this core philosophy..",
    <>
      Appointed as the investment manager by Divinion Alternative India Fund,
      for managing their funds, Divinion Advisory Services Private Limited
      embarked on a journey to dynamically navigate the ever-evolving landscape
      of financial markets.
      <br />
      <br />
      Currently, the following two funds have been launched by Divinion
      Alternative India Fund for which Divinion Advisory Services Private
      Limited is the Investment Manager:
      <br />
      1. Divinion Dynamic Fund – A close-ended fund launched in August 2022
      <br />
      2. Divinion Dynamic Focused Investments Fund – An open-ended fund launched
      in June 2024
    </>,

    "In December 2021, Divinion Alternative India Fund (DAIF) secured SEBI registration as a Category III Alternative Investment Fund (AIF). This milestone marked Divinion's foray into alternative investments, showcasing a dedication to diverse and sophisticated investment strategies.",
    "In collaboration with HDFC Bank, AZB & Partners, and Credentia Trusteeship, Divinion is fortified with the strength of reliable custodianship, legal acumen, and unwavering trust. Together, we forge a path towards financial excellence, guided by the principles of integrity, security, and legal soundness.",
  ];

  return (
    <>
      <header className="m-0 lg:hover:m-16 hover:m-4 transition: duration-700">
        <div
          className="relative bg-cover z-20 flex flex-col pb-4 sm:pb-10   md:p-8 bg-center w-full h-[88vh] my-auto mt-1"
          style={{ backgroundImage: "url('/hbgg.svg')" }}
        >
          <div className="flex text-white flex-col gap-10 lg:gap-12 sm:gap-4 my-auto lg:pl-56 md:pl-20 pl-10 text-left">
            <div className="flex flex-col font-joe  font-bold tracking-wider lg:text-[2.2rem] md:text-4xl text-2xl">
              <h2 className="[text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">Your Partner in Wealth Creation, <br /> Our Investors' Interest Above All</h2>
            </div>
            <div className="flex flex-col items-start text-left">
              {/* <p>(Click each to read)</p> */}

              <ul className="list-disc pl-5">
                <li>
                  <button
                    className="cursor-pointer text-left [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]"
                    onClick={(e) => openModal(0, e)}
                  >
                    Genesis Of Divinion
                  </button>
                </li>
                <li>
                  <button
                    className="cursor-pointer text-left [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]"
                    onClick={(e) => openModal(1, e)}
                  >
                    Dynamic Fund Management
                  </button>
                </li>
                <li>
                  <button
                    className="cursor-pointer text-left [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]"
                    onClick={(e) => openModal(2, e)}
                  >
                    Alternative Investment Endeavor
                  </button>
                </li>
                {/* <li>
                  <button
                    className="cursor-pointer text-left"
                    onClick={() => openModal(3)}
                  >
                    Our Partners
                  </button>
                </li> */}
              </ul>
            </div>
            {/* <Link to="/contact" >
                    <button className='bg-white text-black p-4 lg:w-1/5 sm:w-1/2 rounded-sm hover:bg-transparent transition duration-500'>
                        GET STARTED
                    </button>
                </Link> */}
          </div>

          <Modal
            text={modalTexts[visibleModal]}
            title={modalTitles[visibleModal]}
            visible={visibleModal !== null}
            onClose={closeModal}
            closeButtonRef={closeButtonRef}
          />
        </div>
      </header>
    </>
  );
};

export default HomBanOne;
