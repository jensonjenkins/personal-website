"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import Directory from './components/Directory'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'About | Dave Gunawan',
  description: 'Personal Website',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [darkMode, setDarkMode] = useState(false);
  const handleModeChange = (value:boolean)=>{
    setDarkMode(value);
  }

  return (
    <html lang="en">
      <div className='flex flex-row w-1070 min-h-700 mx-auto mt-24 mb-20'>
        <Nav />
        <div className={`flex flex-col min-h-full w-2/3 border border-transparent border-l-gray-400 p-4 pl-6 pt-0 ${inter.className}`}>
          <Directory/>
          {children} 
        </div>
      </div>
    </html>
  )
}
