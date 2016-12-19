import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from "react-google-maps";

function PropertiesMap(props) {
    return (
        <GoogleMapLoader
            containerElement={<div style={{ height: "100%" }} />}
            googleMapElement={
                <GoogleMap defaultZoom={12} center={props.focusLocation}>
                    {props.markers.map((marker, index) => (
                        <Marker key={index} {...marker} onClick={() => props.onMarkerClick(marker)}>
                            {marker.showInfo && (
                                <InfoWindow>
                                    <div>{marker.address}</div>
                                </InfoWindow>
                            )}
                        </Marker>
                    ))}
                </GoogleMap>
            }
        />
    );
}

export default PropertiesMap;
