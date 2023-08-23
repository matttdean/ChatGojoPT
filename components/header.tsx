import Image from 'next/image'
import React from 'react'
import gojo from '../public/gojo.jpg'

export default function Header() {
  return (
        <div className='h-[7rem]  flex items-center justify-center bg-gray-600/20 backdrop-blur-lg fixed top-0 left-0 right-0 shadow-lg shadow-black/10'>
            <div className='w-[12rem] p-10 flex flex-col justify-center items-center'>
                <Image src={gojo} alt='Satoru Gojo' className='w-12 h-auto rounded-full mb-2 border border-white/20 shadow-md' />
                <h2 className='text-center text-gray-100'>Satoru Gojo</h2>
            </div>
        </div>
  )
}
