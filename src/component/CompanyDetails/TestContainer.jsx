import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const TestContainer = ({ latitude, longitude }) => {
  // Check if latitude and longitude are valid numbers
  if (isNaN(latitude) || isNaN(longitude)) {
    return <div>Invalid latitude or longitude values</div>;
  }

  const position = [latitude, longitude];

  const mapStyle = {
    width: "100%",
    height: "400px",
    maxWidth: "100%",
  };

  return (
    <div style={{ border: "1px solid red" }}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={mapStyle}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default TestContainer;
