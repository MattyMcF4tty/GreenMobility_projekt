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

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap zoom={10} center={center} mapContainerStyle={{ height: "100vh", width: "100%" }}>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
