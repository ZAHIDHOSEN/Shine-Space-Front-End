/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { deletePropertyApi } from "@/lib/api";
import { IProperty } from "@/types";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";


export default function AllPropertyTable({initialProperty}:{initialProperty:IProperty[]}) {
    const [property,setProperty] = useState<IProperty[]>(initialProperty)
    const [updateProperty,setUpdateProperty] =useState<string | null>(null) 
    const [deleProperty,setDeleteProperty] = useState<string | null>(null)

  const handlePropertyDelete = async(id:string)=>{

  const result = await Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed){
    try {
    deletePropertyApi(id)
    Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });

  setProperty(prev =>prev.filter(p=>p._id !==id))

      
    } catch (error) {
      console.log(error)
    }
    
  } 
});

 
   }




  
 



  return (
    <div>
          <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className=''>
          <TableHead className="w-[200px] text-xl font-semibold">Title</TableHead>
          <TableHead className="w-[200px] text-xl font-semibold">Status</TableHead>
          <TableHead className="w-[200px] text-xl font-semibold">Date</TableHead>
          <TableHead className="w-[200px] text-xl font-semibold">Update</TableHead>
          <TableHead className="w-[200px] text-xl font-semibold">Delete</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {property.map((property) => (
          <TableRow key={property._id}>
            <TableCell className="font-medium">{property.title}</TableCell>
            <TableCell>{property.status}</TableCell>
            <TableCell>{property.createdAt}</TableCell>
            <TableCell><Link href={`/`}><Button>update</Button></Link></TableCell>
            <TableCell><Button onClick={()=>handlePropertyDelete(property._id)}>Delete</Button></TableCell>
           
            
          </TableRow>
        ))}
      </TableBody>
    
    </Table>
    </div>
  )
}
