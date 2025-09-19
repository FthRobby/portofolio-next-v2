export default function handler(req, res) {
  const response = "Hello! What's going on? Are you looking to create something interesting or collaborate? Feel free to contact me on the contact page, and I’ll get back to you as soon as possible. See yaa!";
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(response);
}