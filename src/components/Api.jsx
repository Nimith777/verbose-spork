import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    var[user,setuser]=useState();

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response.data);
        setuser(response.data);
    })
    },[])

  return (
    <div>
         <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>City</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {user.map((val,i)=>{
                return(
                    <TableRow>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.id}</TableCell>
                        <TableCell>{val.address.city}</TableCell>
                    </TableRow>
                )
            })}
          </TableBody>
          </Table>
          </TableContainer>
    </div>
  )
}

export default Api