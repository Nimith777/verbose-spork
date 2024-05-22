import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h5' style={{color:'red'}}>MY APP</Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='success'><Link to='/' style={{color:'red'}}>LOGIN</Link></Button> &nbsp;
                <Button variant='contained' color='success'><Link to='/signup' style={{color:'red'}}>SIGN UP</Link></Button> &nbsp;
                <Button variant='contained' color='success'><Link to='/state' style={{color:'red'}}>STATE BASICS</Link></Button> &nbsp;
                <Button variant='contained' color='success'><Link to='/counter' style={{color:'red'}}>COUNTER</Link></Button> &nbsp;
                <Button variant='contained' color='success'><Link to='/add' style={{color:'red'}}>ADD</Link></Button> &nbsp;
                <Button variant='contained' color='success'><Link to='/list' style={{color:'red'}}>LIST MAP</Link></Button> &nbsp;
                <Button variant='contained' color='success'><Link to='/mapping' style={{color:'red'}}>MAPPING</Link></Button> &nbsp;
                <Button variant='contained' color='success'><Link to='/api' style={{color:'red'}}>API</Link></Button> &nbsp;
                <Button variant='contained' color='success'><Link to='/card' style={{color:'red'}}>CARD VIEW</Link></Button> &nbsp;
            </Toolbar>
        </AppBar>
        <br/><br/><br/><br/><br/>
    </div>
  )
}

export default Navbar