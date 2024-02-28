export default async function handler (req, res) {
  //const { num } = req.query
  const num = 37158
  const apiUrl = `https://mgpn.org/api/space/getobject.cgi?num=${num}`

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching satellite data:', error)
    res.status(500).json({ error: 'Failed to fetch satellite data' })
  }
}
