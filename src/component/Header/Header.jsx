import React, { useState } from "react";
import Logo from "../../assets/BQ-Logo-ccdbf4d6.svg";
// import "./header.css";
import "../../assets/css/header.css";
import { useNavigate } from "react-router-dom";

function Header({ className }) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      navigate(`/search/${searchValue}`);
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <header class="header">
        <h1 class="logo">
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
        <ul class="main-nav">
          <form onSubmit={submitHandle}>
            <input
              type="text"
              onChange={handleChange}
              value={searchValue}
              placeholder="Search Company By Name"
            />
            <input
              type="text"
              onChange={handleChange}
              value={searchValue}
              placeholder="Enter your fields"
            />
            <button type="submit">Search</button>
          </form>
        </ul>
      </header>
    </>
  );
}

export default Header;
