import React from "react";
import Footer from "./Footer";
import ListbuildingHeader from "./ListbuildingHeader";
import ListbuildingHero from "./ListbuildingHero";
import ListbuildingFooterBanner from "./ListbuildingFooterBanner";

export default function ListBuilding() {
  return (
    <>
      <div className="full-page">
        <ListbuildingHeader />
        <ListbuildingHero />
        <ListbuildingFooterBanner />
        <Footer />
      </div>
    </>
  );
}
