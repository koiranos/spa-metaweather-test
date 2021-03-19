import React from "react";
import Modal from "react-bootstrap/Modal";

const WeatherModal = ({ isModalVisible, isClosing, title }) => {
  return (
    <Modal
      size="lg"
      show={isModalVisible}
      onHide={() => isClosing()}
      aria-labelledby="weather-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="weather-modal">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal>
  );
};

export default WeatherModal;
