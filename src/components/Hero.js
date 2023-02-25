import React from 'react'

import Cat from '../assets/img/cat.png'

const Hero = () => {
    return (
        <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
            <div className='container mx-auto h-full'>
                <div className='flex items-center h-full pt-8'>
                    <div className='flex-1 flex flex-col items-center lg:items-start'>
                        <p className='text-lg text-accent mb-[22px]'>Hi, i'm Lídia</p>
                        <h1 className='text-4x1 leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>I am a <br /> Full Stack Developer</h1>
                        <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'></p>
                    </div>

                    <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
                        <img src={Cat} alt=""></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero