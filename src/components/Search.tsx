import React, { useState } from 'react'
import { RiMenu2Fill } from 'react-icons/ri'

const Search = () => {
    const[open , setOpen] = useState(false)

    const handleOpen = () => {
      setOpen(curr => !curr)
    }


  return (
    <div className='mt-24 grow shrink basis-[100%] bg-gray-100 flex flex-col gap-3 justify-around items-center p-6 md:flex-row'>
  
    <div className="relative w-[100%] md:w-[50%] ">
    <label htmlFor="Search" className="sr-only"> Search </label>
  
    <input
      type="text"
      id="Search"
      placeholder="Search For Products Here"
      className="w-full focus:outline-none rounded-md border-gray-200 py-3 pe-10 px-4 shadow-sm sm:text-sm"
       
    />
  
    <span className="absolute bg-gray-100 inset-y-0 end-0 grid w-10 place-content-center">
      <button type="button" className="text-gray-600  hover:text-gray-700">
        <span className="sr-only">Search</span>
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="black"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </span>
  </div>

 
                          
<div className="relative">
    <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
    <a
    href="#"
    className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
    >
    <RiMenu2Fill />
    </a>

        <button onClick={handleOpen} className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
        <span className="sr-only">Menu</span>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
            />
        </svg>
        </button>
    </div>

    <div
        className={`absolute md:end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg ${open ? 'block' : 'hidden'}`}
        role="menu"
    >
        <div className="p-2">
        <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
        >
            Clothes
        </a>

        <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
        >
            Perfumes
        </a>

        <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
        >
            Jewelyers
        </a>

        <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
        >
            Kids
        </a>

        
        </div>
    </div>
    </div>
          
      </div>
  )
}

export default Search