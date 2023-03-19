'use client'

import Link from "next/link";
import DateLayerWrapper from "../components/DateLayerWrapper";
import GetTickets from "../components/GetTickets";
import React, {useState} from "react";
import GetTicketsForm from "../components/GetTicketsForm";

const Buy = () => {  
  const [isGetTickets, setIsGetTickets] = useState(false);

  return (
    <main className="flex justify-center flex-col  pb-10">
      <DateLayerWrapper>        
        <h1 className='text-3xl m-auto pb-10 font-semibold '>Get Tickets</h1>
        {!isGetTickets && <GetTicketsForm />}
        <GetTickets />
        <Link className="mt-10 text-lg font-semibold" href="/">To The Home Page</Link>
      </DateLayerWrapper>
    </main>
  )
}

export default Buy;