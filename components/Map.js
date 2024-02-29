// components/Map.js

import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '86vh'
}

const center = {
  lat: 34.7293466708865,
  lng: 135.49939605607292
}

const zoom = 13

const Map = ({ satelliteData }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={
          satelliteData
            ? { lat: satelliteData.latitude, lng: satelliteData.longitude }
            : center
        }
        zoom={zoom}
      >
        {satelliteData && (
          <Marker
            position={{
              lat: satelliteData.latitude,
              lng: satelliteData.longitude
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
