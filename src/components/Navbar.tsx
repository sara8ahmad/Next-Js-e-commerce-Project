'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default () => {

    const [state, setState] = useState(false)
    const[open , setOpen] = useState(false)

    const handleOpen = () => {
      setOpen(curr => !curr)
    }

    // Replace  paths with your paths
    const navigation = [
        { title: "Home", path: "/" },
        { title: "Shop", path: "/products" },
        { title: "About", path: "" },
        { title: "Contact us", path: "" }
    ]

    return (
        <nav className="bg-white border-b w-full shadow-lg absolute top-0 z-10 font-medium  md:fixed md:text-base md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center object-fill justify-between md:block">
                    <a href="">
                        <Image
                            src="/assets/2.png"
                            width={150}
                            height={50}
                            alt=""
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-700 flex gap-5 hover:text-indigo-600">
                                        <Link href={item.path} className="block">
                                            {item.title}
                                        </Link>
                                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                                    </li>
                                    
                                )
                            })
                        }
                        <div className='flex'> <FaCartShopping /><span>2</span> </div>
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li>
                            <div className="relative"><div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                                <a
                                href="#"
                                className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                                >
                                <FaUser/>
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
                                        Profile
                                    </a>

                                    <a
                                        href="#"
                                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                        role="menuitem"
                                    >
                                       Login in 
                                    </a>

                                    <a
                                        href="#"
                                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                        role="menuitem"
                                    >
                                        Sign up
                                    </a>

                                    <a
                                        href="#"
                                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                        role="menuitem"
                                    >
                                       Settings
                                    </a>

                                    
                                    </div>
                                </div>
                                </div>
  
                            </li>
                            
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}