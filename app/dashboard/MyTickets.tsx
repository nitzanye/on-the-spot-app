'use client'

// import { useQuery } from "@tanstack/react-query";
import EditTicket from "./EditTicket";
import { useQuery } from "react-query";
import axios from "axios";
import { AuthTickets } from "../types/AuthTickets";


const fetchAuthTickets = async () => {
  const res = await axios.get('/api/tickets/authTickets');
  // console.log(res.data);
  return res.data;
}

export default function MyTickets() {
  const { data, isLoading }  = useQuery<AuthTickets>(
    'getAuthTickets',
    fetchAuthTickets
)
  if (isLoading) return <h1>Tickets are loading...</h1>
  // if (data) console.log(data)
  return (
    <div>
      {data?.tickets?.map((ticket) => (
        <EditTicket 
          id={ticket.id}
          key={ticket.id}
          avatar={data.image}
          name={data.name}
          date={ticket.date}
          artist={ticket.artist}
          location={ticket.location}
          price={ticket.price}
          amount={ticket.amount}
          />
      ))}
    </div>
  );
}