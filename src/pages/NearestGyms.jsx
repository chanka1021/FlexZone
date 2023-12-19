"use client";
import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
function NearestGyms() {
    const position  ={lat:53.54,lng:10}
  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <div style={{height:"100vh", width:"100%"}}>
        <Map zoom={9} center={position}>

        </Map>
      </div>
    </APIProvider>
  );
}

export default NearestGyms;
