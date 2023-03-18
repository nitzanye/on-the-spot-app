'use client'

import Image from 'next/image';
import {useState} from 'react';
import { capitalizedWords } from '../utils/constance';
import Toggle from './Toggle';

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

  const deleteTicket = (e) => {
    e.preventDefault();
    return Toggle 
  }

  return (
  <>
    <div className='bg-gray-300 my-8 p-8 rounded-lg'>
      <div className='flex items-center gap-4'>
        <Image width={32} height={32} src={avatar} alt="avatar" className='rounded-full' />
        <h3 className='font-bold'>{name}</h3>
      </div>

      <div className='flex items-center gap-4'>
        <p>{upperCaseLocation}</p>
        <p>{upperCaseArtist}</p>
        <p>{date}</p>
        <p>{amount}</p>
        <p>{`$${price}`}</p>
        <p>{id}</p>
      </div>
  
      <div className='flex items-center gap-4'>
        <button className='text-sm font-bold text-blue-500' >Delete</button>
      </div>
    </div>
    <Toggle/>
  </>
  );
}

export default EditTicket;