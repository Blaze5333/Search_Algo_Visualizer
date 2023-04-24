import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate=useNavigate()
    const nav=(route)=>{
      navigate(route)
    }
  return (
    <div className='nav'>
      <button className='navbutton' onClick={()=>{nav('/')}}>Linear Search</button>
      <button className='navbutton' onClick={()=>{nav('/binary')}}>Binary Search</button>
      <button className='navbutton' onClick={()=>{nav('/jump')}}>Jump Search</button>
      <button className='navbutton' onClick={()=>{nav('/interpolation')}}>Interpolation Search</button>
    </div>
  )
}
