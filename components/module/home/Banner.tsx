"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1600&q=80",
    title: "Discover Your",
    highlight: "Dream Home",
  },
  {
    img: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=1600&q=80",
    title: "Find The Best",
    highlight: "Property Deals",
  },
  {
    img: "https://i.postimg.cc/wjjJBFkf/Real-Estate-Web-Banner-06.jpg",
    title: "Live In Your",
    highlight: "Favorite City",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const s = slides[current];

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center">
      <Image src={s.img} alt={s.title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40" />

      <h1 className="relative z-10 text-center text-white px-4 text-5xl md:text-7xl font-extrabold drop-shadow-lg">
        {s.title} <span className="text-blue-400">{s.highlight}</span>
      </h1>

      <div className="absolute bottom-6 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full ${i === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}