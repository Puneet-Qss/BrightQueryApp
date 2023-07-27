import React from "react";
import TestContainer from "../CompanyDetails/TestContainer";

function RisizableDiv({ mapData }) {
  const { latitude, longitude } = mapData;

  return (
    <>
      <TestContainer latitude={latitude} longitude={longitude} />
    </>
  );
}

export default RisizableDiv;
