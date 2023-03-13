import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const [center, setCenter] = useState({ lat: 44, lng: -80 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
        },
        () => {
          console.error("Error getting user location");
        }
      );
    }
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDthzOmhNb5hdyDm7LtsrRozKGFZ7vqgic",
  });

  if (!isLoaded) return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <img src="GreenLogo.png" alt="Green Logo" className="w-[10%]"/>
      <p>Loading Google maps data...</p>
    </div>
  )

  return (
    <GoogleMap zoom={10} center={center} mapContainerStyle={{ height: "100%", width: "100%" }} options={{ streetViewControl: false, zoomControl: true }} >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
