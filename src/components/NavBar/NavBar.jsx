import React from "react";
import CheckboxFilters from "../CheckboxFilters/CheckboxFilters";
import "./NavBar.scss";

const NavBar = ({ handleAbvCheckbox, handleSearchInput, handleDate }) => {
  return (
    <div className="filters">
      <label htmlFor="searchBar">search for your favorite beer</label>
      <input className="searchBar" type="text" onInput={handleSearchInput} />
      <CheckboxFilters
        handleAbvCheckbox={handleAbvCheckbox}
        handleDate={handleDate}
      />
    </div>
  );
};

export default NavBar;
