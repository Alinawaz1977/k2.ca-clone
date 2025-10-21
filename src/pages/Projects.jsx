import React from 'react'
import { assets } from '../assets/asset'
import ProjetCard from '../components/projects/ProjetCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {
  const projectsImages = [{
    "image1": assets.first,
    "image2": assets.second,
  },
  {
    "image1": assets.third,
    "image2": assets.four,
  },
  {
    "image1": assets.five,
    "image2": assets.six
  },
  {
    "image1": assets.seven,
    "image2": assets.eight,
  },
  {
    "image1": assets.nine,
    "image2": assets.tenth,
  },
  {
    "image1": assets.eleven,
    "image2": assets.twelth,
  }
  ]
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from(".card", {
      stagger:.2,
      height: 10,
      scrollTrigger:{
        trigger:".card",
        markers:true,
        scrub:2,
        start:"top 80%",
        end:"top -200%",
      }
    })
  })

  return (
    <div className='px-3' >
      <div className='flex gap-1 uppercase pb-2 pt-[40%]' >
        <h1 className='text-[16vw] leading-[10vw] font-[font2]' >Projets</h1>
        <p className='font-[font2] text-4xl leading-0 ' >16</p>
      </div>
      {
        projectsImages.map((item, index) => (
          <div className='card' >
            <ProjetCard key={index} image1={item.image1} image2={item.image2} />
          </div>
        ))
      }
    </div>
  )
}

export default Projects