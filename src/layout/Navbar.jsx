import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function Navbar(props) {
  const [menuActive, setMenuActive] = useState({});
  const size = useWindowSize();

  console.log(size, "sss");
  const [toggleMenu, setToggleMenu] = useState(size.width > 768);
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (e.target.className === "dropitem") {
        // do nothing
      } else {
        setMenuActive({});
      }
    });
  }, []);

  useEffect(() => {
    setToggleMenu(size.width > 768);
  }, [size]);

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          {props.logo}
          {props.logowhite}
        </Link>
        <div
          href="#"
          className="toggle-button"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div
          className="items"
          style={{
            display: toggleMenu ? "block" : "none",
          }}
        >
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
