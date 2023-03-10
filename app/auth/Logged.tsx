'use client'

import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

type User = {
  image: string
}

const Logged = ({ image }: User) => {
  return (
    <li className='list-none flex gap-8 items-center '>
      <button 
        className='text-sm bg-gray-700 text-white py-2 px-6 rounded-md disabled:opacity-25' 
        onClick={() => signOut()}>
        Sign Out
      </button>
      <Link href={"/dashboard"}>
        <Image 
          width={64} 
          height={64}
          className="w-14 rounded-full" 
          src={image}
          alt=''
          priority
          />
      </Link>
  </li>
  );
}

export default Logged;