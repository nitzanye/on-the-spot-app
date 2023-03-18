'use client'


import React ,{ useState } from 'react';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMutation, useQueryClient } from 'react-query';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

// IMPORT MUI ELEMENTS
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';

import { TicketsType } from '../types/Tickets';

interface TicketData {
  date: string;
  location: string;
  artist: string;
  genre: string;
  amount: number;
  price: number;
}

const AddTickect = () => {
  const [date, setDate] = useState('');
  const [location, setLocaion] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('pop');
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const queryClient = useQueryClient();
  let toastTicketId: string;


  const handleChangeGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  // CREATE A TICKET
  const { mutate } = useMutation(
    async (data: TicketData) => 
      await axios.post('/api/tickets/addTicket', data),
  {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: toastTicketId })
        }
        setIsDisabled(false)
      },
      onSuccess: (data) => {
        toast.success('Ticket has been made', { id: toastTicketId })
        queryClient.invalidateQueries(["tickets"]);
        setDate('');
        setLocaion('');
        setArtist('');
        setGenre('pop');
        setAmount(1);
        setPrice(0);
        setIsDisabled(false);
      },
    }
  )

  const submitTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    // toastTicketId = toast.loading("Creating your ticket", { id: toastTicketId })
    mutate({ date, location, artist, genre, amount, price });
  } 


  return (
    <Container  className="bg-[#f5f5f4] rounded-md shadow-md" maxWidth="xs">
    <Box
        sx={{ marginTop: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      >
        <Typography component="h1" className='text-black' variant='h5'>Sell Your Tickets</Typography>
      </Box>
    <Box onSubmit={submitTicket} className='p-4 mb-5 mt-2' component="form" sx={{ mt: 6 }}>
      <Grid>
          <Grid>
            <TextField
                  onChange={(e) => setLocaion(e.target.value)}
                  className='shadow-md mb-5'
                  name="location"
                  required
                  value={location}
                  fullWidth
                  label='Location'
                  autoFocus
                ></TextField>
          </Grid>
        
          <Grid>
            <TextField
                  onChange={(e) => setDate(e.target.value)}
                  className='shadow-md mb-5'
                  name="date"
                  required
                  value={date}
                  fullWidth
                  label='Date'
                ></TextField>
          </Grid>
        <Grid>
          <TextField
                  onChange={(e) => setArtist(e.target.value)}
                  className='shadow-md mb-5'
                  name="artist"
                  required
                  value={artist}
                  fullWidth
                  label='Artist'
                ></TextField>
        </Grid>

        <FormControl className='shadow-md  w-full p-4'>
          <FormLabel  id="demo-radio-buttons-group-label">Genre</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label row"
            defaultValue="pop"
            name="radio-buttons-group"
            onChange={handleChangeGenre}
            // onChange={(e) => setGenre(e.target.value)}
            
          >
            <FormControlLabel className='text-black' value="pop" control={<Radio />} label="Pop" />
            <FormControlLabel className='text-black' value="rock" control={<Radio />} label="Rock" />
            <FormControlLabel className='text-black' value="hiphop" control={<Radio />} label="Hiphop" />
          </RadioGroup>
        </FormControl>

        <Grid className='mt-3' container direction="row"  alignItems="center"  justifyContent="center">
          <Grid  xs={10}>
            <TextField
                    className=' w-11/12 shadow-md mt-5 mb-5'
                    name="amount"
                    required
                    value={amount}
                    label='Amount'
                ></TextField>
          </Grid>
          <Grid xs={2}>
              <Grid>
                  <Button className='shadow-md text-center' onClick={() => setAmount(amount + 1)}>+</Button>
              </Grid>
            
              <Grid>
                <Button className='shadow-md text-center' onClick={handleDecrement}>-</Button>
              </Grid>
          </Grid>
      </Grid>

      <Grid>
        <TextField
                  className='w-full shadow-md mt-5 mb-5'
                  name="price"
                  required
                  value={price || 0}
                  label="Price Per Ticket"
                  onChange={(e) => setPrice(parseInt(e.target.value))}
        ></TextField>
      </Grid>

    </Grid>
      <Button 
        className='bg-[#2dd4bf] disabled:opacity-25' 
        disabled={isDisabled} 
        type='submit' 
        fullWidth variant='contained' 
        sx={{ mt: 3, mb: 2 }}>
          Sumbit Ticket
      </Button>

    </Box>
    </Container>
  );
}

export default AddTickect;