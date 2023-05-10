import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="mattermark-address">
            <img src="/img/logo-white.png" alt="" />
            <ul>
              <li>Mattermark, Inc.</li>
              <li>61 Moraga Way Suite 6</li>
              <li>Orinda, CA 94563</li>
            </ul>
          </div>
          <div className="footerItems">
            <div className="items">
              <h4>SOLUTIONS</h4>
              <ul>
                <li>Prospect Discovery</li>
                <li>Lead Enrichment</li>
                <li>Developer API</li>
              </ul>
            </div>
            <div className="items">
              <h4>INTEGRATION</h4>
              <ul>
                <li>Salesforce</li>
                <li>MS Excel</li>
                <li>Google Sheets</li>
                <li>iOS App</li>
                <li>Chrome Extension</li>
              </ul>
            </div>
            <div className="items">
              <h4>COMPANY</h4>
              <ul>
                <li>Lists</li>
                <li>Newsletters</li>
                <li>Webinars</li>
              </ul>
              <a
                href="https://twitter.com/mattermark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/mattermark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/mattermark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </div>
            <div className="items">
              <h4>SUPPORT</h4>
              <ul>
                <li>Help Center</li>
                <li>Email Us</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
