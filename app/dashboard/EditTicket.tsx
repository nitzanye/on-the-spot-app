'use client'

import axios from 'axios';
import Image from 'next/image';
import {useState} from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { capitalizedWords, cleanupDateStr } from '../utils/constance';
import Toggle from './Toggle';
import toast from 'react-hot-toast';

type EditTicket = {
  id: string
  avatar: string
  name: string
  date: string
  artist: string
  location: string
  amount: number
  price: number
}

const EditTicket = ({id, avatar, name, date, artist, location, amount, price}: EditTicket) => {
  const upperCaseArtist = capitalizedWords(artist);
  const upperCaseLocation = capitalizedWords(location);
  const shorterDate = cleanupDateStr(date);

  const [toggle, setToggle] = useState(false);
  const queryClient = useQueryClient();
  let deleteTicketId: string;


  // Delete Ticket 
  const {mutate} = useMutation(
    async (id: string) => 
      await axios.delete('/api/tickets/deleteTicket', { data: id }),
      {
        onError: (error) => {
          console.log(error);
          toast.error('Error deleting that ticket', { id: deleteTicketId });
        },
        onSuccess: (data) => {
          console.log(data);
          toast.success('Ticket has been deleted.', { id: deleteTicketId });
          queryClient.invalidateQueries("getAuthTickets");
   
        },
      }
    )

    const deleteTicket = () => {
      deleteTicketId = toast.loading('Deleting your ticket', { id: deleteTicketId })
      mutate(id);
    }

  return (
  <div >
    <div className='bg-gray-300 my-8  p-8 rounded-lg'>
      <div className='flex items-center gap-4'>
        <Image width={32} height={32} src={avatar} alt="avatar" className='rounded-full' />
        <h3 className='font-bold'>{name}</h3>
      </div>

      <div className='flex items-center gap-4'>
        <p>{upperCaseLocation}</p>
        <p>{upperCaseArtist}</p>
        <p>{shorterDate}</p>
        <p>{amount}</p>
        <p>{`$${price}`}</p>
        <p>{id}</p>
      </div>
  
      <div className='flex items-center gap-4'>
        <button onClick={(e) => setToggle(true)} className='bg-pink-800 my-2 p-2 rounded-md shadow-md text-sm font-bold text-white' >Delete</button>
      </div>
    </div>
    {toggle && <Toggle deleteTicket={deleteTicket} setToggle={setToggle}/>}
  </div>
  );
}

export default EditTicket;