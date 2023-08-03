"use client"

import './globals.css'

import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import Directory from './components/Directory'
import Footer from './components/Footer'
import Providers from './providers'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" className='light' style={{ colorScheme: 'light' }}>
      <body>
        <Providers>

          <div 
          className='flex flex-row w-1070 min-h-700 mx-auto mt-24 max-md:mt-4 mb-20 
          max-lg:w-full
          max-md:flex-col '>
            <Nav />
            
            <div className={`flex flex-col min-h-full w-2/3 border border-transparent border-l-gray-400
            p-4 pl-6 pt-0 ${inter.className}
            max-md:border max-md:w-full max-md:pt-6 max-md:h max-md:border-transparent max-md:border-t-gray-400`}>
              <Directory />
              {children}
              <Footer classProps='md:opacity-0 md:hidden'/>
            </div>
          </div>
          
        </Providers>
      </body>
    </html>
  )
}
