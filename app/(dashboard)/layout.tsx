
import Sidebar from '@/components/module/dashboard/Sidebar'
import React from 'react'

export default function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex gap-5'>
        <div className='w-3xl'>
         <Sidebar></Sidebar>
        </div>
        <div>
            {children}
        </div>
  
    </div>
  )
}
