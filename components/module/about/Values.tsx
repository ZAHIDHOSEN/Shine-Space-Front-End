import { ShieldCheck, Zap, Heart } from 'lucide-react';

const values = [
  { 
    icon: ShieldCheck, 
    title: "Unmatched Trust", 
    desc: "We manually verify every property listing in our database to ensure zero fake advertisements for our users." 
  },
  { 
    icon: Zap, 
    title: "Fast Innovation", 
    desc: "Built on the MERN stack, we provide a lightning-fast search and filter experience that saves you time." 
  },
  { 
    icon: Heart, 
    title: "User-Centric", 
    desc: "Our platform is built for the community. We prioritize the needs of buyers and agents over corporate profit." 
  },
];

export default function Values() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Values We Live By</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="group p-10 bg-white rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-50 text-[#e8a838] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <v.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
              <p className="text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}