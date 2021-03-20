import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "./ModalBody";

const WeatherModal = ({ isModalVisible, isClosing, title, weather }) => {
  const getDate = (date) => {
    const tempDate = new Date(date);
    const days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    return `${days[tempDate.getDay()]} ${tempDate.getDate()}`;
  };

  const getModalContent = () => {
    const weatherData = weather.map((day) => {
      return (
        <ModalBody
          key={day.id}
          dayName={getDate(day.applicable_date)}
          image={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`}
          weatherState={day.weather_state_name}
          minTemp={`${day.min_temp.toFixed(2)} \u00b0C\n`}
          maxTemp={`${day.max_temp.toFixed(2)} \u00b0C`}
          windDirection={`mr-1 ${day.wind_direction_compass.toLowerCase()}`}
          windSpeed={day.wind_speed.toFixed(1)}
          humidity={day.humidity}
          visibility={day.visibility.toFixed(1)}
          pressure={day.air_pressure}
          prediction={day.predictability}
        />
      );
    });

    return weatherData;
  };

  return (
    <Modal
      size="xl"
      show={isModalVisible}
      onHide={() => isClosing()}
      aria-labelledby="weather-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="weather-modal">
          {title} <span className="modal-subtitle">5 Day Forecast</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {weather == null ? (
          <p>Loading Data</p>
        ) : (
          <div className="row">{getModalContent()}</div>
        )}
        {/* {weather != null ? (
          <div className="row">{getModalContent()}</div>
        ) : (
          "Gathering Weather Information..."
        )} */}
      </Modal.Body>
    </Modal>
  );
};

export default WeatherModal;
