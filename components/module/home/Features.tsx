import { ShieldCheck, Map, Zap, Headphones } from 'lucide-react';

const features = [
  {
    title: "Verified Listings",
    desc: "Every property goes through a rigorous background check to ensure 100% authenticity.",
    icon: <ShieldCheck size={28} className="text-[#e8a838]" />
  },
  {
    title: "Smart Mapping",
    desc: "Interactive map tools tailored specifically for the Bangladesh geography and landmarks.",
    icon: <Map size={28} className="text-[#e8a838]" />
  },
  {
    title: "Instant Alerts",
    desc: "Get notified immediately when a property matching your criteria hits the market.",
    icon: <Zap size={28} className="text-[#e8a838]" />
  },
  {
    title: "Expert Support",
    desc: "Our dedicated team is available 24/7 to guide you through legal documentation.",
    icon: <Headphones size={28} className="text-[#e8a838]" />
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mb-4">Why Choose ShineSpace</h2>
          <div className="w-16 h-1 bg-[#e8a838] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-gray-100 hover:border-[#e8a838]/30 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
              <div className="w-14 h-14 bg-[#f8fafc] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1a3c5e] mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}