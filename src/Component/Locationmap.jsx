import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

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
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setPosition([lat, lng]);

        try {
          const nearby = await fetchNearbyPlaces(lat, lng);
          setPlaces(nearby);
        } catch (error) {
          console.log(error);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  if (!position) {
    return (
      <div className="w-full h-70 sm:h-87.5 md:h-112.5 lg:h-130 xl:h-150 flex items-center justify-center bg-gray-100 rounded-xl">
        <p className="text-gray-500 text-sm md:text-base animate-pulse">
          Fetching your location...
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full rounded-xl overflow-hidden shadow-lg ${className}`}>
      <div className="h-70 p-5 mb-20  sm:h-87.5 md:h-112.5 lg:h-130 xl:h-150 2xl:h-175">
        <MapContainer
          center={position}
          zoom={16}
          className="w-full h-full"
          scrollWheelZoom={false}
          dragging={false}
          zoomControl={true}
          doubleClickZoom={false}
          touchZoom={false}
          keyboard={false}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors &copy; CARTO"
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          <Marker position={position}>
            <Popup>You are here 📍</Popup>
          </Marker>

          {places.map((place) => (
            <Marker key={place.id} position={[place.lat, place.lng]}>
              <Popup>
                <strong>{place.name}</strong>
                <br />
                {place.type}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* <div className="bg-black text-white px-4 py-3 flex justify-between items-center text-xs sm:text-sm md:text-base">
        <span>Your Current Location</span>
        <span>{places.length} Nearby Places</span>
      </div> */}
    </div>
  );
};

export default LocationMap;
