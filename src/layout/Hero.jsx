import React from "react";

export default function Hero() {
  return (
    <>
      <div className="content">
        <div className="hero">
          <img src="/img/opportunity.png" alt="" />
          <h3>Discover New Opportunities</h3>
          <p>
            The world’s business information in one place, filterable and
            sortable. Mattermark makes it faster and easier to source the best
            deals.
          </p>
        </div>
        <div className="hero">
          <h3>Track Success</h3>
          <p>
            Search company and investor profiles for deep insights into their
            growth and performance over time. Break the cycle of doing business
            without good data.
          </p>
          <img src="/img/success.png" alt="" />
        </div>
        <div className="hero">
          <img src="/img/informed.png" alt="" />
          <h3>Stay Informed</h3>
          <p>
            There are 300+ million private companies in the world. Saved
            Searches, Custom Lists, and News Notifications make it possible to
            keep tabs on the ones that matter most to you.
          </p>
        </div>
        <div className="hero">
          <h3>Automatically Enrich Leads In Salesforce</h3>
          <p>
            Get actionable insights by syncing over 80 informative fields to
            help warm leads and power conversations from first touch to deal
            close. Get all the relevant information from inside Salesforce, and
            apply triggers and actions to any lead, opportunity, or other
            object.
          </p>
          <img src="/img/valuesection-salesforce.png" alt="" />
        </div>
        <div className="hero">
          <img src="/img/valuesection-api.png" alt="" />
          <h3>Customize Your Experience With API</h3>
          <p>
            Our API provides data on millions of companies. In just minutes, you
            can integrate Mattermark with your products, systems, and business
            processes. Create your own models and scoring algorithms to fit your
            business.
          </p>
        </div>
        <div className="hero">
          <h3>Export Mattermark Data To Spreadsheets</h3>
          <p>
            Pull Mattermark data directly into Google Sheets or Microsoft Excel
            to add live updated company Growth Scores, location, funding,
            employee count, and more into your spreadsheets.
          </p>
          <img src="/img/spreadsheet.png" alt="" />
        </div>
      </div>
    </>
  );
}
