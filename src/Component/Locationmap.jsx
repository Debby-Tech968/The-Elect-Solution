import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

/* Fix Leaflet default icons */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

/* 📍 Fetch nearby places */
const fetchNearbyPlaces = async (lat, lng) => {
  const query = `
    [out:json];
    (
      node["amenity"](around:1000,${lat},${lng});
      node["shop"](around:1000,${lat},${lng});
      node["office"](around:1000,${lat},${lng});
    );
    out;
  `;

  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: query,
  });

  const data = await res.json();

  return data.elements.map((el) => ({
    id: el.id,
    name: el.tags?.name || "Unknown Place",
    lat: el.lat,
    lng: el.lon,
    type: el.tags?.amenity || el.tags?.shop || el.tags?.office,
  }));
};

const LocationMap = ({ className = "" }) => {
  const [position, setPosition] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setPosition([lat, lng]);

        try {
          const nearby = await fetchNearbyPlaces(lat, lng);
          setPlaces(nearby);
        } catch (err) {
          console.log("Failed to fetch places:", err);
        }
      },
      (err) => console.log(err),
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  /* Loading state */
  if (!position) {
    return (
      <div className="w-full h-75 sm:h-100 md:h-125 flex items-center justify-center">
        <p className="text-gray-400 animate-pulse text-sm sm:text-base">
          Fetching your location...
        </p>
      </div>
    );
  }

  return (
    <div
      className={`w-full h-80 sm:h-105 md:h-130 lg:h-150 rounded-xl overflow-hidden ${className}`}
    >
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        {/* 🌑 Dark map theme */}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* 📍 User location */}
        <Marker position={position}>
          <Popup>You are here 📍</Popup>
        </Marker>

        {/* 📍 Nearby places */}
        {places.map((place) => (
          <Marker key={place.id} position={[place.lat, place.lng]}>
            <Popup>
              <b>{place.name}</b>
              <br />
              Type: {place.type}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Info bar */}
      <div className="p-2 sm:p-3 bg-black text-white text-xs sm:text-sm">
        Showing {places.length} nearby places
      </div>
    </div>
  );
};

export default LocationMap;
