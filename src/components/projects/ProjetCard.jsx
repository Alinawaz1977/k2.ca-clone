import React from 'react'

const ProjetCard = ({ image1, image2
}) => {
    return (
        <div>
            <div>
                <div className='flex flex-col md:flex-row gap-2 h-fit leading-0 md:my-4 w-full ' >
                    <div className=' w-full sm:w-1/2 group overflow-hidden  relative  md:h-[50vh] hover:rounded-4xl transition-all flex items-center justify-center' >
                        <img className=' object-cover transition-all w-full h-full' src={image1} alt="projetimage" />
                        <div className='flex opacity-0  group-hover:opacity-100 justify-center items-center absolute top-0 right-0 w-full h-full bg-black/20' >
                            <h1 className='font-[font1] cursor-pointer text-[5vw] px-6 pt-2 leading-[5vw] text-white border-2 uppercase border-white w-fit rounded-full' >voir le projet</h1>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 group overflow-hidden  relative md:h-[50vh] hover:rounded-4xl transition-all flex items-center justify-center' >
                        <img className=' object-cover  transition-all w-full h-full' src={image2} alt="projetimage" />
                        <div className='flex opacity-0  group-hover:opacity-100 justify-center items-center absolute top-0 right-0 w-full h-full bg-black/20' >
                            <h1 className='font-[font1] cursor-pointer text-[5vw] px-6 pt-2 leading-[5vw] text-white border-2 uppercase border-white w-fit rounded-full' >voir le projet</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjetCard