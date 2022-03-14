import React from "react";

const NavBar = ({ handleSearchInput, searchTerm }) => {
  return (
    <div>
      <label htmlFor="searchBar">search for your favorite beer</label>
      <input
        className="searchBar"
        type="text"
        value={searchTerm}
        onInput={handleSearchInput}
      />
    </div>
  );
};

export default NavBar;
