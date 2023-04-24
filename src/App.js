import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {arrow} from './pictures/uparrow.png'
import {
  Route,
  Routes,
  BrowserRouter
}from "react-router-dom"
import Linear from './components/Linear';
import Binary from './components/Binary';
import Navbar from './components/Navbar';
import Jump from './components/Jump';
import Interpolation from './components/Interpolation';
function App() {
 


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Linear/>} path='/'></Route>
        <Route element={<Binary/>} path='/binary'></Route>
        <Route element={<Jump/>} path='/jump'></Route>
        <Route element={<Interpolation/>} path='/interpolation'></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
