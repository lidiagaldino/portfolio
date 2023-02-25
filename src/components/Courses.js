import React from 'react'

import { services } from '../data'

const Courses = () => {
    return (
        <section id='services' className='section bg-tertiary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className="section-title before:content-courses relative before:absolute before:opacity-20 before:-top-[2rem] before:left-7 before:hidden before:lg:block">What and where I studied</h2>
                </div>
            </div>

            <div className='grid lg:grid-cols-4 gap-8'>
                {services.map((service, index) => {
                    const { icon, name, description } = service
                    return (
                        <div className='bg-secondary p-6 mx-2 rounded-2xl' key={index}>
                            <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[-28px]'>
                                {icon}
                            </div>
                            <h4>
                                {name}
                            </h4>
                            <p>{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Courses