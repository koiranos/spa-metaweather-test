import React from "react";

const ModalBody = ({
  dayName,
  image,
  weatherState,
  minTemp,
  maxTemp,
  windDirection,
  windSpeed,
  humidity,
  visibility,
  pressure,
  prediction,
}) => {
  return (
    <div className="col col-sm-2 text-center weather-content">
      <h4>{dayName}</h4>
      <img width="50" className="mx-auto d-block" src={image}></img>
      <h6 className="mb-0">{weatherState}</h6>
      <p className="weather-info-title">Temperature</p>
      <p className="mb-0">
        <span className="min-max">Min: {minTemp}</span>

        <span className="min-max">Max: {maxTemp}</span>
      </p>
      <p className="weather-info-title">Wind</p>
      <img
        width="14"
        className={windDirection}
        src="https://www.metaweather.com/static/img/windarrow.svg"
      ></img>
      <span>{windSpeed}mph</span>
      <p className="weather-info-title">Humidity</p>
      <p className="mb-0">{humidity}%</p>
      <p className="weather-info-title">Visibility</p>
      <p>{visibility} miles</p>
      <p className="weather-info-title">Air Pressure</p>
      <p>{pressure}mb</p>
      <p className="text-info font-weight-bold prediction">
        Prediction Accuracy {prediction}%
      </p>
    </div>
  );
};

export default ModalBody;
