import React, { useState } from "react";
import dropDown from "../../assets/drop-down-arrow.png";
import menu from "../../assets/menu.png";
import arrowLeft from "../../assets/arrow-left.png";
import list from "../../assets/list.png";
import saveSearch from "../../assets/save-search.png";
import "../../assets/css/sidebar.css";

import data from "../../Sidebar-Data/countryCodes";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`sidebar ${!menuOpen ? "collapsed" : ""}`}>
      <div className="menu">

  <div className="top" >
          <div className="menu-item1 "style={{display:"flex", alignItems:"center"}}onClick={toggleMenu}>
             <span>MENU</span>
             <i class="fa fa-arrow-left" style={{marginLeft:"auto", cursor:"pointer"}} aria-hidden="true"></i>
          </div> 
        <div className="menu-item ">
          <img src={saveSearch} height="15px" width="15px" alt="" />
          <span>Save search</span>
        </div>
  </div>
 



   
        <div className="dropdown" >
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">Data Source </option>
            <img
              src={dropDown}
              height="17px"
              width="20px"
              alt=""
              style={{ marginLeft: "20px" }}
            />
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>

          {
          data.stateList.map((val) => {
            console.log("val", val);
            return null;
          })
          }
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">Location view type</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">Entity Type</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">IRS Sector</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">IRS Industry Sector</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">Year Founded</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">Revenue</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">Headcourt</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">Entity Status</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>

          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">Public or Private</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">For Profit or Nonprofit</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">Time Series</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">Parent Child Family Tree</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>

          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">Jusrisdiction State</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>
          <select
            name="choose value"
            id="input"
            className="form-control"
            required="required"
          >
            <option value="">Growth Rate</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
            <option value="">choose 1</option>
          </select>
        <div class="sidebar-footer">
          <button>Clear all filters</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
