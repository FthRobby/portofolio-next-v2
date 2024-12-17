import supabase from "@/lib/supabase";
import { getUserIp } from "@/lib/getUser";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { page, userAgent } = req.body;
    const userIp = await getUserIp();
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
      return res.status(200).json({ message: 'Visit tracked successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
