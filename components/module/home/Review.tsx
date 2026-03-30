import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: "Zahid Hosen", role: "Property Buyer", text: "Found my dream apartment in Chapai Nawabganj within a week. The verification process is top-notch!", rating: 5 },
  { name: "Sarah Khan", role: "Real Estate Agent", text: "As an agent, TerraSync provides the best dashboard for managing my listings and tracking inquiries.", rating: 5 },
  { name: "Rakib Uddin", role: "Home Owner", text: "The interface is so clean and easy to use. Highly recommended for anyone looking to sell fast.", rating: 4 },
];

export default function Review() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">What Our Community Says</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative">
              <Quote className="absolute top-6 right-6 text-blue-200" size={40} />
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-slate-600 mb-6 italic">{r.text}</p>
              <div>
                <h4 className="font-bold text-slate-900">{r.name}</h4>
                <p className="text-sm text-slate-500">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}