import React, { useState } from "react";
import "../../assets/css/sidebar.css";
import { MultiSelect } from "react-multi-select-component";
import IRS_SECTOR from "../../constants/irsSector";
import data from "../../constants/countryCodes";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(true);

  console.log("Sidebar Data", data.stateList);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const customItemRenderer = (option, { checked, onClick }) => (
    <label>
      <input type="checkbox" checked={checked} onChange={onClick} />
      {option.lable}
    </label>
  );

  const options = [
    //{ value: "", lable: "Location State" },
    { value: "Alabama", lable: "Alabama" },
    { value: "Alaska", lable: "Alaska" },
    { value: "American Samoa", lable: "American Samoa" },
    { value: "Arizona", lable: "Arizona" },
    { value: "Arkansas", lable: "Arkansas" },
    { value: "Baker Island", lable: "Baker Island" },
    { value: "California", lable: "California" },
    { value: "Colorado", lable: "Colorado" },
    { value: "Connecticut", lable: "Connecticut" },
    { value: "Delaware", lable: "Delaware" },
    { value: "District of Columbia", lable: "District of Columbia" },
    { value: "Florida", lable: "Florida" },
    { value: "Georgia", lable: "Georgia" },
    { value: "Guam", lable: "Guam" },
    { value: "Hawaii", lable: "Hawaii" },
    { value: "Howland Island", lable: "Howland Island" },
    { value: "Idaho", lable: "Idaho" },
    { value: "Illinois", lable: "Illinois" },
    { value: "Indiana", lable: "Indiana" },
    { value: "Iowa", lable: "Io" },
    { value: "Jarvis Island", lable: "Jarvis Island" },
    { value: "Johnston Atoll", lable: "Johnston Atoll" },
    { value: "Kansas", lable: "Kansas" },
    { value: "Kentucky", lable: "Kentucky" },
    { value: "Kingman Reef", lable: "Kingman Reef" },
    { value: "Louisiana", lable: "Louisiana" },
    { value: "Maine", lable: "Maine" },
    { value: "Maryland", lable: "Maryland" },
    { value: "Massachusetts", lable: "Massachusetts" },
    { value: "Michigan", lable: "Michigan" },
    { value: "Midway Atoll", lable: "Midway Atoll" },
    { value: "Minnesota", lable: "Minnesota" },
    { value: "Mississippi", lable: "Mississippi" },
    { value: "Missouri", lable: "Missouri" },
    { value: "Montana", lable: "Montana" },
    { value: "Navassa Island", lable: "Navassa Island" },
    { value: "Nebraska", lable: "Nebraska" },
    { value: "Nevada", lable: "Nevada" },
    { value: "New Hampshire", lable: "New Hampshire" },
    { value: "New Jersey", lable: "New Jersey" },
    { value: "New Mexico", lable: "New Mexico" },
    { value: "New York", lable: "New York" },
    { value: "North Carolina", lable: "North Carolina" },
    { value: "North Dakota", lable: "North Dakota" },
    { value: "Northern Mariana Islands", lable: "Northern Mariana Islands" },
    { value: "Ohio", lable: "Ohio" },
    { value: "Oklahoma", lable: "Oklahoma" },
    { value: "Oregon", lable: "Oregon" },
    { value: "Palmyra Atoll", lable: "Palmyra Atoll" },
    { value: "Pennsylvania", lable: "Pennsylvania" },
    { value: "Puerto Rico", lable: "Puerto Rico" },
    { value: "Rhode Island", lable: "Rhode Island" },
    { value: "South Carolina", lable: "South Carolina" },
    { value: "South Dakota", lable: "South Dakota" },
    { value: "Tennessee", lable: "Tennessee" },
    { value: "Texas", lable: "Texas" },
    {
      value: "United States Minor Outlying Islands",
      lable: "United States Minor Outlying Islands",
    },
    {
      value: "United States Virgin Islands",
      lable: "United States Virgin Islands",
    },
    { value: "Utah", lable: "Utah" },
    { value: "Vermont", lable: "Vermont" },
    { value: "Virginia", lable: "Virginia" },
    { value: "Wake Island", lable: "Wake Island" },
    { value: "Washington", lable: "Washington" },
    { value: "West Virginia", lable: "West Virginia" },
    { value: "Wisconsin", lable: "Wisconsin" },
    { value: "Wyoming", lable: "Wyoming" },
  ];
  return (
    <>
      <div className={`sidebar ${!menuOpen ? "collapsed" : ""}`}>
        <div className="menu">
          <div className="top">
            <div
              className="menu-item1"
              style={{ display: "flex", alignItems: "center" }}
              onClick={toggleMenu}
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
              <span>MENU</span>
              <i
                className="fa fa-arrow-left"
                style={{ marginLeft: "auto", cursor: "pointer" }}
                aria-hidden="true"
              ></i>
            </div>
            <div className="menu-item">
              <span>
                <i className="fa fa-floppy-o" aria-hidden="true"></i> Save
                search
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
              <div key={index} >
                <MultiSelect
                  options={options}
                  value={[]}
                  labelledBy={`options-${index}`}
                  ItemRenderer={customItemRenderer}
                />
               
              </div>
            ))}
  
            <div className="sidebar-footer">
              <button>Clear all filters</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
