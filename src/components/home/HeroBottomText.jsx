import React from 'react'
import { Link } from 'react-router-dom'

const HeroBottomText = () => {
  return (
    <div className=' font-[font2]' >
      <Link to='/projects' className='border-2  leading-[6vh] border-white font-bold text-white bg-transparent text-[6vw] pt-2  uppercase px-7 hover:text-[#d3fd50] hover:border-[#d3fd50] rounded-full' >Projets</Link>
      <Link to='/agence' className='border-2  leading-[6vh] px-7 hover:text-[#d3fd50] hover:border-[#d3fd50] border-white font-bold text-white bg-transparent text-[6vw] pt-2  uppercase rounded-full' >Agence</Link>
    </div>
  )
}

export default HeroBottomText