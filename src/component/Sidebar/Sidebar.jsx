import React, { useState } from "react";
import "../../assets/css/sidebar.css";
import IRS_SECTOR from '../../constants/irsSector'
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
            "Location State",
            "Company Type",
            "IRS Sector",
            "IRS Industry Sector",
            "Year Founded",
            "Revenue",
            "Headcourt",
            "Entity Status",
            "Public or Private",
            "For Profit or Nonprofit",
            "Time Series",
            "Parent Child Family Tree",
            "Jurisdiction State",
            "Growth Rate",
          ].map((option, index) => (
            <div key={index} className="select-container">
              <select
                name={`choose value ${index}`}
                id={`input ${index}`}
                className="form-control"
                required="required"
              >
                <option value="">{option}</option>
                {option === "Company Type" && (
                  <>
                    <option value="Employer">Employer</option>
                    <option value="Sole Proprietor">Sole Proprietor</option>
                  </>
                )}
                {option === "IRS Sector" && (
                  <>
                    {IRS_SECTOR.map((sector, sectorIndex) => (
                      <option key={sectorIndex} value={sector.value}>
                        <label>
                          <input type="checkbox" />
                          {sector.title}
                        </label>
                      </option>
                    ))}
                  </>
                )}
                {option === "Location State" && (
                  <>
                    {data.stateList.map((state, stateIndex) => (
                      <option key={stateIndex} value={state.value}>
                        <label>
                          <input type="checkbox" />
                          {state.title}
                        </label>
                      </option>
                    ))}
                  </>
                )}
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
