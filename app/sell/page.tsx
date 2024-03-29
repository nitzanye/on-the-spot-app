'use client'

import Link from "next/link";
import AddTickect from "../components/AddTicket";
import DateLayerWrapper from "../components/DateLayerWrapper";

const Sell = () => {  
  return (
    <main className="flex justify-center flex-col pt-10 pb-10">
      <DateLayerWrapper>            
        <h1 className='text-3xl m-auto pb-10 font-semibold '>Sell Your Tickets</h1>
        <AddTickect />
        <Link className="mt-10" href="/">To The Home Page</Link>
      </DateLayerWrapper>
    </main>
  )
}

export default Sell;