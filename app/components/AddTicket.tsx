'use client'


import React ,{ useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

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

interface TicketData {
  location: string;
  artist: string;
  genre: string;
  amount: number;
  price: number;
}

const AddTickect = () => {
  const [location, setLocaion] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('pop');
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState(false);

  // CREATE A TICKET
  const { mutate } = useMutation(async (data: TicketData) => {
    const res = await axios.post('/api/tickets/addTicket', data);
    return res.data;
  });

  const handleChangeGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };


  const submitTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate({ location, artist, genre, amount, price });
  } 

  return (
    <Container  className="bg-[#f5f5f4] rounded-md shadow-md" maxWidth="xs">
    <Box
        sx={{ marginTop: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      >
        <Typography component="h1" variant='h5'>Sell Your Tickets</Typography>
      </Box>
    <Box onSubmit={submitTicket} className='p-4 mb-5' component="form" sx={{ mt: 3 }}>
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
            <FormControlLabel value="pop" control={<Radio />} label="Pop" />
            <FormControlLabel value="rock" control={<Radio />} label="Rock" />
            <FormControlLabel value="hiphop" control={<Radio />} label="Hiphop" />
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
                <Button className='shadow-md text-center' onClick={() => setAmount(amount - 1)}>-</Button>
              </Grid>
          </Grid>
      </Grid>

      <Grid>
        <TextField
                  className='w-full shadow-md mt-5 mb-5'
                  name="price"
                  required
                  value={price || null}
                  label="Price"
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