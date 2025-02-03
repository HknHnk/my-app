import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets.js'
import Link from 'next/link'
import { useRouter } from 'next/router'


const NoteItem = ({ title, description, category, image, id}) => {
    console.log('NoteItem id:', id); // Log the id
    console.log('NoteItem image:', image); // Log the image

    return (
        <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
            <Link href={`/note/${id}`}>
                <Image src={image} alt={title} width={400} height={400} className='border-b border-black' />
            </Link>
            <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
            <div className='p-5'>
                <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
                <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
                <Link href={`/note/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                    Read more <Image src={assets.arrow} className='ml-2' alt='Arrow' width={12} height={12} />
                </Link>
            </div>
        </div>
    );
}

export default NoteItem