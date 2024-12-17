import supabase from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { page, dataIp, userAgent } = req.body;

    try {
      const { data, error } = await supabase
        .from("page_visits")
        .insert([
          {
            page,
            user_ip: dataIp,
            user_agent: userAgent,
            timestamp: new Date(),
          },
        ]);

      if (error) {
        throw new Error(error.message);
      }

      return res.status(200).json({
        status: "success",
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }
}
