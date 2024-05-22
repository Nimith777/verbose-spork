import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import { Card } from '@mui/material'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Add from './components/Add'
import ListMap from './components/ListMap'
import Mapping from './components/Mapping'
import Api from './components/Api'
import Cardview from './components/Cardview'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/state" element={<Statebasics />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/list" element={<ListMap />}></Route>
        <Route path="/mapping" element={<Mapping />}></Route>
        <Route path="/api" element={<Api />}></Route>
        <Route path="/card" element={<Cardview />}></Route>
      </Routes>
    </div>
  )
}

export default App
