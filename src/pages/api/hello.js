// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  if (req.method === "GET") {
    const response =
      "Hello! What’s going on? Are you looking to create something interesting or collaborate? Feel free to contact me on the contact page, and I’ll get back to you as soon as possible. See yaa!";
    res.status(200).json(response);
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
