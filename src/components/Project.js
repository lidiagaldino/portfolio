import React from 'react'

const Project = ({ item }) => {
    const handleClick = () => {
        window.open(item.link)
    }

    return (
        <div onClick={handleClick} key={item.id} className='flex flex-col items-center text-center'>
            <div className='mb-8'>
                <img className='rounded-2x1' src={item.image} alt=''></img>
            </div>
            <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
            <h3 className='text-2x1 font-semibold capitalize mb-3'>{item.name}</h3>
        </div>
    )
}

export default Project