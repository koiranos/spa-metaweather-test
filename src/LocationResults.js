import React from "react";
import LocationItem from "./LocationItem";

const LocationResults = ({ term, result }) => {
  const getLocations = () => {
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

  return result != undefined ? (
    getLocations()
  ) : (
    <p>Gathering Data Please wait..</p>
  );
};

export default LocationResults;
