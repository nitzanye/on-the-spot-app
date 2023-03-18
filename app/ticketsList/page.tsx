'use client'

import Link from "next/link";
import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
import {useQuery} from 'react-query';
import Ticket from '../components/Ticket';
import { TicketsType } from "../types/Tickets";

// Fetch all tickets
const allTickets = async () => {  
  const response = await axios.get('/api/tickets/getTickets');
  return response.data
}

const TicketsList = () => {
  const { data, error, isLoading } = useQuery<TicketsType[]>({
    queryFn: allTickets,
    queryKey: ["tickets"],
  })

 

  if (error) return error
  if (isLoading) return 'Loading...'
  // console.log(data);
  return (
    <main>
      <h1>List of all the tickets</h1>
      {data?.map((ticket) => (
        <Ticket 
          key={ticket.id} 
          name={ticket.user.name}
          ticketLocation={ticket.location} 
          ticketDate = {ticket.date}
          ticketArtist={ticket.artist} 
          // ticketGenre={ticket.genre}
          ticketAmount={ticket.amount}
          ticketPrice={ticket.price}
          avatar={ticket.user.image}
          id={ticket.id}
          />
      ))}
      <Link href="/">To The Home Page</Link>
    </main>
  )
}

export default TicketsList;