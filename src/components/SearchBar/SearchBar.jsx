import React from "react";
import "./SearchBar.scss";
import useWindowSize from "../../Hooks/useWindowSize.js";

const SearchBar = ({ handleSearchInput }) => {
  const windowIsTablet = useWindowSize(768);
  return (
    <div className="searchBar">
      <label htmlFor="searchBar">
        Search {windowIsTablet && "for your favorite beer"}
      </label>
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
