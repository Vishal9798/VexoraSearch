import React from 'react'
import HomeHeader from '../components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
function Home() {
  return (
    <>
    <HomeHeader />
    <div className='flex flex-col items-center mt-8'>
      <img
      src="/aa.png"
      alt="Logo"
      width={150}
      height={50}
      background="white"
      />
      <HomeSearch />
    </div>
    </>
  )
}

export default Home