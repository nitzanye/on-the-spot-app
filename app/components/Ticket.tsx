'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { capitalizedWords, cleanupDateStr } from '../utils/constance';

type Ticket = {
  id: string
  avatar: string
  name: string
  ticketDate: string
  ticketArtist: string
  ticketLocation: string
  ticketAmount: number
  ticketPrice: number
}

const Ticket = ({ 
  avatar, 
  name, 
  ticketDate, 
  ticketLocation, 
  ticketArtist, 
  ticketAmount, 
  ticketPrice, 
  id}: Ticket) => {

  const [connectBtnClicked, setConnectBtnClicked] = useState(false);

  const upperCaseArtist = capitalizedWords(ticketArtist);
  const upperCaseLocation = capitalizedWords(ticketLocation);
  const shorterDate = cleanupDateStr(ticketDate);

  const handleToggleBtn = () => {
    setConnectBtnClicked(!connectBtnClicked);
  }
    return (
      <div className="my-6 p-8 rounded-lg bg-slate-200">
        <div className="flex gap-7 mt-2 mb-2 items-center">
          <h3 className="text-2xl font-bold">{shorterDate}</h3>
          <div>
            <h4 className="text-xl text-[#2dd4bf] font-bold">{upperCaseLocation}</h4>
            <h5>{upperCaseArtist}</h5>
            <p>{ticketAmount} tickets</p>
            <p>${ticketPrice} per ticket</p>
          </div>
        </div>
        <div className="flex gap-4 cursor-pointer items-center">
          <button 
            className="text-sm font-bold text-white bg-gray-700 my-6 py-2 px-4 rounded-lg shadow-lg "
            onClick={handleToggleBtn}>Connect The Seller</button>
      
          {connectBtnClicked && (
            <div>
               <div className="flex items-center gap-2">
                 <Image 
                    className="rounded-full"
                    width={32}
                    height={32}
                    src={avatar}
                    alt="avatar"
               />
                <h3 className="font-bold text-gray-700">{name}</h3>
              </div>
              <p>Seller Email</p>
              <p>Seller Mobile Number</p>
          </div>
          )}

        </div>
      </div>
    );
}

export default Ticket;