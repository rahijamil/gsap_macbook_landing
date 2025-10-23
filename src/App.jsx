import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import ShowCase from "./components/ShowCase";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <ShowCase />
    </main>
  );
};

export default App;
