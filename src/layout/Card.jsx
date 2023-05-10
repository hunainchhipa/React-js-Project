import React from "react";

export default function card() {
  return (
    <>
      <div className="container">
        <h1>Deal Professionals Use Our Data</h1>
        <div className="cards">
          <div className="card">
            <img src="/img/investors.jpeg" alt="" />
            <div className="overlay">
              <div className="caption">
                <h3>INVESTORS</h3>
                <p>Surface new companies and better deals, faster.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="/img/sales.jpeg" alt="" />
            <div className="overlay">
              <div className="caption">
                <h3>SALES / BD</h3>
                <p>
                  Dramatically reduce prospecting time and identify future
                  customers with Mattermark.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="/img/profservices.jpeg" alt="" />
            <div className="overlay">
              <div className="caption">
                <h3>PROFESSIONAL SERVICES</h3>
                <p>
                  Research markets, understand competitive landscapes, and
                  deliver to clients quicker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
