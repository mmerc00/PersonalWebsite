import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hamburger from "../components/Hamburger";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Connect from "../components/Connect";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

import { homeObjectOne } from "../components/About/Data";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hamburger isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About {...homeObjectOne} />
      <Skills />
      <Projects />
      <Connect />
      <Footer />
    </>
  );
};

export default Home;
