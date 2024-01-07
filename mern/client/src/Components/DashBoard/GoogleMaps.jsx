import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 24.8607,
    lng: 67.0011, // Coordinates for Karachi
};

const GoogleMaps = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCX-7V4TgH_eIriUK-9dD7MgJW-Yv5n_sM', // Replace with your Google Maps API key
    });

    if (loadError) {
        console.error('Error loading Google Maps API:', loadError);
        return <div>Error loading Google Maps. Please try again later.</div>;
    }

    const map = isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
        >
            {/* Marker for Karachi */}
            <Marker position={center} />

            {/* You can add more markers as needed */}
        </GoogleMap>
    ) : (
        <></>
    );

    return (
        <div className="row">
            <div className="col-12">
                <h4 className="title mt-3 mb-3 text-secondary">Google Maps</h4>
                {map}
            </div>
        </div>
    );
};

export default GoogleMaps;
