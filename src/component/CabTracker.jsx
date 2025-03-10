import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import useWebSocket from "../hooks/useWebSocket";

const mapContainerStyle = { width: "100%", height: "100vh" };
const center = { lat: 28.6, lng: 77.2 }; // Default center (Delhi)

const CabTracker = () => {
    const cabs = useWebSocket("ws://localhost:8080");
    const [selectedCab, setSelectedCab] = useState(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_API_KEY, // Replace with your API key
    });

    if (loadError) return <p>Error loading maps</p>;
    if (!isLoaded) return <p>Loading Maps...</p>;
    return (
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center}>
            {cabs.map((cab) => (
                <Marker
                    key={cab.id}
                    position={{ lat: cab.location.latitude, lng: cab.location.longitude }}
                    icon={{
                        url: cab.passenger.isWoman
                            ? "http://maps.google.com/mapfiles/ms/icons/pink-dot.png" // Highlight women passengers
                            : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                        scaledSize: new window.google.maps.Size(40, 40),
                    }}
                    onClick={() => setSelectedCab(cab)}
                />
            ))}

            {selectedCab && (
                <InfoWindow
                    position={{ lat: selectedCab.location.latitude, lng: selectedCab.location.longitude }}
                    onCloseClick={() => setSelectedCab(null)}
                >
                    <div>
                        <h2>🚖 {selectedCab.driver}</h2>
                        <p>Passenger: {selectedCab.passenger.name}</p>
                        <p>ETA: {selectedCab.eta}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
};

export default CabTracker;

