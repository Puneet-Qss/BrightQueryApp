import React, { useState } from "react";
import Logo from "../../assets/BQ-Logo-ccdbf4d6.svg";
import "../../assets/css/header.css";
import { useNavigate } from "react-router-dom";

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
    navigate("/login");
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <header className="header">
        <h1 className="logo">
          <a href="/">
            <img
              src="https://brightquery.com//wp-content/uploads/2020/07/BQ-Logo-1-1.svg"
              alt="BrightQuery"
              id="logo"
              width="200px"
              height="50px"
            />
          </a>
        </h1>
        <ul className="main-nav">
          <form onSubmit={submitHandle}>
            <input
              type="text"
              onChange={handleChange}
              value={searchValue}
              placeholder="Search Company By Name"
            />
            
            <button type="submit">Search</button>
            <button onClick={logoutHandler}>LOGOUT</button>
          </form>
        </ul>
      </header>
    </>
  );
}

export default Header;
