 'use client'

import React, {useState} from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import AddTicket from './components/AddTicket';

export default function Home() {

  const [sellClicked, setSellClicked] = useState(false);
  const [buyClicked, setBuyClicked] = useState(false);

  const handleSellButton = () => {
    setSellClicked(!sellClicked);
  }

  return (
    <main className="flex justify-center flex-col pt-10">
      <h1 className='text-5xl m-auto pb-10 font-semibold '>On The Spot</h1> 
      <div className="flex justify-center gap-8 items-center pb-10">
        <Link
        className="bg-[#f472b6] text-black font-semibold py-4 px-4 shadow-lg rounded-md flex-2 w-64 text-center"
        href='/buy'
        >Buy</Link>
        {/* <Link 
        className="bg-[#2dd4bf] text-black font-semibold py-4 px-4 rounded-md flex-2 w-64 text-center"
        href='/sell'
        >Sell</Link> */}
        <button 
          className="bg-[#2dd4bf] text-black font-semibold py-4 shadow-lg px-4 rounded-md flex-2 w-64 text-center" 
          onClick={handleSellButton}>
            Sell
        </button>
      </div>
       {sellClicked && <AddTicket />}
     
    </main>
  )
}
