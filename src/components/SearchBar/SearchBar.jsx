import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ handleSearchInput }) => {
  return (
    <div className="searchBar">
      <label htmlFor="searchBar">Search for your favorite beer</label>
      <input
        className="searchBar__input"
        name="searchBar"
        type="text"
        onInput={handleSearchInput}
      />
    </div>
  );
};

export default SearchBar;
