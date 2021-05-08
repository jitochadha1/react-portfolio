import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";


import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [links] = useState(["About Me", "Portfolio", "Contact", "Resume"]);
  const [activePage, setActivePage] = useState("About Me");

  return (
    <>
      <Header
        links={links}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <main>
        {activePage === "About Me" && <About />}
        {activePage === "Portfolio" && <Portfolio />}
        {activePage === "Contact" && <Contact />}
        {activePage === "Resume" && <Resume />}
      </main>

      <Footer />
    </>
  );
}

export default App;
