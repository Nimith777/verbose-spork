import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var[fname,setfname]= useState("")
    const[change,setchange]= useState()

    const handleinput=(e)=>{
        console.log(e.target.value)
        setfname(e.target.value)
    }
    const submithandler=()=>{
        console.log("Clicked")
        setchange(fname)
    }
  return (
    <div>
        <Typography variant='h4'>WELCOME TO REACT {fname}</Typography>
        <TextField variant='outlined' label='Enter the name' onChange={handleinput}></TextField>
        <Button variant='contained' color='success' onClick={submithandler}>ENTER</Button>
        
    </div>
  )
}

export default Statebasics