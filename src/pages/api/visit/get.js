import supabase from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // if (!req.headers['x-requested-with'] || req.headers['x-requested-with'] !== 'XMLHttpRequest') {
    //   return res.status(403).json({
    //     status: 'error',
    //     message: "Ooopss, you are not allowed to access this endpoint directly 🗿",
    //   });
    // }
    const getTime = new Date().toLocaleString();
    const message = `*Hey this is kenzo\\!* 🤖\n\n*👥 A new visitor just checked out your page\\!* \n*🕓 When ?* ${getTime.replace(/[.-]/g, "\\$&")}\n\n*See details in this page *[here](https://dashboard\\.frobby\\.tech/)`;

    const { page, userAgent } = req.body;
    const userIp =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    try {
      await fetch(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
            text: message,
            parse_mode: "MarkdownV2",
            type: "private",
          }),
        }
      );

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
