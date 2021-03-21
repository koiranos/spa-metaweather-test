import React, { useState } from "react";
import WeatherModal from "./WeatherModal";
import axios from "axios";

const LocationItem = ({ title, lattLong, woeid }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);

  // perform a get request with axios
  const getWeatherData = async () => {
    const res = await axios.get(
      `https://cors-everywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`
    );

    setWeatherData(res.data.consolidated_weather);
  };

  return (
    <div
      onClick={() => {
        if (!modalVisibility) {
          setModalVisibility(true);
          setWeatherData(null);
          getWeatherData();
        }
      }}
      className="col-md-3 border"
      id="location-title"
    >
      <h3>
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-link-45deg"
          viewBox="0 0 26 26"
        >
          <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
        </svg>
      </h3>
      <h6>Latitude: {lattLong[0]}</h6>
      <h6>Londitude: {lattLong[1]}</h6>
      <WeatherModal
        isModalVisible={modalVisibility}
        isClosing={() => setModalVisibility(false)}
        title={title}
        weather={weatherData}
      />
    </div>
  );
};

export default LocationItem;
