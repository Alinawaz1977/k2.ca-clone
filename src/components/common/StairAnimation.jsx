import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const StairAnimation = (props) => {
    const location = useLocation()
    const appRef = useRef(null)
    useGSAP(() => {
        const timeLine = gsap.timeline()
        timeLine.to(".stairParent", {
            display: "block"
        })
        timeLine.from('.stair', {
            height: 0,
            stagger: {
                amount: -.15
            }
        })
        timeLine.to('.stair', {
            y: "100%",
            stagger: {
                amount: -.15
            }
        }),
            timeLine.to('.stairParent', {
                display: "none"
            }),
            timeLine.to('.stair', {
                y: "0%"
            }),
            timeLine.from(appRef.current, {
                opacity: 0,
                duration: .1,
            })
    }, [location])
    return (
        <div>
            <div className='stairParent h-screen w-full fixed top-0 z-30' >
                <div className=' flex h-full w-full' >
                    <div className='stair h-full w-1/5 bg-black' ></div>
                    <div className='stair h-full w-1/5 bg-black' ></div>
                    <div className='stair h-full w-1/5 bg-black' ></div>
                    <div className='stair h-full w-1/5 bg-black' ></div>
                    <div className='stair h-full w-1/5 bg-black' ></div>
                </div>
            </div>
            <div ref={appRef} >
                {props.children}
            </div>
        </div>
    )
}

export default StairAnimation