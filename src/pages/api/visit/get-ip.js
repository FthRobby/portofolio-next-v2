export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { userIp } = req.body
    const {data, error} = await fetch('https://api.ipify.org?format=json', {
      method: 'GET'
    })
    if (error) {
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({
      status: 'success',
      data
    })

  } else {
    return res.status(405).json({
      message: 'Method Not Allowed'
    })
  }
}