export default async function handler(req, res) {
  if (req.method === "POST") {
    const { page, userAgent } = req.body;
    const userIp =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    try {
      const response = await fetch(
        `https://ipinfo.io/${userIp}?token=${process.env.NEXT_PUBLIC_IPTOKEN}`
      );

      if (!response.ok) {
        const errorMessage = await response.text(); 
        throw new Error(
          `Error fetching IP info: ${response.status} ${response.statusText} - ${errorMessage}`
        );
      }

      const data = await response.json(); 

      return res.status(200).json({
        status: "success",
        data
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  } else {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }
}
