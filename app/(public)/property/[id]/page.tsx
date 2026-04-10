export const dynamic = "force-dynamic" 
import { getSinglePropertyApi, getToken } from "@/lib/server.api"
import { Badge, Banknote, Info, Mail, MapPin, ShieldCheck, User } from "lucide-react"
import Image from "next/image"
import { redirect } from "next/navigation"


export default async function PropertyDetails({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const token =await getToken()

    if(!token){
      redirect("/login")
    }

    let property = null
    

    try {
       const res = await getSinglePropertyApi(id)
       property = await res.data
      
    } catch (error) {
      console.log(error)
      redirect("/login")
    }
   
  if(!property) return null
  
  return (

    <main className="min-h-screen bg-gray-50/50 pb-12">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={property.images}
          alt={property.title}
          fill
          priority
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 mx-auto max-w-7xl px-4">
          <Badge className="mb-4 bg-[#e8a838] hover:bg-[#d49732] text-white border-none px-4 py-1">
            Featured Property
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {property.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-[#e8a838]">
                  <Banknote size={28} />
                  <span className="text-3xl font-bold text-[#1a3c5e]">
                    ${property.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1a3c5e] flex items-center gap-2">
                  <Info size={20} className="text-[#e8a838]" />
                  About this property
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#1a3c5e] mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-[#e8a838]" />
                Location Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Address</p>
                  <p className="text-gray-700 font-medium">{property.location.address}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Area</p>
                  <p className="text-gray-700 font-medium">{property.location.area}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">City</p>
                  <p className="text-gray-700 font-medium">{property.location.city}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Agent Info */}
          <div className="space-y-6">
            <div className="bg-[#1a3c5e] text-white p-8 rounded-2xl shadow-lg sticky top-24">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <User size={22} className="text-[#e8a838]" />
                Contact Agent
              </h3>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-2xl font-bold text-[#e8a838]">
                  {property.agentId.name?.[0]}
                </div>
                <div>
                  <p className="font-bold text-lg">{property.agentId.name}</p>
                  <Badge  className="text-[#e8a838] border-[#e8a838] mt-1 capitalize">
                    {property.agentId.role}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-lg">
                  <Mail size={18} />
                  <span className="text-sm truncate">{property.agentId.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-lg">
                  <ShieldCheck size={18} />
                  <span className="text-sm">Verified ShineSpace Partner</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-[#e8a838] hover:bg-[#f0b54f] text-[#1a3c5e] font-bold py-3 rounded-xl transition-all shadow-md">
                Send Inquiry
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
   
  )
}
