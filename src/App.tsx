import React from "react";

import Header from "./components/header/Header";
import HeroBanner from "./components/heroBanner/HeroBanner";
import Testimonials from "./components/testimonials/Testimonials";
import Community from "./components/community/Community";
import News from "./components/news/News";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <Testimonials />
      <Community />
      <News />
      <Footer />
    </div>
  );
}

export default App;
