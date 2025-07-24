import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Product" element={<Product/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route> 
          <Route path="/*" element={<NotFound/>}></Route>     
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
