"use client";
import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import {NavLink} from "react-router-dom"
import axios from "axios";

 
function NearestGyms() {
  const [selectedMarker, setSelectedMarker] = useState(null);
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
      const response = await axios.post("/getNearestGymsLoaction", {
        lat,
        lng,
      });
      if (response.status === 200) {
        setNearestGyms(response.data.gyms);
        console.log(nearestGyms);
      } else {
        alert("something wrong happends");
      }
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
    const fetchGyms = async () => {
      if (location) {
        await getNearestGyms(location.lat, location.lng);
        //await getNearestGyms(35.6175794, -5.2727389);
      }
    };
    fetchGyms();
  }, [location]);

  const position = { lat: 53.54, lng: 10 };
  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <div style={{ height: "100vh", width: "100%" }}>
        {location && (
          (
            <Map zoom={14} center={location}>
              {nearestGyms && nearestGyms.length>0 && nearestGyms.map((gym) => (
               
                 <Marker
                  key={gym.place_id}
                  position={{
                    lat: gym.geometry.location.lat,
                    lng: gym.geometry.location.lng,
                  }}
                  title={gym.name}
                ><a href="/clubs"></a></Marker>
             
                
              ))}
            </Map>
          )
          // <Map zoom={12} center={location}>
          //   <Marker
          //     position={{
          //       lat: location.lat,
          //       lng:location.lng,
          //     }}
          //   />
          // </Map>
        )}
         
      </div>
    </APIProvider>
  );
}

export default NearestGyms;
