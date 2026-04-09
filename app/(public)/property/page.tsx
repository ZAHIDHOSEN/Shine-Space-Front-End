export const dynamic = "force-dynamic"
import PropertyCard from '@/components/module/property/PropertyCard'
import { GetAllPropertyApi } from '@/lib/server.api'
import { IProperty } from '@/types';
import React from 'react'

export default async function PropertyPage() {

    const res = await GetAllPropertyApi();
    const properties: IProperty[] = res?.data || [];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#1a3c5e]">All <span className='text-[#e8a838]'>Properties</span> </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property: IProperty) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  )
}
