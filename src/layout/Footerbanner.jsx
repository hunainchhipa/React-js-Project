import React from "react";
import { Link } from "react-router-dom";

export default function Footerbanner() {
  return (
    <>
      <div className="footerbanner">
        <div className="data-value">
          <h1>4 Million Companies 20 Million Key Contacts</h1>
          <p>Start contacting your target list today</p>
          <Link to="signup">
            <button className="btnstart">Start Free 14-Day Trial</button>
          </Link>
          <div className="signup-note">
            No commitment, no credit card required.
          </div>
        </div>
        <div className="data-valuelist">
          <h2>Right data. Right format. Right now.</h2>
          <ul>
            <li>Developer Tools (REST and GraphQL APIs)</li>
            <li>Web-based Data Browser (CSV and PDF)</li>
            <li>Spreadsheet Plugins (Excel and Sheets)</li>
            <li>Browser Extension (Google Chrome)</li>
            <li>Mobile (iPhone lookup app)</li>
            <li>CRM Integration (Salesforce)</li>
          </ul>
        </div>
      </div>
    </>
  );
}
