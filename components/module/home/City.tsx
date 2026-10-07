/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { GetAllPropertyApi } from "@/lib/server.api";
import { IProperty } from "@/types";

const cityImages: Record<string, string> = {
  Dhaka: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
  Chittagong: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800&q=80",
  Rajshahi: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=800&q=80",
  "Chapai Nawabganj": "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?w=800&q=80",
};

export default async function Cities() {
  const res = await GetAllPropertyApi();
  const properties: IProperty[] = res?.data || [];

 const cityNames = [...new Set(properties.map((p) => p.location.city))];

 const list = cityNames.map((name) => ({
  name,
  img: cityImages[name] || "/cities/default.jpg",
  count: properties.filter((p) => p.location.city === name).length,
}));


  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1a3c5e]">
            Explore by <span className="text-[#e8a838]">City</span>
          </h2>
          <p className="text-gray-500 mt-2">Find properties in the city you love</p>
        </div>

        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {list.map((c) => (
            <Link
              key={c.name}
              href={`/property?city=${encodeURIComponent(c.name)}`}
              className="group relative h-64 rounded-xl overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.name} className="h-full w-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{c.name}</h3>
                <p className="text-sm opacity-90">{c.count} {c.count === 1 ? "Property" : "Properties"}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}