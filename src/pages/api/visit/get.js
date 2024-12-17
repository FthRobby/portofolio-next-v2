export default async function handler(req, res) {
  if (req.method === 'GET') {
    const userIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    
    const {dataGet, errorGet} = await fetch('https://api.ipify.org?format=json')
    
    const {infoGet, infoError} = await fetch(`https://ipinfo.io/${userIp}?token=${process.env.NEXT_PUBLIC_IPTOKEN}`)


    
    
    
    
    if (infoError) {
      return res.status(500).json({ error: infoError.message })
    }



    return res.status(200).json({ status: 'success', data: infoGet })

  } else {
    return res.status(405).json({
      message: 'Method Not Allowed'
    })
  }
}