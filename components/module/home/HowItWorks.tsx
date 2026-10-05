import { Search, UserCheck, Key } from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "Search Property",
    desc: "Explore verified listings using smart filters tailored to your preferred location and budget.",
    icon: <Search size={26} className="text-[#e8a838]" />
  },
  {
    step: "02",
    title: "Connect with Agent",
    desc: "Schedule property tours and talk directly with our expert real estate agents for guidance.",
    icon: <UserCheck size={26} className="text-[#e8a838]" />
  },
  {
    step: "03",
    title: "Move In",
    desc: "Finalize legal documentation securely and get the keys to your dream space smoothly.",
    icon: <Key size={26} className="text-[#e8a838]" />
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#e8a838] font-semibold text-sm uppercase tracking-wider mb-2 block">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mb-4">How ShineSpace Works</h2>
          <div className="w-16 h-1 bg-[#e8a838] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="bg-white group p-8 rounded-2xl border border-gray-100 hover:border-[#e8a838]/30 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Big Step Number Watermark */}
              <span className="absolute top-4 right-6 text-6xl font-black text-gray-100 group-hover:text-[#e8a838]/10 transition-colors select-none">
                {item.step}
              </span>

              {/* Icon Container */}
              <div className="w-14 h-14 bg-[#f8fafc] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 border border-gray-100">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1a3c5e] mb-3 relative z-10">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}