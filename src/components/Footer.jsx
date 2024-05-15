import React from 'react'
import CountryLookups from './CountryLookups'

function Footer() {
  return (
    <footer className='absolute bottom-0 
    txt-sm text-gray-500 bg-[#f2f2f2] w-full'>
        <div className='border-b px-8 py-1'>
     <CountryLookups/>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-1 space-y-7 sm:space-y-0'>
        <ul className='flex items-center space-x-6'>
          <li className='hover:underline cursor-pointer'>About</li>
          <li className='hover:underline cursor-pointer'>Advertising</li>
          <li className='hover:underline cursor-pointer'>Business</li>
          <li className='hover:underline cursor-pointer'>How Search works</li>
        </ul>
        <ul className='flex items-center space-x-6'>
          <li className='hover:underline cursor-pointer'>Privacy</li>
          <li className='hover:underline cursor-pointer'>Terms</li>
          <li className='hover:underline cursor-pointer'>Settings</li>
        </ul>
      </div>
        </footer>
  )
}

export default Footer