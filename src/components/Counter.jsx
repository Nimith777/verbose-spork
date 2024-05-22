import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Counter = () => {
    var[name,setname] =useState(0);

    const handleinput=()=>{
        console.log("Clicked")
        setname(name+1)
    }
    const submithandler=()=>{
        console.log("Clicked")
        setname(name-1)
    }
  return (
    <div>
        <Typography variant='h4'>{name}</Typography>
        <Button variant='contained' color='success' onClick={handleinput}>+</Button>
        <Button variant='contained' color='success' onClick={submithandler}>-</Button>
    </div>
  )
}

export default Counter