export const dynamic = "force-dynamic" 
import { getSinglePropertyApi } from "@/lib/server.api"
import { Divide } from "lucide-react"
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime"
import Image from "next/image"


 

export default async function PropertyDetails({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    console.log(id)

    const res = await getSinglePropertyApi(id)
    const property = await res.data
    console.log(property)
   


    // try {
    //   const res = await singlePropertyApi(id)
    //   property = res?.data ?? null
    // } catch (error) {
    //   console.log(error)
    // }

    // if(!property) return null;

    // const agent = typeof property.agentId ==="object" ?(property.agentId as IUser):null;
    // console.log(property)

    // const statusColor = 
    // property.status ==="AVAILABLE"
    // ? "bg-green-100 text-green-700"
    // : property.status === "RENTED"
    // ? "bg-yellow-100 text-yellow-700"
    //  : "bg-red-100 text-red-700";



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
