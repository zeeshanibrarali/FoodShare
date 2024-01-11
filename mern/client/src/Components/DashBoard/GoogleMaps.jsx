import React, { useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 24.8607,
    lng: 67.0011, // Coordinates for Karachi
};

const GoogleMaps = ({ highlightedLocation }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCX-7V4TgH_eIriUK-9dD7MgJW-Yv5n_sM',
    });

    const mapRef = useRef(null);
    const handleMapLoad = (map) => {
        mapRef.current = map;
    };

    const mapComponent = isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={handleMapLoad}
        >
            <Marker position={center} />

            {highlightedLocation && (
                <Marker
                    position={highlightedLocation}
                    draggable={false}
                />
            )}
        </GoogleMap>
    ) : (
        <></>
    );

    return (
        <div className="row">
            <div className="col-12">
                <h4 className="title mt-3 mb-3 text-secondary">Google Maps</h4>
                {mapComponent}
            </div>
        </div>
    );
};

export default GoogleMaps;
