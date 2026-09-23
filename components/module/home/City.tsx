/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { GetAllPropertyApi } from "@/lib/server.api";
import { IProperty } from "@/types";

const cities = [
  { name: "Dhaka", img: "/cities/dhaka.jpg" },
  { name: "Chattogram", img: "/cities/chattogram.jpg" },
  { name: "Rajshahi", img: "/cities/rajshahi.jpg" },
  { name: "Chapai Nawabganj", img: "/cities/chapai.jpg" },
];

export default async function Cities() {
  const res = await GetAllPropertyApi();
  const properties: IProperty[] = res?.data || [];

  const list = cities.map((c) => ({
    ...c,
    count: properties.filter((p: any) => p.city === c.name).length,
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