
export async function getUsers() {
  const res = await fetch(`${process.env.BASE_URL}/api/getUsers`)
  if(!res.ok) {
  console.log(res)  
  } 
  return res.json()
}

