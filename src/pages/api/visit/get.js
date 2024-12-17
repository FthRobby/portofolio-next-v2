// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { page, userAgent } = req.body;
//     const userIp =
//       req.headers["x-forwarded-for"] || req.connection.remoteAddress;

//     try {
//       const response = await fetch(
//         `https://ipinfo.io/${userIp}?token=${process.env.NEXT_PUBLIC_IPTOKEN}`
//       );

//       if (!response.ok) {
//         const errorMessage = await response.text(); 
//         throw new Error(
//           `Error fetching IP info: ${response.status} ${response.statusText} - ${errorMessage}`
//         );
//       }

//       const data = await response.json(); 

//       return res.status(200).json({
//         status: "success",
//         data
//       });
//     } catch (error) {
//       return res.status(500).json({
//         error: error.message,
//       });
//     }
//   } else {
//     return res.status(405).json({
//       message: "Method Not Allowed",
//     });
//   }
// }


import fetch from 'node-fetch'; // Import node-fetch v2
import supabase from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { page, userAgent } = req.body;
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    try {
      const response = await fetch(`https://ipinfo.io/${userIp}?token=${process.env.NEXT_PUBLIC_IPTOKEN}`);

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error fetching IP info: ${response.status} ${response.statusText} - ${errorMessage}`);
      }

      const dataIp = await response.json();

      // Save visit to Supabase
      const { data, error } = await supabase
        .from('page_visits')
        .insert([
          {
            page,
            user_ip: dataIp.ip, // Store just the IP or other relevant data from dataIp
            user_agent: userAgent,
            timestamp: new Date(),
          },
        ]);

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(200).json({ status: 'success', dataIp });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
