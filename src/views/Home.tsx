import React, { useState } from "react";

import About from "../components/Home/About/About";
import Projects from "../components/Home/Projects/Projects";
import Teaching from "../components/Home/Teaching/Teaching";

import Footer from "../components/Home/Footer/Footer";
import Navbar from "../components/Home/Navbar/Navbar";

const Home = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <div className="container">
        <About />
        <Projects />
        <Teaching />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
