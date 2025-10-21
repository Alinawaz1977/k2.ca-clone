import React from 'react'
import HeroVideo from './HeroVideo'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HeroTopText = () => {
  useGSAP(()=>{
    gsap.from(".text",{
      y:-600,
      opacity:0,
      delay:3,
    })
  })
  return (
    <div className=' pt-2 leading-[12vh] 2xl:leading-[20vh] font-[font1]  uppercase text-white text-center' >
      <div className='text-[9.5vw]  text  overflow-hidden ' >L'étincelle</div>
      <div className='flex  overflow-hidden text items-center justify-center text-[9.5vw]  ' >qui <div className= ' overflow-hidden text-[9.5vw] w-[16vw] h-[10vh] rounded-full  mb-5 ' ><HeroVideo /></div>génère</div>
      <div className=' text text-[9.5vw]' >la <span className='ml-3 text-[9.5vw]' >créativité</span></div>
    </div>
  )
}

export default HeroTopText