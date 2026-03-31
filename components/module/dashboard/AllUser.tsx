
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getAllUserApi } from "@/lib/server.api";

import { IUser } from '@/types'

export default async function AllUser() {
  
 let users: IUser[] = [];

  try {
    const res = await getAllUserApi();
    users = res?.data ?? [];
  } catch (err) {
    return (
      <div className="text-red-500 p-4 rounded-lg bg-red-50 border border-red-200">
        Failed to load users. Make sure you are logged in as Admin.
      </div>
    );
  }  

  const handlePromoteAgent = async(id:string)=>{
      try {
        
      } catch (error) {
        console.log(error)
      }
  }
 
  return (

    <div>
      <h3 className="text-2xl font-semibold text-center my-2">All Users</h3>
          <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className=''>
          <TableHead className="w-[200px] text-xl font-semibold">Name</TableHead>
          <TableHead className="w-[200px] text-xl font-semibold">Email</TableHead>
          <TableHead className="w-[200px] text-xl font-semibold">Role</TableHead>
          <TableHead className="w-[200px] text-xl font-semibold">Joined</TableHead>
          <TableHead className="w-[200px] text-xl font-semibold">Action</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.createdAt}</TableCell>
            
            
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
    </div>
 
   
  
  )
}
