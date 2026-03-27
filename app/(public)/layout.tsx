

import Footer from '@/components/module/Footer'
import Navbar from '@/components/module/Navbar'
import React from 'react'

export default function PublicLayout({children}:{children:React.ReactNode}) {
  return (
       <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <main className="flex-1">
         {children}
        </main>
        <Footer></Footer>
        </div>
  )
}
