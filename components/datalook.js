import React, { useEffect, useState } from 'react'

const Map = () => {
  const [satellitePosition, setSatellitePosition] = useState(null)

  useEffect(() => {
    const fetchSatellitePosition = async () => {
      try {
        const num = '25544'
        const response = await fetch(
          `https://mgpn.org/api/space/getobject.cgi?num=${num}`,
          {
            mode: 'cors',
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (!response.ok) {
          throw new Error('Failed to fetch satellite position')
        }
        const data = await response.json()
        setSatellitePosition(data)
      } catch (error) {
        console.error('Error fetching satellite position:', error)
      }
    }

    fetchSatellitePosition()

    return () => {}
  }, [])

  return (
    <>
      {satellitePosition && (
        <div>
          <p>Latitude: {satellitePosition.latitude}</p>
          <p>Longitude: {satellitePosition.longitude}</p>
        </div>
      )}
    </>
  )
}

export default Map
