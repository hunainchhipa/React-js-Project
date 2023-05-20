import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Banner from "./Banner";
import Description from "./Description";
import Dataflow from "./Dataflow";
import Hero from "./Hero";
import Card from "./Card";
import Footerbanner from "./Footerbanner";
import Footer from "./Footer";

export default function Main() {
  return (
    <>
      <div className="full-page">
        <Navbar logo={<img src="img/logo.png" alt="" />} />
        <Header />
        <Banner />
        <Description />
        <Dataflow />
        <Hero />
        <Card />
        <Footerbanner />
        <Footer />
      </div>
    </>
  );
}
