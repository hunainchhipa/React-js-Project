import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="signup">
        <div className="signup-brand">
          <Link to="/">
            <img src="/img/logo.png" alt="" />
          </Link>
        </div>
        <div className="signup-form">
          <form action="">
            <div className="heading">
              <h2>Free Data Consultation</h2>
              <h4>Our Team Will Contact You</h4>
            </div>
            <div className="form-detail">
              <p>Name *</p>
              <input
                type="text"
                name="username"
                id="personal-info"
                placeholder="Michael Scott"
              />
              <div className="company-info">
                <div className="job-info">
                  <p>Job Title</p>
                  <input
                    type="text"
                    name="jobtitle"
                    id="personal-info"
                    placeholder="Regional Manager"
                  />
                </div>
                <div className="job-info">
                  <p>Company</p>
                  <input
                    type="text"
                    name="company"
                    id="personal-info"
                    placeholder="Dunder Miffin"
                  />
                </div>
              </div>
              <p>Phone Number</p>
              <input
                type="text"
                name="phone-number"
                id="personal-info"
                placeholder="+1 (550) 123-3455"
              />
              <p>Work Email Address *</p>
              <input
                type="email"
                name="email"
                id="personal-info"
                placeholder="michael.scott@dunder-miffin.com"
              />
              <p>How can we help you?</p>
              <textarea name="feedback" id="personal-info" cols="30" rows="2" />
            </div>
            <button type="button" className="submit-btn">
              Sign Up
            </button>
            <div className="submit-error">
              {/* Please fill out all required fields (marked with *) */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
