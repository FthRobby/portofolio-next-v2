import supabase from "@/lib/supabase";
import { getUserIp } from "@/lib/getUser";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { page, userIp, userAgent } = req.body;
    try {
      const { data, error } = await supabase.from("page_visits").insert([
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

      return res.status(200).json({ message: "Track successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
