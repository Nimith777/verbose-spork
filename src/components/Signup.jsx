import { TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <Typography variant='h6'>SIGN UP</Typography>
        <TextField variant='outlined' label='username'>USERNAME</TextField><br/><br/>
        <TextField variant='outlined' label='password'>PASSWORD</TextField><br/><br/>
        <TextField variant='outlined' label='name'>NAME</TextField><br/><br/>
        <TextField variant='outlined' label='place'>PLACE</TextField>
    </div>
  )
}

export default Signup