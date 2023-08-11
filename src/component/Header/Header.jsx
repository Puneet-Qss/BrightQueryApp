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
  
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isSignedIn");
    localStorage.removeItem("linkedin_oauth2_state")
      swal("Success!", "Logout Successfully!", "success");
      navigate("/");
    

    navigate("/login");
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
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
            <input
              type="text"
              onChange={handleChange}
              value={searchValue}
              placeholder="Search Company By Name"
            />
            
            <button className="submit-btn" type="submit">Search</button>
            <span className="logout" onClick={logoutHandler}>Logout</span>
          </form>
        </ul>

      </div>
      </header>
    </>
  );
}

export default Header;
