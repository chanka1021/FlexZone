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
      const response = await axios.post("/getNearestGymsLoaction", {
        lat,
        lng,
      });
      if(response.status===200){
        setNearestGyms(response.data.gyms);
      console.log(nearestGyms)
      }else{
        alert("something wrong happends")
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
    const fetchGyms = async ()=>{
      if (location) {
        //await getNearestGyms(location.lat, location.lng);
        await getNearestGyms(35.6175794, -5.2727389);
    }
    }
    fetchGyms()
    
  }, [location]);
   

    
 
  // function getNearbyGyms(lat,lng) {
  //   // Replace process.env.YOUR_VARIABLE with your actual environment variable names
   
  //   const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  
  //   // Make sure all required environment variables are set
  //   if (!lat || !lng || !apiKey) {
  //     console.error('Missing required environment variables');
  //     return;
  //   }
  
  //   const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=gym&location=${lat}%2C${lng}&radius=15000&type=gym&key=${apiKey}`;
  
  //   axios.get(apiUrl)
  //     .then(response => {
  //       // Handle the response data here
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       // Handle errors here
  //       console.error('Error fetching nearby gyms:', error.message);
  //     });
  // }
  


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
