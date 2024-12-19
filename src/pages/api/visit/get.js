import supabase from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { page, userAgent } = req.body;
    const userIp =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    try {
      const { data: existingRecord, error: selectError } = await supabase
        .from("page_visits")
        .select()
        .eq("user_ip", userIp);

      if (selectError) {
        throw new Error(selectError.message);
      }

      if (existingRecord && existingRecord.length > 0) {
        const { error: updateError } = await supabase
          .from("page_visits")
          .update({
            total_visit: existingRecord[0].total_visit + 1,
            user_agent: userAgent,
            timestamp: new Date(),
          })
          .eq("user_ip", userIp);

        if (updateError) {
          throw new Error(updateError.message);
        }

        return res.status(200).json({
          status: "success",
          message: "Visit count updated",
        });
      } else {
        const { error: insertError } = await supabase
          .from("page_visits")
          .insert({
            page,
            user_ip: userIp,
            user_agent: userAgent,
            total_visit: 1,
            timestamp: new Date(),
          });

        if (insertError) {
          throw new Error(insertError.message);
        }

        return res.status(200).json({
          status: "success",
          message: "New visit recorded",
        });
      }
    } catch (err) {
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
