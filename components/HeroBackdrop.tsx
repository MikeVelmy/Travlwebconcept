"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2400&auto=format&fit=crop",
    place: "Santorini, Greece",
    coords: "36.3932° N · 25.4615° E",
  },
  {
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2400&auto=format&fit=crop",
    place: "Serengeti, Tanzania",
    coords: "2.1540° S · 34.6857° E",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2400&auto=format&fit=crop",
    place: "Torres del Paine, Chile",
    coords: "50.9423° S · 73.4068° W",
  },
];

export default function HeroBackdrop() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      7000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {slides.map((slide, i) => (
        <div
          key={slide.place}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/40 to-abyss/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-abyss/50 to-transparent" />

      <div className="absolute right-5 top-24 z-10 hidden text-right md:block lg:right-8 lg:top-28">
        <p className="text-[11px] uppercase tracking-[0.25em] text-white/85">
          {slides[active].place}
        </p>
        <p className="mt-1 text-[11px] tracking-[0.15em] text-gold">
          {slides[active].coords}
        </p>
        <div className="mt-2 flex justify-end">
          {slides.map((slide, i) => (
            <button
              key={slide.place}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${slide.place}`}
              className="group p-1.5"
            >
              <span
                className={`block h-[3px] w-6 rounded-full transition-colors duration-300 ${
                  i === active ? "bg-gold" : "bg-white/30 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
