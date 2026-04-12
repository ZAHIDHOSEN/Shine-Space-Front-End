const stats = [
  { label: "Properties Sold", value: "2,500+" },
  { label: "Verified Agents", value: "450+" },
  { label: "Happy Customers", value: "12k+" },
  { label: "Cities Covered", value: "15+" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[#1a3c5e]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-3xl md:text-5xl font-bold text-[#e8a838]">
                {s.value}
              </h3>
              <p className="text-blue-100/70 text-xs md:text-sm uppercase tracking-widest font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}