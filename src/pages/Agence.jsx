import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import { assets } from '../assets/asset'


const Agence = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  const imageArray = [
    assets.carl,
    assets.michele,
    assets.cammel,
    assets.chantal,
    assets.hugo,
    assets.joel,
    assets.lawar,
    assets.mel,
    assets.sophie,
    assets.oiliever,
    assets.meggie
  ]

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 55%",
        end: "top -12%",
        scrub: true,
        pin: true,
        onUpdate: (e) => {
          let imageIndex
          if (e.progress < 1) {
            imageIndex = Math.floor(e.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })
  return (
    <div>
      <div className='section1 py-1' >
        <div ref={imageDivRef} className=' w-[16vw] rounded-3xl left-[30%] h-[20vw] top-[55%] absolute ' >
          <img className='rounded-3xl' loading='lazy' ref={imageRef} src="image" alt="sdf" />
        </div>
        <div className='font-[font2] relative z-10 leading-[17vw] text-center mt-[50%] uppercase' >
          <h1 className='text-[20vw]' >soixan7e<br />douze</h1>
        </div>
        <div className=' relative w-[50%] ml-[45%] font-[font2] text-4xl' >
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sit. Nam vero impedit neque saepe deleniti, sint nulla eligendi vel, tempore repellat asperiores at, excepturi earum aspernatur necessitatibus animi dignissimos!</p>
        </div>
      </div>
      <div className='w-full h-screen' >
      </div>
    </div>
  )
}

export default Agence