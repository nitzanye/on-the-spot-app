import { getServerSession } from "next-auth";
import {authOptions} from '../../pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';
import MyTickets from "./MyTickets";
import Link from "next/link";

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  if(!session) {
    redirect('/api/auth/signin')
  }
  return (
    <main className='max-w-4xl mx-auto'>
      <h1 className="text-2xl font-bold my-4">Welcome back {session?.user?.name}</h1>
      <MyTickets />
      <div className="flex items-center  justify-around">
        <Link className="bg-[#EFB8C8] shadow-lg py-2 px-4 rounded-md text-gray-700 font-semibold text-sm" href='/buy'>Get More Tickets</Link>
        <Link className="bg-[#D0BCFF] shadow-lg py-2 px-4 rounded-md text-gray-700 font-semibold text-sm" href='/sell'>Sell More Tickets</Link>
      </div>
    </main>
  )
}