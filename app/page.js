"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Resume from "./Components/resume/Resume";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* Fixed background layer */}
      <div className="fixed-background" />
      <main className="main">
        <Sidebar />
        <Home />
        <About />
        <Resume />
        <Portfolio />
      </main>
    </>
  );
};

export default Page;
