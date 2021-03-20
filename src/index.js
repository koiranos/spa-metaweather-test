import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import LocationResults from "./LocationResults";
import SearchBar from "./SearchBar";
import axios from "axios";

const App = () => {
  const [searchedTerm, setSearchedTerm] = useState("London");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(async () => {
    const res = await axios.get(
      "https://cors-everywhere.herokuapp.com/https://www.metaweather.com/api/location/search/",
      { params: { query: searchedTerm } }
    );
    setSearchResult(res.data);
  }, [searchedTerm]);

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
        <LocationResults term={searchedTerm} result={searchResult} />
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
