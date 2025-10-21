import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from "./pages/Agence"

import Projects from './pages/projects'
import Navbar from './components/Navigation/Navbar'
import { useEffect } from 'react'
import PageNavigation from './components/Navigation/PageNavigation'
const App = () => {


  return (
    <div className='w-full h-screen' >
      {/* <PageNavigation/> */}
       <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/navbar' element={<PageNavigation/>} />
      </Routes> 
    </div>
  )
}

export default App