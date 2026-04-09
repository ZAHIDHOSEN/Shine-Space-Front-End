import Image from "next/image";


export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-amber-500 uppercase bg-gray-100 rounded-full">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Redefining the Real Estate Experience in Bangladesh
          </h2>
          <p className="text-slate-600 text-lg mb-6">
            TerraSync was born out of a simple idea: making property search transparent, fast, and secure. We bridge the gap between dream homes and eager buyers through cutting-edge technology.
          </p>
          <p className="text-slate-600 text-lg">
            Our platform ensures that every listing is verified, every agent is professional, and every user journey is seamless from the first click to the final handshake.
          </p>
        </div>
<div className="lg:w-1/2 w-full h-[400px] bg-slate-200 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
    <Image 
    src={`https://i.postimg.cc/KcH0fZnx/frames-for-your-heart-m-R1CIDdu-GLc-unsplash.jpg`} 
    alt="image" 
    fill
    className="object-cover" 
    />
  </div>
      </div>
    </section>
    

  );
}