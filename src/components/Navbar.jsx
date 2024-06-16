import React from 'react'
import logo from '../assets/logo.png'
import { MoveUpRight } from 'lucide-react'
const Navbar = () => {
    return (
        <>
            <div className='w-full h-auto py-5 sm:px-48 px-5 flex justify-between items-center  '>
                {/* logo */}
                <div>
                    <img src={logo} alt='logo' className='h-24 w-24 rounded-full object-cover' />
                </div>
                <button className='cursor-pointer'>
                <div className='w-auto py-3 px-6 bg-black text-[#b3e9a5] rounded-lg flex items-center 
                justify-center no-underline uppercase'>
                    <p className='text-md font-medium'>
                        Join Now
                    </p>
                    <MoveUpRight size={22} className='ml-2' />
                </div>
                </button>
                

            </div>
        </>
    )
}

export default Navbar
