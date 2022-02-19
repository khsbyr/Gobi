import React from "react";
import "./index.css";
import About from "./pages/components/About";
import AboutMobile from "./pages/components/AboutMobile";
import Footer from "./pages/components/Footer";
import Header from "./pages/components/Header";
import Men from "./pages/components/Men";
import Shop from "./pages/components/Shop";
import Subscribe from "./pages/components/Subscribe";
import WinterSpice from "./pages/components/WinterSpice";
import Women from "./pages/components/Women";

const App = () => (
  <div>
    <Header />
    <WinterSpice />
    <Women />
    <Men />
    <Shop />
    <About />
    <AboutMobile />
    <Subscribe />
    <Footer />
  </div>
);

export default App;
