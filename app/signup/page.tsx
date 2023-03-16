// 'use client'

// import { Button } from '@mui/material';
// import { TextField } from '@mui/material';
// import { FormControlLabel } from '@mui/material';
// import { Checkbox } from '@mui/material';
// import { Grid } from '@mui/material';
// import { Box } from '@mui/material';
// import { Typography } from '@mui/material';
// import { Container } from '@mui/material';

// const Signup = () => {  

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}
//       >
//         <Typography component="h1" variant='h5'>Sign Up</Typography>
//       </Box>
//       <Box component="form" noValidate sx={{ mt: 3 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//               <TextField
//                 autoComplete='user-name'
//                 name="name"
//                 required
//                 fullWidth
//                 id='name'
//                 label='User Name'
//                 autoFocus
//               ></TextField>
//           </Grid>
//           <Grid item xs={12}>
//               <TextField
//                 autoComplete='user-email'
//                 name="email"
//                 required
//                 fullWidth
//                 id='email'
//                 label='Email Address'
//               ></TextField>
//           </Grid>
//           <Grid item xs={12}>
//               <TextField
//                 autoComplete='user-imageUrl'
//                 name="imagUrl"
//                 required
//                 fullWidth
//                 id='imageUrl'
//                 label='User Avatar'
//               ></TextField>
//           </Grid>
//           <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="showPassword" color='primary' />}
//                 label="Show Password"
//               />
//               <TextField
//                 autoComplete='new-password'
//                 name="password"
//                 required
//                 fullWidth
//                 id='password'
//                 label='User Password'
//               ></TextField>
//           </Grid>
//         </Grid>
//         <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>Sign Up</Button>

//       </Box>
//     </Container>
//   )
// }

// export default Signup;