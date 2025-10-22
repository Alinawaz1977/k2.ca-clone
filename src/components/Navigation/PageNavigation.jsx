import React, { useRef } from 'react'
import { assets } from '../../assets/asset.js'
import { useNavigate } from 'react-router-dom'
const PageNavigation = () => {
  const navigationVisibleRef = useRef(null)
  const navigation = useNavigate(null)
  return (
    <div className='w-full bg-black h-screen overflow-hidden' >
      <div className='mt-[70vw] md:mt-[20vw] cursor-pointer' >
        <div className='  text-center border-y leading-[6vw]  pt-4 relative border-gray-600 '>
          <h1 className='text-[8vw] uppercase font-[font2] text-white' >projects</h1>
          <div ref={navigationVisibleRef} className='flex moveX w-fit transform opacity-100 absolute top-0' >
            <div onClick={()=>navigation("/projets")} className='flex items-center shrink-0 pt-2 bg-[#d3fd50] opacity-0 hover:opacity-100  text-black font-[font2]' >
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className=' w-60 h-18 object-cover rounded-full ' src={assets.firstLineimage} alt="" />
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className=' w-60 h-18 object-cover rounded-full ' src={assets.firstLineimag2} alt="" />
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className='w-60 h-18 object-cover rounded-full ' src={assets.hugo} alt="" />
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className='w-60 h-22 object-cover rounded-full ' src={assets.hugo} alt="" />
            </div>
          </div>
        </div>
        <div className='  text-center border-b leading-[6vw]  pt-4 relative border-gray-600 '>
          <h1 className='text-[8vw] uppercase font-[font2] text-white' >agence</h1>
          <div ref={navigationVisibleRef} className='flex moveX w-fit transform opacity-100 absolute top-0' >
            <div onClick={()=>navigation("/agence")} className='flex items-center shrink-0 pt-2 bg-[#d3fd50] opacity-0 hover:opacity-100  text-black font-[font2]' >
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className=' w-60 h-18 object-cover rounded-full ' src={assets.secondlineImage} alt="" />
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className=' w-60 h-18 object-cover rounded-full ' src={assets.secondlineimage2} alt="" />
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className='w-60 h-18 object-cover rounded-full ' src={assets.hugo} alt="" />
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className='w-60 h-22 object-cover rounded-full ' src={assets.hugo} alt="" />
            </div>
          </div>
        </div>
        <div className='  text-center border-b leading-[6vw]  pt-4 relative border-gray-600 '>
          <h1 className='text-[8vw] uppercase font-[font2] text-white' >contact</h1>
          <div ref={navigationVisibleRef} className='flex moveX w-fit transform opacity-100 absolute top-0' >
            <div onClick={()=>navigation("/contact")} className='flex items-center shrink-0 pt-2 bg-[#d3fd50] opacity-0 hover:opacity-100  text-black font-[font2]' >
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className=' w-60 h-18 object-cover rounded-full ' src={assets.firstLineImage} alt="" />
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className=' w-60 h-18 object-cover rounded-full ' src={assets.firstLineImag2} alt="" />
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className='w-60 h-18 object-cover rounded-full ' src={assets.hugo} alt="" />
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className='w-60 h-22 object-cover rounded-full ' src={assets.hugo} alt="" />
            </div>
          </div>
        </div>
        <div className='  text-center border-b leading-[6vw]  pt-4 relative border-gray-600 '>
          <h1 className='text-[8vw] uppercase font-[font2] text-white' >blog</h1>
          <div ref={navigationVisibleRef} className='flex moveX w-fit transform opacity-100 absolute top-0' >
            <div onClick={()=>navigation("/blog")} className='flex items-center shrink-0 pt-2 bg-[#d3fd50] opacity-0 hover:opacity-100  text-black font-[font2]' >
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className=' w-60 h-18 object-cover rounded-full ' src={assets.fortLineImage} alt="" />
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className=' w-60 h-18 object-cover rounded-full ' src={assets.fortLineImage2} alt="" />
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className='w-60 h-18 object-cover rounded-full ' src={assets.hugo} alt="" />
              <h1 className=' text-[6vw] uppercase' >pour voit water</h1>
              <img className='w-60 h-22 object-cover rounded-full ' src={assets.hugo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNavigation