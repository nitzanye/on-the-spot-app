 'use client'

import React, {useState} from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center flex-col mt-8 pt-10 pb-8 gap-4">
      <h1 className='text-5xl m-auto pb-10 font-semibold '>On-The-Spot</h1> 
      <h2 className="text-3xl m-auto pb-3 text-gray-800"> The app that lets you buy and sell tickets with ease! </h2>
      <h2 className="text-2xl m-auto pb-3  text-gray-800"> You can finally say goodbye to wasted tickets and </h2>
      <h2 className="text-2xl m-auto pb-10 font-semibold"> say hello to fun, spontaneous adventures!</h2>
      <div className="flex justify-center gap-16 items-center pb-10">
        <div className="flex flex-col justify-center items-center bg-gray-100 px-10 shadow-lg py-6 rounded-lg">
          <h2 className="text-2xl pb-2">Never miss a show again</h2> 
          <h2 className="text-xl pb-7 font-bold">Get tickets to sold-out concerts</h2>
          <Link
            className="bg-[#f472b6] text-black font-semibold py-4 px-16 shadow-lg rounded-md flex-2 w-64 text-center"
            href='/buy'
          >
            GET TICKETS         
          </Link>
        </div>
        
        <div className="flex flex-col justify-center items-center bg-gray-100 px-10 shadow-lg py-6 rounded-lg">
          <h2 className="text-2xl pb-2">Don't let your tickets go to waste</h2> 
          <h2 className="text-xl font-bold pb-7">Sell Them</h2>
          <Link  
            className="bg-[#2dd4bf] text-black font-semibold py-4 shadow-lg px-4 rounded-md flex-2 w-64 text-center" 
            href='/sell'
          >
            SELL TICKETS
          </Link>
        </div>
      </div>
    </main>
  )
}
