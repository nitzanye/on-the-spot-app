'use client'

import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Fetch all tickets
const allTickets = async () => {  
  const response = await axios.get('/api/tickets/getTickets');
  return response.data
}

const TicketsList = () => {
  const { data, error, isLoading } = useQuery({
    queryFn: allTickets,
    queryKey: ["tickets"],
  })

  if (error) return error
  if (isLoading) return 'Loading...'
  console.log(data);
  return (
    <>
      <h1>List of all the tickets</h1>
      <Link href="/">To The Home Page</Link>
    </>
  )
}

export default TicketsList;