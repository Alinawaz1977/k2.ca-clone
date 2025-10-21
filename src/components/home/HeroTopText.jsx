import React from 'react'
import HeroVideo from './HeroVideo'

const HeroTopText = () => {
  return (
    <div className='text-[9.5vw] pt-2 leading-[12vh] font-[font1]  uppercase text-white text-center' >
      <div className='' >L'étincelle</div>
      <div className='flex items-center justify-center  ' >qui <div className= ' w-[16vw] h-[10vh] rounded-full overflow-hidden mb-5 ' ><HeroVideo /></div>génère</div>
      <div>la <span className='ml-3' >créativité</span></div>
    </div>
  )
}

export default HeroTopText