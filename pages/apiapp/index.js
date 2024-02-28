import React, { useState, useEffect } from 'react'
import Layout from 'components/layout'
import Map from 'components/Map'

export default function Home () {
  const [satelliteData, setSatelliteData] = useState(null)

  useEffect(() => {
    async function fetchSatelliteData () {
      try {
        const response = await fetch('/api/satellite')
        if (!response.ok) {
          throw new Error('Failed to fetch satellite data')
        }
        const data = await response.json()
        setSatelliteData(data)
      } catch (error) {
        console.error('Error fetching satellite data:', error)
      }
    }

    fetchSatelliteData()
  }, [])

  return (
    <Layout title='Google Maps App'>
      {satelliteData && (
        <Map
          center={{ lat: satelliteData.latitude, lng: satelliteData.longitude }}
          zoom={13}
        />
      )}
    </Layout>
  )
}
