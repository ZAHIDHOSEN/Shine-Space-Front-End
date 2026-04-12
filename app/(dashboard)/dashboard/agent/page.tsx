export const dynamic = "force-dynamic" 
import UserForm from '@/components/module/UserForm'
import { getMeApi } from '@/lib/server.api'
import React from 'react'

export default async function AgentPage() {
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
          <UserForm me={users}></UserForm>
      </div>
  )
}
