'use client'

import React, {useState} from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

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

const GetTicketsForm = () => {
  const [location, setLocaion] = useState('');

  return (
    <Container className="bg-[#f5f5f4] rounded-md shadow-lg py-2 px-8" maxWidth="xs">
      <Box component="form" sx={{ mt: 6 }}>
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
              autoFocus />
          </Grid>

          <Grid>
            <Button 
              className='bg-[#EFB8C8] disabled:opacity-25 mb-5 shadow-lg text-gray-700 text-lg py-2' 
              type='submit'
              fullWidth
              sx={{ mt: 2, mb: 2 }}
            >Find Me Tickets</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default GetTicketsForm;