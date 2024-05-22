import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Add = () => {
    var[fname,setfname]= useState()

    const inpt1=()=>{
        setfname("REACT")
    }
    const inpt2=()=>{
        setfname("ANGULAR")
    }
    const inpt3=()=>{
        setfname("VIEW")
    }
    useEffect(()=>{
        inpt2()
    },[])
  return (
    <div>
        <Typography variant='h4'>WELCOME TO {fname}</Typography>
        <Button variant='contained' color='primary' onClick={inpt1}>REACT</Button>&nbsp;&nbsp;
        <Button variant='contained' color='secondary' onClick={inpt2}>ANGULAR</Button>&nbsp;&nbsp;
        <Button variant='contained' color='success' onClick={inpt3}>VIEW</Button>
    </div>
  )
}

export default Add