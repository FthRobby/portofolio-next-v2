// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { page, userAgent } = req.body
//     const userIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
//     const response = await fetch(`https://ipinfo.io/${userIp}?token=${process.env.NEXT_PUBLIC_IPTOKEN}`)

//     if (!response.ok) {
//       const errorMessage = await response.text(); // Get error details if response is not ok
//       throw new Error(`Error fetching IP info: ${response.status} ${response.statusText} - ${errorMessage}`);
//     }

//     const data = await response.json(); // Parse the JSON data from the response

//     return res.status(200).json({
//       status: 'success',
//       data,
//     });
//   } else {
//     return res.status(405).json({
//       message: 'Method Not Allowed'
//     })
//   }
// }

// import { createClient } from '@supabase/supabase-js';
import supabase from "@/lib/supabase";

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

      const { data: insertData, error } = await supabase
        .from("page_visits")
        .insert([
          {
            page,
            user_ip: data.ip,
            user_agent: userAgent,
            timestamp: new Date(),
          },
        ]);

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(200).json({
        status: "success",
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
