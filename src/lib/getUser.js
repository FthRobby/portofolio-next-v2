// export async function getUserIp(val) {
//   const request = await fetch(`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPTOKEN}`);
//   const jsonResponse = await request.json();
//   return jsonResponse
// }


export async function getUserIp(userIp) {
  const ress = await fetch(`https://ipinfo.io/${userIp}?token=${process.env.NEXT_PUBLIC_IPTOKEN}`)
  const data = await ress.json()
  return data
}