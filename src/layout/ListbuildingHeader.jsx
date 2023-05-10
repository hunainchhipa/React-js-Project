import React from "react";
import Navbar from "./Navbar";

export default function ListbuildingHeader() {
  return (
    <>
      <div className="listbuilding">
        <Navbar />
        <img src="/img/meeting.jpg" className="meeting" alt="" />
      </div>
    </>
  );
}
