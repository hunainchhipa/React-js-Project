import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1>Data-Driven Deal Making</h1>
        <h2>
          Discover, prospect, and track the world’s fastest-growing companies
          and investors.
        </h2>
        <Link to="/signup">
          <button className="btnstart">Start Free 14-Day Trial</button>
        </Link>
        <div className="signup-note">
          No commitment, no credit card required.
        </div>
      </div>
    </>
  );
}
