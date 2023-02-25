import React from 'react'

import Image from '../assets/img/catPic.png'

const About = () => {
    return (
        <section id='about' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img className='object-cover h-80 w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt=''></img>
                </div>
                <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                    <div className='flex flex-col'>
                        <h2 className='text-3xl lg:text-3xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block '>
                            Lídia Galdino
                        </h2>
                        <p className='mb-4 text-accent'>Full Stack Developer</p>
                        <hr className='mb-8 opacity-5' />
                        <p className='mb-8'>Hello, my name is Lídia Galdino. In this portfolio, you can find records of my evolution.
                            I'm always learning and updating myself on the latest developments in the DEV world.</p>
                    </div>

                    <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'><a href='mailto:lidia.galdino@outlook.com'>Contact Me</a></button>
                </div>
            </div>
        </section>
    )
}

export default About