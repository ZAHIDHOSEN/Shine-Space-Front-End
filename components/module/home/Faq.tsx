

export default function Faq() {

  const faqs = [
  { q: "How do I become a verified Agent?", a: "Register as a user first, then apply for an Agent role from your dashboard. Our admin will review your credentials." },
  { q: "Are all property listings verified?", a: "Yes, every listing goes through a manual verification process by our admin team before appearing in search." },
  { q: "Can I manage my wishlist?", a: "Absolutely! Logged-in users can save properties to their wishlist and track price changes." },
];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer">
                <h3 className="font-bold text-slate-900">{f.q}</h3>
                <span className="text-blue-600 transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
