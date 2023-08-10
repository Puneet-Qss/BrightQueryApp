import React, { useState } from "react";
import dropDown from "../../assets/drop-down-arrow.png";
import menu from "../../assets/menu.png";
import arrowLeft from "../../assets/arrow-left.png";
import list from "../../assets/list.png";
import saveSearch from "../../assets/save-search.png";
import "../../assets/css/sidebar.css";


function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`sidebar ${!menuOpen ? "collapsed" : ""}`}>
      <div className="menu">
      <div
            className="menu-item"
            style={{ marginTop: "5px" }}
            onClick={toggleMenu}
          >
            <img src={menu} height="15px" width="15px" alt="menu" />
            <span>MENU</span>
            <img
              className="menu-icon"
              src={arrowLeft}
              width="20px"
              height="18px"
              alt=""
            />
          </div>
          <div className="menu-item">
            <img src={list} height="15px" width="15px" alt="lis" />
            <span>List</span>
          </div>
          <div className="menu-item">
            <img src={saveSearch} height="15px" width="15px" alt="" />
            <span>Aggregate</span>
          </div>
          <div className="menu-item">
            <img src={saveSearch} height="15px" width="15px" alt="" />
            <span>Save search</span>
          </div>
      <div className="dropdown">
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
            </div>
            <div class="sidebar-footer">
              <button>Clear all filters</button>
            </div>
      </div>
    
   
    </div>
  );
}

export default Sidebar;
