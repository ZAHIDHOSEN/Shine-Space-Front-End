import Image from "next/image";


export default function AboutBanner() {
  return (
   <section className="relative w-full h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={`https://i.postimg.cc/D0J0sgcT/pixasquare-4ojhpg-Kp-S68-unsplash.jpg`} // High-quality property image
          alt="Luxury Modern Home"
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
            Discover Your <span className="text-[#1a3c5e]">Dream Home</span>
          </h1>
          {/* <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Explore thousands of premium listings in your favorite neighborhoods.
          </p> */}
  
          {/* Integrated Search Bar */}
          {/* <div className="bg-white/95 p-4 rounded-lg shadow-2xl flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <input className="flex-1 p-3 border rounded text-gray-800" placeholder="Location (City, Zip...)" />
            <select className="flex-1 p-3 border rounded text-gray-800">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-bold transition">
              Search
            </button>
          </div> */}
        </div>
      </section>
  )
}

