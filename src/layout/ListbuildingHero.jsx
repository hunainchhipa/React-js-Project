import React from "react";

export default function ListbuildingHero() {
  return (
    <>
      <div className="content">
        <div className="hero">
          <h3>Your Ideal Customer Intelligence</h3>
          <ul>
            <li>
              <span>Advanced Search:</span> Mattermark offers an extensive list
              of data points for millions of private companies across many
              industries. Mattermark allows customers to filter their relevant
              fields and pinpoint their ideal customer.
            </li>
            <li>
              <span>Territory Planning:</span> Customers are able to easily
              define, watch, and organize their opportunities, with fields such
              as Revenue Ranges, and Zip Codes.
            </li>
            <li>
              <span>Data Coverage:</span> Mattermark's data is constantly
              updated and thousands of new companies are being added monthly.
            </li>
          </ul>
          <img
            src="/img/discovery-advanced-filters.png"
            alt=""
            className="listbuilding-img"
          />
        </div>
        <div className="hero">
          <img
            src="/img/discovery-scores-graph.png"
            alt=""
            className="listbuilding-img"
          />
          <h3>Improved Lead Conversion</h3>
          <ul>
            <li>
              <span>Contact Information:</span> Customers can search by Job
              Title or Name to pinpoint their Decision Maker in a company.
            </li>
            <li>
              <span>Growth and Mindshare Scores:</span> Mattermark's unique
              Growth and Mindshare scores help to prioritize the companies that
              are rapidly scaling or primed for new round of funding.
            </li>
            <li>
              <span>News:</span> Follow companies that are current customers,
              ideal prospects, or even competitors to stay up-to-date to all
              their latest news.
            </li>
          </ul>
        </div>
        <div className="hero">
          <h3>Automatic Prospecting Tools</h3>
          <ul>
            <li>
              <span>Saved Searches:</span> Save time with future prospecting by
              saving searches of ideal opportunities filtered by our 80+ data
              fields.
            </li>
            <li>
              <span>Automatic Updates:</span> All of our data fields and
              companies are automatically update when there is a new data event.
            </li>
            <li>
              <span>New Data:</span> Mattermark adds new companies every month
              and new data daily. We do the manual work so sales teams can focus
              on more meaningful conversations and less on operational stopgaps.
            </li>
          </ul>
          <img
            src="/img/discovery-saved-searches.png"
            alt=""
            className="listbuilding-img"
          />
        </div>
      </div>
    </>
  );
}
