import React from 'react'

const footer = () => {

  return (
    <div>
        <footer className='bg-[#1E1E1E] text-white w-full h-60 flex flex-col justify-center gap-4 items-center'>
            <img className='w-56 h-auto' src="/Catatan Pena.svg" alt="" srcset="" />
            <p className='text-sm'>Setiap Goresan Penuh Makna</p>
            <p className='text-sm font-light'>Info penulis.</p>
            <img className='w-35' src="/social icons.svg" alt="" />
        </footer>
        <p className='text-sm px-[12px]'>© 2025 Catatan Pena. All rights reserved.</p>
    </div>
  )
}

export default footer