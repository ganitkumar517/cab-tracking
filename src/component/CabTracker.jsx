"use client";
import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import useWebSocket from "../hooks/useWebSocket";
import { Drawer, Typography, Box, Avatar } from "@mui/material";
import { Phone, DirectionsCar, Person } from "@mui/icons-material";
import FourteenMpIcon from '@mui/icons-material/FourteenMp';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import FemaleIcon from '@mui/icons-material/Female';

const mapContainerStyle = { width: "100%", height: "100vh" };
const center = { lat: 28.6, lng: 77.2 }; // Default center (Delhi)

const CabTracker = () => {
    const cabs = useWebSocket("ws://localhost:8080");
    const [selectedCab, setSelectedCab] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [directions, setDirections] = useState(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_API_KEY, // Replace with your API key
    });

    if (loadError) return <p>Error loading maps</p>;
    if (!isLoaded) return <p>Loading Maps...</p>;

    return (
        <>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center}>
                {cabs.map((cab) => (
                    <Marker
                        key={cab.id}
                        position={{ lat: cab.location.latitude, lng: cab.location.longitude }}
                        icon={{
                            url: cab.passenger.gender === 'female'
                                ? "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
                                : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                            scaledSize: new window.google.maps.Size(40, 40),
                        }}
                        animation={window.google.maps.Animation.DROP} // Smooth movement effect
                        onClick={() => {
                            setSelectedCab(cab);
                            setIsDrawerOpen(true);
                            // Center the map on the selected cab's destination
                            map.panTo({ lat: cab.destination.latitude, lng: cab.destination.longitude });
                        }}
                    />
                ))}
            </GoogleMap>

            <Drawer
                anchor="bottom"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <Box sx={{ p: 3 }}>
                    <div className="w-full flex justify-end">
                        <button className="underline hover:text-blue-700" onClick={() => setIsDrawerOpen(false)}>Close</button>
                    </div>
                    {selectedCab && (
                        <div className="px-10 pt-6 flex flex-col gap-10">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-bold  text-2xl">Driver Details:-</h2>
                                    <div className="flex items-center gap-4">
                                        <Avatar
                                            src={selectedCab.driver.picture}
                                            alt={selectedCab.driver.name}
                                            sx={{ width: 60, height: 60, mr: 2 }}
                                        />
                                        <p className="font-bold text-2xl">{selectedCab.driver.name}</p>
                                    </div>
                                    <div className="flex">
                                        <Phone sx={{ mr: 1 }} />
                                        <p>
                                            <strong>Phone:</strong> {selectedCab.driver.phoneNumber}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <FourteenMpIcon sx={{ mr: 1 }} />
                                        <p>
                                            <strong>Cab Number:</strong> {selectedCab.cab.number}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <DirectionsCar sx={{ mr: 1 }} />
                                        <p>
                                            <strong>Model:</strong> {selectedCab.cab.model}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <h2 className="font-bold text-2xl">Passenger Details:-</h2>
                                    <div className="flex">
                                        <Person sx={{ mr: 1 }} />
                                        <p>
                                            <strong>Name:</strong> {selectedCab.passenger.name}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <Phone sx={{ mr: 1 }} />
                                        <p>
                                            <strong>Phone:</strong> {selectedCab.passenger.phoneNumber}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <FemaleIcon sx={{ mr: 1 }} />
                                        <p>
                                            <strong>Gender:</strong>{" "}
                                            {selectedCab.passenger.gender}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="font-bold  text-2xl">
                                    Ride Details:-
                                </h2>
                                <div className="flex justify-around gap-2">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex">
                                            <MyLocationIcon sx={{ mr: 1 }} />
                                            <p>
                                                <strong>From:</strong> {selectedCab.route.from}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <AccessTimeIcon sx={{ mr: 1 }} />
                                            <Typography variant="body1">
                                                <strong>ETA:</strong> {selectedCab.eta}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex">
                                            <LocationOnIcon sx={{ mr: 1 }} />
                                            <p>
                                                <strong>To:</strong> {selectedCab.route.to}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <PriceChangeIcon sx={{ mr: 1 }} />
                                            <p>
                                                <strong>Amount:</strong> ₹{selectedCab.amount}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Box>
            </Drawer >
        </>
    );
};

export default CabTracker;