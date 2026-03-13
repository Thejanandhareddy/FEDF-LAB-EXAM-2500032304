import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNavBar() {
  return (
    <nav style={{backgroundColor:"greenyellow"}}>
      <Link to="/">Home</Link> | 
      <Link to="/AddProduct">AddProduct</Link> | 
      <Link to="/api">ApiDemo</Link> | 
      <Link to="/display">Display</Link>
    </nav>
  )
}
