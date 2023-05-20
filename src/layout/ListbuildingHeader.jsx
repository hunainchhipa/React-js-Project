import React from "react";
import Navbar from "./Navbar";

export default function ListbuildingHeader() {
  return (
    <>
      <div className="listbuilding-header">
        <div className="listbuilding-navbar">
          <Navbar logowhite={<img src="img/logo-white.png" alt="" />} />
        </div>
        <div className="listbuilding-content">
          <h1>Start closing more deals. With better insight.</h1>
          <p>
            Stop losing deals and manually updating your data. Mattermark will
            automatically enrich your leads, alert you of new companies, and
            pinpoint your next decision maker.
          </p>
          <embed src="https://www.youtube.com/embed/7iCQJLbKF-4" type="" />
        </div>
      </div>
    </>
  );
}
