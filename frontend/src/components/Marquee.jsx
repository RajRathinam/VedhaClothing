import React from 'react'

const Marquee = ({contactInfo}) => {
    return (
        <section className='bg-primary text-lg text-white sticky top-0 left-0 pb-2 right-0 z-40'>
            <marquee>Location : <b className='text-[#e0c217cc]'>{contactInfo.address}</b>
            </marquee>
        </section>
    )
}

export default Marquee

