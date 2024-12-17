export default async function handler(req, res) {
  if (req.method === 'GET') {
    const userIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const {data, error} = await fetch('https://api.ipify.org?format=json')
    if (error) {
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({
      status: 'success', data: userIp })

  } else {
    return res.status(405).json({
      message: 'Method Not Allowed'
    })
  }
}