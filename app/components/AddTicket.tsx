'use client'


import React ,{ useState } from 'react';
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

const AddTickect = () => {
  const [location, setLocaion] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('pop');
  const [amount, setAmount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <Container  className="bg-[#f5f5f4] rounded-md shadow-md" maxWidth="xs">
    <Box
        sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      >
        <Typography component="h1" variant='h5'>Sell Your Tickets</Typography>
      </Box>
    <Box className='p-4 mb-12' component="form" sx={{ mt: 3 }}>
      <Grid>
          <Grid>
            <TextField
                  onChange={(e) => setLocaion(e.target.value)}
                  // autoComplete='location'
                  className='shadow-md mb-5'
                  name="location"
                  required
                  value={location}
                  fullWidth
                  // id='name'
                  label='Location'
               
                  autoFocus
                ></TextField>
          </Grid>
        
        <Grid>
          <TextField
                  onChange={(e) => setArtist(e.target.value)}
                  // autoComplete='artist'
                  className='shadow-md mb-5'
                  name="artist"
                  required
                  value={artist}
                  fullWidth
                  // id='name'
                  label='Artist'
                ></TextField>
        </Grid>

        <FormControl className='shadow-md  w-full p-4'>
          <FormLabel  id="demo-radio-buttons-group-label">Genre</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label row"
            defaultValue="pop"
            name="radio-buttons-group"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <FormControlLabel value="pop" control={<Radio />} label="Pop" />
            <FormControlLabel value="rock" control={<Radio />} label="Rock" />
            <FormControlLabel value="hiphop" control={<Radio />} label="Hiphop" />
          </RadioGroup>
        </FormControl>

        <Grid className='mt-3' container direction="row"  alignItems="center"  justifyContent="center">
          <Grid  xs={10}>
            <TextField
                    // autoComplete='amount'
                    className=' w-11/12 shadow-md mt-5 mb-5'
                    name="amount"
                    required
                    value={amount}
                    // fullWidth
                    // id='amount'
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

    </Grid>
      <Button className='bg-[#2dd4bf]' disabled={isDisabled} type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>Sumbit Ticket</Button>

    </Box>
    </Container>
  );
}

export default AddTickect;