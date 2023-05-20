import React from "react";
import { Link } from "react-router-dom";

export default function ListbuildingFooterBanner() {
  return (
    <>
      <div className="listbuilding-banner">
        <h2>
          The data you need to make smart decisions. Easily find the fastest
          growing private companies. Know who to work with. Now.
        </h2>
        <Link to="/signup">
          <button className="btnstart">Start Free 14-Day Trial</button>
        </Link>
      </div>
    </>
  );
}
