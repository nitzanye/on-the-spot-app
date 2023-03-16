'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthTickets } from "../types/AuthTickets";

const fetchAuthTickets = async () => {
  const res = await axios.get('/api/tickets/authTickets');
  console.log(res.data);
  return res.data;
}

export default function MyTickets() {
  const { data, isLoading }  = useQuery<AuthTickets>({
    queryFn: fetchAuthTickets,
    queryKey: 'auth-tickets',
})
  if (isLoading) return <h1>Tickets are loading...</h1>
  if (data) console.log(data)
  return (
    <div>Data</div>
  );
}