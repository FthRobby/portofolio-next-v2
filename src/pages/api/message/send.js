import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";
import supabase from "@/lib/supabase";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { body, nama, email } = req.body;

    // check number of count in backend
    const { data, error } = await supabase
      .from("submissions")
      .select("*")
      .eq("email", email)
      .gte("timestamp", new Date(Date.now() - 5 * 60 * 1000).toISOString());
    if (error) {
      return res
        .status(500)
        .json({ message: "Error checking submission rate" });
    }
    if (data.length >= 2) {
      return res
        .status(429)
        .json({ message: "Too many submission. Please try again later" });
    }

    // send submission
    const emailData = await resend.emails.send({
      from: "Kenzo <noreply@frobby.tech>",
      to: ["robbysalamf@gmail.com"],
      subject: "You Have New Message",
      react: EmailTemplate({ body, nama, email }),
    });
    if (emailData.error) {
      return res.status(400).json(emailData.error);
    }

    // dont forget to record the submission
    const { error: insertError } = await supabase
      .from("submissions")
      .insert([{ email, timestamp: new Date().toISOString() }]);

    if (insertError) {
      return res.status(500).json({ message: "Error recording submission" });
    }
    return res.status(200).json({ message: "Email sent successfuly" });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
