import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [menuActive, setMenuActive] = useState({});

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (e.target.className === "dropitem") {
        // do nothing
      } else {
        setMenuActive({});
      }
    });
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src="img/logo.png" alt="" />
        </Link>
        <div className="items">
          <ul>
            <li>
              <div className="dropdown">
                <div
                  className="navitem"
                  onClick={() => {
                    setMenuActive({
                      ...menuActive,
                      solutions: !menuActive.solutions,
                      integrations: false,
                    });
                  }}
                >
                  SOLUTION <i className="fa-solid fa-angle-down"></i>
                </div>
                {menuActive["solutions"] && (
                  <div className="dropdown-content">
                    <div className="dropdown-item">
                      <Link to="/listbuilding" className="dropitem">
                        LIST BUILDING
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <Link className="dropitem">LEAD ENRICHMENT</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link className="dropitem">DEVELOPER TOOLS</Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li>
              <div className="dropdown">
                <div
                  className="navitem"
                  onClick={() => {
                    setMenuActive({
                      ...menuActive,
                      integrations: !menuActive.integrations,
                      solutions: false,
                    });
                  }}
                >
                  INTEGRATION <i className="fa-solid fa-angle-down"></i>
                </div>
                {menuActive["integrations"] && (
                  <div className="dropdown-content">
                    <div className="dropdown-item">
                      <Link className="dropitem">SALESFORCE</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link className="dropitem">MICROSOFT EXCEL</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link className="dropitem">GOOGLE SHEETS</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link className="dropitem">BROWSER EXTENSION</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link className="dropitem">IPHONE APP</Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link className="navitem">PRICE</Link>
            </li>
            <li>
              <Link className="navitem">LOGIN</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
