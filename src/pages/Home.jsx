import React from 'react'
import HeroVideo from '../components/home/HeroVideo'
import HeroTopText from '../components/home/HeroTopText'
import HeroBottomText from '../components/home/HeroBottomText'

const Home = () => {
  return (
    <div className='h-screen w-full' >
      <div className='h-screen w-screen fixed' >
        <HeroVideo />
      </div>
      <div className='relative w-full h-[91vh] ' >
        <HeroTopText />
      </div>
      <div className='relative z-30 text-center ' >
        <HeroBottomText />
      </div>
    </div>
  )
}

export default Home