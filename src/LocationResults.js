import React from "react";
import LocationItem from "./LocationItem";

const LocationResults = ({ term, result }) => {
  const getLocations = () => {
    // create location items dynamically
    const data = result.map((location, id) => {
      return (
        <LocationItem
          key={id}
          title={location.title}
          woeid={location.woeid}
          lattLong={location.latt_long.split(",")}
        />
      );
    });

    return data;
  };
  // inform user if locations are not availiable
  return result != null ? getLocations() : <p>Gathering Data Please wait..</p>;
};

export default LocationResults;
