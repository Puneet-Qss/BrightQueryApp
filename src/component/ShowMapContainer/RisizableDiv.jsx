import React from "react";
import TestContainer from "../CompanyDetails/MapContainer";

function RisizableDiv({ mapData }) {
  const { latitude, longitude } = mapData;

  return (
    <>
      <TestContainer latitude={latitude} longitude={longitude} />
    </>
  );
}

export default RisizableDiv;
