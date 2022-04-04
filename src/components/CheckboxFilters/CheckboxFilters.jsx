import React from "react";
import "./CheckboxFilters.scss";

const CheckboxFilters = ({ handleAbvCheckbox, handleDate, handlePh }) => {
  return (
    <div className="abvFilters">
      <label htmlFor="abvFilters__checkbox">^6.0% </label>
      <input
        className="abvFilters__checkbox"
        type="checkbox"
        onChange={handleAbvCheckbox}
      />
      <label htmlFor="abvFilters__checkbox">CLASSIC RANGE </label>
      <input
        className="abvFilters__checkbox"
        type="checkbox"
        onClick={handleDate}
      />
      <label htmlFor="abvFilters__checkbox">PH BELOW 4 </label>
      <input
        className="abvFilters__checkbox"
        type="checkbox"
        onClick={handlePh}
      />
    </div>
  );
};

export default CheckboxFilters;
