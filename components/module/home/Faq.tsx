

export default function Faq() {

  const faqs = [
  { q: "How do I become a verified Agent?", a: "Register as a user first, then apply for an Agent role from your dashboard. Our admin will review your credentials." },
  { q: "Are all property listings verified?", a: "Yes, every listing goes through a manual verification process by our admin team before appearing in search." },
  { q: "Can I manage my wishlist?", a: "Absolutely! Logged-in users can save properties to their wishlist and track price changes." },
];

  return (
 <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="w-8 h-0.5 bg-[#e8a838] rounded mx-auto mb-3" />
        <h2 className="text-3xl font-medium text-center text-[#1a3c5e] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          Everything you need to know about ShineSpace
        </p>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl border border-gray-200 open:border-[#1a3c5e] [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4">
                <h3 className="font-medium text-[#1a3c5e] text-sm">{f.q}</h3>
                <span className="w-6 h-6 rounded-full bg-gray-100 group-open:bg-[#e8a838] flex items-center justify-center text-[#1a3c5e] group-open:text-white text-sm transition-colors flex-shrink-0">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="px-5 pb-4 pt-3 text-sm text-gray-500 leading-relaxed border-t border-gray-100">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
