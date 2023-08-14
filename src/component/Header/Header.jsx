import React, { useState } from "react";
import "../../assets/css/header.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Header({ classNameName }) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      navigate(`/search/${searchValue}`);
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isSignedIn");
    localStorage.removeItem("linkedin_oauth2_state");
    swal("Success!", "Logout Successfully!", "success");
    navigate("/");
  };

  return (
    <>
      <header className="header container">
        <div className="logo">
          <img
            src="https://search2.brightquery.com/assets/BQ-Logo-ccdbf4d6.svg"
            alt="BrightQuery"
            id="logo"
            width="200px"
            height="50px"
          />
        </div>
        <div className="form-container">
          <ul className="main-nav">
            <form onSubmit={submitHandle}>
              <div className="search-input">
                <input
                  type="text"
                  onChange={handleChange}
                  value={searchValue}
                  placeholder="Search Company By Name"
                />
                {searchValue && (
                 <i class="fa fa-times" aria-hidden="true" onClick={handleClear}></i>
                )}
              </div>
              <select class="form-group form-select" placeholder="Select your Query"><option value="">All</option><option value="bq_organization_name">Name</option><option value="bq_organization_ein">EIN</option><option value="bq_organization_website">Website</option><option value="bq_organization_address1_line_1">Address</option><option value="bq_organization_ticker">Ticker</option><option value="bq_organization_address1_state_name">State Name</option><option value="bq_organization_year_founded">Year Founded</option><option value="bq_organization_industry_name">Industry Name</option><option value="bq_organization_cong_district_name">Congressional District Name</option><option value="bq_organization_cong_district_id">Congressional District ID</option><option value="bq_organization_cong_district_cd">Congressional District CD</option><option value="bq_organization_cong_district_representative_name_from_listing">District representative name</option></select>
              <button className="btn btn-primary submit-btn d-flex justify-content-start w-100 submit-btn" type="submit">
                Search &nbsp;
                <i
                  className="fa fa-search"
                  aria-hidden="true"
                  style={{ marginTop: "5px" }}
                ></i>
              </button>
              <button className="clear-btn" onClick={handleClear}>
                Clear
              </button>
              <span className="logout" onClick={logoutHandler}>
                Logout
              </span>
            </form>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
