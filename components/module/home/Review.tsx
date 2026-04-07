import { Quote, Star } from 'lucide-react';

const reviews = [
  { name: "Zahid Hosen", role: "Property Buyer", text: "Found my dream apartment in Chapai Nawabganj within a week. The verification process is top-notch!", rating: 5 },
  { name: "Sarah Khan", role: "Real Estate Agent", text: "As an agent, TerraSync provides the best dashboard for managing my listings and tracking inquiries.", rating: 5 },
  { name: "Rakib Uddin", role: "Home Owner", text: "The interface is so clean and easy to use. Highly recommended for anyone looking to sell fast.", rating: 4 },
];

export default function Review() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a3c5e] mb-12">What Our Community Says</h2>
        <p className='text-center text-gray-500 text-sm mb-12'>
          Trusted by buyers,sellers, and agent across Bangladesh
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 relative">
              <Quote className="absolute top-4 right-5 text-[#e8a838] opacity-20 font-serif leading-none" size={40} />
              <div className="flex gap-1 mb-3">
                {[...Array(r.rating)].map((_, i) => <Star key={i} size={16} className="fill-[#e8a838] text-[#e8a838]" />)}
              </div>
              <p className="text-gray-500 text-sm mb-5 italic leading-relaxed">{r.text}</p>
              <div>
                <h4 className="font-medium text-sm text-[#1a3c5e]">{r.name}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
}