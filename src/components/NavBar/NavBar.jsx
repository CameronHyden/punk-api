import React from "react";
import CheckboxFilters from "../CheckboxFilters/CheckboxFilters";
import "./NavBar.scss";
import SearchBar from "../SearchBar/SearchBar";
import brewDog from "../../Assets/Images/brewDog.png";

const NavBar = ({
  handleAbvCheckbox,
  handleSearchInput,
  handleDate,
  handlePh,
}) => {
  return (
    <div className="navbar">
      <img className="brewDog-logo" src={brewDog} alt="" />
      <SearchBar handleSearchInput={handleSearchInput} />
      <CheckboxFilters
        handleAbvCheckbox={handleAbvCheckbox}
        handleDate={handleDate}
        handlePh={handlePh}
      />
    </div>
  );
};

export default NavBar;
