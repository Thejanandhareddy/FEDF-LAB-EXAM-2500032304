// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './exam/style.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainNavBar from './exam/MainNavBar.jsx'
import Home from './exam/Home.jsx'
import AddProduct from './exam/AddProduct.jsx'
import Display from './exam/Display.jsx'
import Apidemo1 from './exam/Apidemo1.jsx'

function App() {
  return (
    <Router>
      <MainNavBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/api" element={<Apidemo1 />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      
      
    </Router>
  )
}

export default App
