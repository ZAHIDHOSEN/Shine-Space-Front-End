
import Sidebar from '@/components/module/dashboard/Sidebar'
import ProtectedRoute from '@/components/module/ProtectedRoute'
import React from 'react'

export default function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
      
      <div className='flex h-screen overflow-hidden bg-gray-50 gap-5'>
        <div className='hidden md:flex flex-col w-64 bg-white border-r'>
         <Sidebar></Sidebar>
        </div>
        {/* main content */}
      <main className='flex-1 flex flex-col min-w-0 overflow-hidden'>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className='max-w-7xl w-full mx-auto my-5'>
          {children}
       </div>
        </div>
       </main>
           
     
  
    </div>
   
  
 
  )
}
