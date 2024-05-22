import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const ListMap = () => {
    var[name,setname]= useState()
    var[data,setdata]= useState(["NIMITH"])
    
    const handleinput=(e)=>{
        console.log(name)
        setname(e.target.value)
    }
    const submithandler=()=>{
        console.log("Clicked")
        setdata([...data,name])
    }
  return (
    <div>
        <TextField variant='outlined' label='Enter the name' onChange={handleinput} value={name}></TextField>
        <Button variant='contained' color='success' onClick={submithandler}>ENTER</Button>
        <ul>
            {data.map((val,i)=>{
                return <li>{val}</li>
            })}
        </ul>
    </div>
  )
}

export default ListMap