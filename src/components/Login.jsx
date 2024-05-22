import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <Typography variant='h6'>LOGIN</Typography>
        <TextField variant='outlined' label='username'>USERNAME</TextField><br/><br/>
        <TextField variant='outlined' label='password'>PASSWORD</TextField>
    </div>
  )
}

export default Login