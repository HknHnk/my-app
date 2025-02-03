import React from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets.js';

const Header = () => {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Image src={assets.icon} width={180} alt='icon'className='w-[130px] sm:w-auto'></Image>
                <button className='flex items-center gap-2 font-medium py1 px-3 sm:py-3 sm:px-6 border border-solid border-black-[-7px_7px_0px_#000000'>Get started <Image src={assets.arrow}alt='arrow'></Image></button>
        </div>
        <div className='text-center my-8'>  
            <h1 className='text-3x1 sm:text-5x1 font-medium'>Latest Notes</h1>  
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'> This website is designed for learning, with notes detailing different gcses and A Level subjects, with practice questions divided by topics</p>
            <form className ='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' >
                <input type="email" placeholder = 'Enter your email' className = 'pl-4 outline-none'></input>
                <button type='submit' className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>

            </form>
        </div>
    </div>

    )
}

export default Header 