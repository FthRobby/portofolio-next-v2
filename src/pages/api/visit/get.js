import supabase from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { page, userAgent } = req.body;
    const userIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;



    try {
      const {data, error} = await supabase
        .from("page_visits")
        .insert([
          {
            page,
            user_ip: userIp,
            user_agent: userAgent,
            timestamp: new Date()
          }
        ])
      if (error) {
        throw new Error(error.message);
      }

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

