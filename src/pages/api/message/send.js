import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";
import supabase from "@/lib/supabase";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { nama, email, body: messageText } = req.body; // 👈 use body
    if (!nama || !email || !messageText) {
      return res.status(400).json({ status: "error", message: "Missing fields" });
    }

    const escape = (str) =>
      str.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, "\\$1");

    const telegramMessage = `*New Visitor Message*\n\n👤 *Name:* ${escape(nama)}\n✉️ *Email:* ${escape(email)}\n💬 *Message:* ${escape(messageText)}`;

    await fetch(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
        text: telegramMessage,
        parse_mode: "MarkdownV2",
      }),
    });

    return res.status(200).json({ status: "success", message: "Message successfully sent" });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
}

