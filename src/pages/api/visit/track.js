import supabase from "@/lib/supabase";
import { getUserIp } from "@/lib/getUser";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { page, userAgent } = req.body;
    const userIp =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    try {
      const response = await fetch(
        `https://ipinfo.io/${userIp}?token${process.env.NEXT_PUBLIC_IPTOKEN}`
      );

      if (!response.ok) {
        throw new Error("failed fetch data");
      }      
      const dataIp = await response.json();

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

      return res.status(200).json({ message: "Track successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
