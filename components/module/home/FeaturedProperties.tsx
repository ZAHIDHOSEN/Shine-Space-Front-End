import Link from "next/link";
import PropertyCard from "@/components/module/property/PropertyCard";
import { GetAllPropertyApi } from "@/lib/server.api";
import { IProperty } from "@/types";


export default async function FeaturedProperties() {
  const res = await GetAllPropertyApi();
  const properties: IProperty[] = res?.data || [];
  const featured = properties.slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#1a3c5e]">
          Featured <span className="text-[#e8a838]">Properties</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Hand-picked, verified listings across Bangladesh
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/property"
          className="inline-block border border-[#1a3c5e] text-[#1a3c5e] px-6 py-2 rounded-lg hover:bg-[#1a3c5e] hover:text-white transition"
        >
          View All Properties
        </Link>
      </div>
    </section>
  );
}