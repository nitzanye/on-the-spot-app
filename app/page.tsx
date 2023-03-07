// 'use client'

import Link from "next/link";
import Signup from "./signup/page";


async function getUsers() {
  const res = await fetch(`${process.env.BASE_URL}/api/getUsers`)
  if(!res.ok) {
  console.log(res)  
  } 
  return res.json()
}


export default async function Home() {
  const data: {id: string, email: string, name: string, imageUrl: string}[] = await getUsers();
  // console.log("data", data)
  return (
    <main className="flex justify-center flex-col pt-10 ">
      <h1 className='text-lg m-auto pb-10 '>On The Spot</h1> 
      <Signup />
        {data.map((user) => (
          <div className='flex justify-center flex-col ml-auto mr-auto pb-10' key={user.id}>
          <h3>{user.name}</h3>
          <h4>{user.email}</h4>
          <img className='max-w-sm' src={user.imageUrl} />
          </div>
        ))}
      <div className="flex justify-center gap-8 items-center pb-10">
        <Link
        className="bg-[#f472b6] text-black font-medium py-4 px-4 rounded-md flex-2 w-64 text-center"
        href='/buy'
        >Buy</Link>
        <Link 
        className="bg-[#2dd4bf] text-black font-medium py-4 px-4 rounded-md flex-2 w-64 text-center"
        href='/sell'
        >Sell</Link>
      </div>
    </main>
  )
}
