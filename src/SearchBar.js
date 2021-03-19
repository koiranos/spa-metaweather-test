import React, { useEffect, useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("London");

  useEffect(() => {
    props.onChange(searchTerm);
  });

  return (
    <div className="input-group mt-3 mb-5">
      <span className="input-group-text">Enter Location</span>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="search"
        placeholder={searchTerm}
        className="col-11 form-control"
        aria-label="Search"
        aria-describedby="addon-wrapping"
      />
    </div>
  );
};

export default SearchBar;
