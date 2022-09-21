import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from '../page/login';
import Reg from '../page/reg';
import Home from '../page/home'
import Detail from '../page/detial';
import Basic from '../layout'
const BaseRoute= () => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Basic/>}>
            <Route path="/home" element={Home}/>
            <Route path="/detail/:id" element={<Detail/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/reg" element={<Reg/>}/>
        </Routes>
      </BrowserRouter>
)

export default BaseRoute;