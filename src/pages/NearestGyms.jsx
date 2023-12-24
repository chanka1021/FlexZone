"use client";
import React, { useEffect, useState } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import axios from "axios";
function NearestGyms() {
  const [location, setLocation] = useState(null);
  const [nearestGyms, setNearestGyms] = useState([]);
 
  const getLocation = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      // Successfully obtained the current location
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    } catch (err) {
      // Handle error
      alert(err.message);
    }
  };

  const getNearestGyms = async (lat, lng) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/getNearestGymsLoaction", {
        lat,
        lng,
      });

      setNearestGyms(response.data.gyms);
      console.log(nearestGyms)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchLocation = async () => {
      await getLocation();
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchGyms = async ()=>{
      if (location) {
      await getNearestGyms(location.lat, location.lng);
    }
    }
    fetchGyms()
    
  }, [location]);
   

    
 
      


  const position = { lat: 53.54, lng: 10 };
  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <div style={{ height: "100vh", width: "100%" }}>
        {location ? (
          <Map zoom={12} center={location}></Map>
        ) : (
          <Map zoom={9} center={position}></Map>
        )}
      </div>
    </APIProvider>
  );
}

export default NearestGyms;
