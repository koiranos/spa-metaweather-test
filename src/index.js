import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import React, { useState } from "react";
import ReactDom from "react-dom";
import LocationResults from "./LocationResults";
import SearchBar from "./SearchBar";

const App = () => {
  const [searchedTerm, setSearchedTerm] = useState("London");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mt-3 mb-5">Weather Forecast</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <SearchBar onChange={(term) => setSearchedTerm(term)} />
        </div>
      </div>
      <div className="row">
        <LocationResults term={searchedTerm} />
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
