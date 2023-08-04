import React, { useState } from "react";
import Logo from "../../assets/BQ-Logo-ccdbf4d6.svg";
import "./header.css";
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
    <div className="home-container">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo" width={'50px'} height={'50px'} />
      </div>
      <form className="search-form" onSubmit={submitHandle}>
        <div className="input-group">
          <input
            type="text"
            className="form-control input input-lg"
            placeholder="Search Company By Name"
            value={searchValue}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control input input-lg"
            placeholder="Search Company By Name"
            value={searchValue}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Header;
