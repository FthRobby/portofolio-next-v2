import supabase from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { page, userAgent } = req.body;
    const userIp =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    try {
      // Perform the upsert operation
      const { data, error } = await supabase
        .from("page_visits")
        .upsert(
          [
            {
              page,
              user_ip: userIp,
              user_agent: userAgent,
              total_visit: 1,
              timestamp: new Date(),
            },
          ],
          { onConflict: ["user_ip"] }
        )
        .select();
      if (error) {
        throw new Error(error.message);
      }
      const existingRecord = data.find((row) => row.user_ip === userIp);
      if (existingRecord) {
        const { error: updateError } = await supabase
          .from("page_visits")
          .update({ total_visit: existingRecord.total_visit + 1 })
          .eq("user_ip", userIp);

        if (updateError) {
          throw new Error(updateError.message);
        }
      }

      // Respond with success
      return res.status(200).json({
        status: "success",
        data,
      });
    } catch (err) {
      // Catch and handle errors
      console.error("Error:", err.message);
      return res.status(500).json({
        status: "error",
        message: err.message,
      });
    }
  } else {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }
}
