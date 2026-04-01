import React from 'react'
 

export default async function PropertyDetails({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    console.log(id)
  return (
    <div>
     
    </div>
  )
}
