// import supabase from "@/lib/supabase";
// import { getUserIp } from "@/lib/getUser";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { page, userAgent } = req.body;
//     const userIp = await getUserIp();
//     try {
//       const { data, error } = await supabase.from("page_visits").insert([
//         {
//           page,
//           user_ip: userIp,
//           user_agent: userAgent,
//           timestamp: new Date(),
//         },
//       ]);
//       if (error) {
//         return res.status(500).json({ error: error.message });
//       }
//       return res.status(200).json({ message: 'Visit tracked successfully' });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// pages/api/track-visit.js
import supabase from "@/lib/supabase";
// const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { page, userAgent } = req.body;

    try {
      // Get the user's IP address from the x-forwarded-for header
      const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

      // Insert the visit record into the database
      const { data, error } = await supabase
        .from('page_visits')
        .insert([
          {
            page,
            user_ip: userIp,
            user_agent: userAgent,
            timestamp: new Date(),
          },
        ]);

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(200).json({ message: 'Visit tracked successfully', data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
