"use client"
import { IProperty } from "@/types";
import Image from "next/image";
import Link from "next/link";



export default function PropertyCard({property}:{property:Partial<IProperty>}) {







  return (
   <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition">
      
      {/* Image */}
      <div className="relative w-full h-52">
        <Image
          src={property.images || "/placeholder.png"}
          alt="image"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {property.title}
        </h2>

        {/* Price */}
        <p className="text-xl font-bold text-blue-600">
          ${property.price}
        </p>

        {/* Button */}
        <Link href={`/property/${property._id}`}>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}
