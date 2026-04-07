export const dynamic = "force-dynamic" 
import { getSinglePropertyApi } from "@/lib/server.api"

import Image from "next/image"


 

export default async function PropertyDetails({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    console.log(id)

    const res = await getSinglePropertyApi(id)
    const property = await res.data
    console.log(property)
  



  return (
    <div>
      <div className="relative h-64">
        <Image src={property.images} alt="property-image" fill className="object-cover"></Image>
     </div>
     <div className="md:flex justify-around p-4 my-2">
      <div>
      <h3 className="font-bold text-2xl">{property.title}</h3>
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
      </div>
      <div>
           {/* location */}
       <h3 className="font-bold text-xl">Location:</h3>
       <p>{property.location.address}</p>
       <p>{property.location.city}</p>
       <p>{property.location.area}</p>
      </div>
      <div>
         {/* agent */}
         <h3 className="font-bold text-xl">Agent:</h3>
         <p>{property.agentId.name}</p>
         <p>{property.agentId.email}</p>
         <p>{property.agentId.role}</p>



      </div>
     
    
     


    
     </div>
    </div>
   
  )
}
