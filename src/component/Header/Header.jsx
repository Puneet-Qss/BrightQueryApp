import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import "./header.css";
import { useNavigate, useParams } from "react-router-dom";

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
      <div className={`home-container ${className}`}>
        <img className="logo" src={Logo} alt="logo" />
        <form className="form-inline" onSubmit={submitHandle}>
          <div className="input-group mb-2 mr-sm-2">
            <input
              type="text"
              className="form-control input input-lg"
              id="inlineFormInputGroupUsername2"
              placeholder="Search Company By Name"
              value={searchValue}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary mb-2">
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Header;
