import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNavBar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/AddProduct">AddProduct</Link> | 
      <Link to="/api">Admin Login</Link> | 
      <Link to="/display">Display</Link>
    </nav>
  )
}
