import AdminForm from '@/components/module/dashboard/AdminForm'
import { getMeApi } from '@/lib/server.api'
import React from 'react'

export default async function AdminProfilePage() {
      let users = {
        _id:"",
        name:"",
        email:"",
       
      }
      try {
        const res = await getMeApi()
         users = res?.data ?? users
        console.log(users)
      } catch (error) {
        console.log(error)
      }
  return (
     <div>
        <h3 className="text-2xl text-center">My Profile</h3>
          <AdminForm me={users}></AdminForm>
      </div>
  )
}
