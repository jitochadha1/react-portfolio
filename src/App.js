import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";


function App() {

  const [links] = useState(["About Me", "Portfolio", "Contact", "Resume"]);
  const [activePage, setActivePage] = useState("About Me");

  return (
    <>
      <Nav
        links={links}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <main>

      </main>

      <Footer />
    </>
  );
}

export default App;
