
import Sidebar from '@/components/module/dashboard/Sidebar'
import ProtectedRoute from '@/components/module/ProtectedRoute'
import React from 'react'

export default function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
      
         <div className='flex gap-5'>
        <div>
         <Sidebar></Sidebar>
        </div>
        <div className='max-w-7xl w-full mx-auto my-5'>
           {children}
      </div>
  
    </div>
   
  
 
  )
}
