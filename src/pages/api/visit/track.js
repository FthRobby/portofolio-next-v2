import supabase from "@/lib/supabase";
import { getUserIp } from "@/lib/getUser";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { page, userAgent } = req.body;
    // Get the user's IP address from the x-forwarded-for header
    const userIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const response = await fetch(
      `https://ipinfo.io/${userIp}?token${process.env.NEXT_PUBLIC_IPTOKEN}`
    );
    const dataIp = await response.json();

    try {
      // Insert the visit record into the database
      const { data, error } = await supabase.from("page_visits").insert([
        {
          page,
          user_ip: dataIp,
          user_agent: userAgent,
          timestamp: new Date(),
        },
      ]);

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(200).json({ message: "Track successfully", dataIp });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
