import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { body, nama, email } = req.body;
    const { data, error } = await resend.emails.send({
      from: 'Kenzo <noreply@frobby.tech>',
      to: ['robbysalamf@gmail.com'],
      subject: 'You Have New Message',
      react: EmailTemplate({ body, nama, email }),
    });
    if (error) {
      return res.status(400).json(error);
    }
    return res.status(200).json({ message: "Email sent successfully" });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
