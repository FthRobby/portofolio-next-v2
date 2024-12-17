export default async function handler(req, res) {
  if (req.method === 'GET') {
    const userIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const response = await fetch(`https://ipinfo.io/${userIp}?token=${process.env.NEXT_PUBLIC_IPTOKEN}`)

    // Check if the response is successful
    if (!response.ok) {
      const errorMessage = await response.text(); // Get error details if response is not ok
      throw new Error(`Error fetching IP info: ${response.status} ${response.statusText} - ${errorMessage}`);
    }

    const data = await response.json(); // Parse the JSON data from the response

    return res.status(200).json({
      status: 'success',
      data, // Send the data received from ipinfo.io
    });
  } else {
    return res.status(405).json({
      message: 'Method Not Allowed'
    })
  }
}