import React, { useState } from "react";
import dropDown from "../../assets/images/drop-down-arrow.png";
import "../../assets/css/sidebar.css";

import data from "../../constants/countryCodes";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(true);
  console.log("Sidebar Data", data.stateList);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`sidebar ${!menuOpen ? "collapsed" : ""}`}>
      <div className="menu">
        <div className="top">
          <div
            className="menu-item1"
            style={{ display: "flex", alignItems: "center" }}
            onClick={toggleMenu}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>{" "}
            <span>MENU</span>
            <i
              className="fa fa-arrow-left"
              style={{ marginLeft: "auto", cursor: "pointer" }}
              aria-hidden="true"
            ></i>
          </div>
          <div className="menu-item">
            <span>
              <i className="fa fa-floppy-o" aria-hidden="true"></i> Save search
            </span>
          </div>
        </div>

        <div className="dropdown">
          {[
            // ... other options ...
            "Location State",
            // ... other options ...
          ].map((option, index) => (
            <div key={index} className="select-container">
              <select
                name={`choose value ${index}`}
                id={`input ${index}`}
                className="form-control"
                required="required"
              >
                <option value="">{option}</option>
                {data.stateList.map((state, stateIndex) => (
                  <option key={stateIndex} value={state.value}>
                    <label>
                      <input type="checkbox" />
                      {state.title}
                    </label>
                  </option>
                ))}
              </select>
              <div className="dropdown-icon">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="dropdown-heading-dropdown-arrow gray"
                >
                  <path d="M6 9L12 15 18 9"></path>
                </svg>
              </div>
            </div>
          ))}

          <div className="sidebar-footer">
            <button>Clear all filters</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
