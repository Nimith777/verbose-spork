import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var[name,setname]= useState([
        {"sname":"Nimith","age":"20"},
        {"sname":"Athul","age":"70"},
        {"sname":"Joseph","age":"90"}
    ])
  return (
    <div>
        <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {name.map((val,i)=>{
                return(
                    <TableRow>
                        <TableCell>{val.sname}</TableCell>
                        <TableCell>{val.age}</TableCell>
                    </TableRow>
                )
            })}
          </TableBody>
          </Table>
          </TableContainer>
    </div>
  )
}

export default Mapping