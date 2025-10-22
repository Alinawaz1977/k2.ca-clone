import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from "./pages/Agence"

import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import { useEffect } from 'react'
import PageNavigation from './components/Navigation/PageNavigation'
import Lenis from 'lenis'
const App = () => {
  return (
    <div className='w-full h-screen' >
      {/* <PageNavigation/> */}
       <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projets' element={<Projects />} />
        <Route path='/navbar' element={<PageNavigation/>} />
      </Routes> 
    </div>
  )
}

export default App