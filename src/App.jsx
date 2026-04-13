import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './Router'
import { BrowserRouter, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function SkipLink() {
  const location = useLocation();
  // ❌ Hide on admin pages
  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <a
      href="#main-content"
      className="absolute left-2 -top-10 focus:top-2 bg-black text-white px-3 py-2 z-50"
    >
      Skip to main content
    </a>
  );
}
  function App() {

    return (
      <>

        {/* <Navbar /> */}
        <BrowserRouter>
          <SkipLink />
          <AppRouter />
        </BrowserRouter>
        {/* <Footer /> */}
      </>
    )
  }

  export default App;
