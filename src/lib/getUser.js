export async function getUserIp() {
  const request = await fetch(`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPTOKEN}`);
  const jsonResponse = await request.json();
  return jsonResponse
}
