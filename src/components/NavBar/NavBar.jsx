import React from "react";
import CheckboxFilters from "../CheckboxFilters/CheckboxFilters";
import "./NavBar.scss";
import SearchBar from "../SearchBar/SearchBar";
import brewDog from "../../Assets/Images/brewDog.png";

const NavBar = ({ handleAbvCheckbox, handleSearchInput, handleDate }) => {
  return (
    <div className="filters__container">
      <img className="brewDog-logo" src={brewDog} alt="" />
      <SearchBar handleSearchInput={handleSearchInput} />
      <CheckboxFilters
        handleAbvCheckbox={handleAbvCheckbox}
        handleDate={handleDate}
      />
    </div>
  );
};

export default NavBar;
