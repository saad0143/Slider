import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='w-full  h-auto py-10'>
                <div className='flex-col justify-center py-1'>
                    <h1 className='sm:text-4xl text-2xl font-medium'>Make Your First {" "}
                        <span className='bg-black text-[#b3e9a5]'>
                              $1,000 
                        </span>
                        {" "} Online
                    </h1>
                    <p className='sm:text-md text-sm py-2 text-center sm:px-0 px-10'>
                    Learn what to sell & who to sell it to. Sign your first client & start getting paid.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Hero
