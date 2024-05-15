'use client'
import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation';
import {RxCross2} from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react';


function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };
  return (
    <form  onSubmit={handleSubmit}
    className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center'>
      <input 
      type="text"
      className='w-full focus:outline-none'
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2 onClick={() => setTerm('')} 
      className='text-2xl text-gray-500 cursor-pointer sm:mr-2'
       />
      <AiOutlineSearch onClick={handleSubmit}
        className='text-3xl hidden sm:inline-flex text-blue-500 border-l-2  border-gray-300 mr-0 pl-2
      cursor-pointer'/>
    </form>
  )
}

export default SearchBox