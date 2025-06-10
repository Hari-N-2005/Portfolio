"use client";
import React from "react";
import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Resume from "./Components/resume/Resume";
import Portfolio from "./Components/portfolio/Portfolio";
//import Contact from "./Components/contact/Contact";
//import PortfolioModal from "./Components/modal/PortfolioModal";
const page = () => {
  return (
    <>
      <main className="main">
        <Home />
        <Sidebar />
        <About />
        <Resume />
        <Portfolio />
      </main>
    </>
  );
};

export default page;
