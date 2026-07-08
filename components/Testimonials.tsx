"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const current = testimonials[index];

  const previous = () => setIndex((index + count - 1) % count);
  const next = () => setIndex((index + 1) % count);

  return (
    <section id="reviews" className="scroll-mt-20 bg-mist">
      <div
        className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28"
        aria-roledescription="carousel"
        aria-label="Traveler reviews"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
          From the road
        </p>
        <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-ink">
          Postcards from <em className="italic">past travelers</em>
        </h2>

        <div aria-live="polite" className="mt-12 flex flex-col items-center">
          <div
            className="flex items-center gap-1"
            role="img"
            aria-label={`${current.stars} out of 5 stars`}
          >
            {Array.from({ length: current.stars }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-gold text-gold"
                aria-hidden="true"
              />
            ))}
          </div>

          <blockquote className="mt-6 flex min-h-36 items-center sm:min-h-32">
            <p className="font-display text-xl italic leading-snug text-ink sm:text-2xl lg:text-[1.7rem]">
              &ldquo;{current.quote}&rdquo;
            </p>
          </blockquote>

          <p className="mt-6 font-medium text-ink">{current.name}</p>
          <p className="mt-1 text-sm text-storm">
            {current.home} · {current.trip}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold-deep"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center">
            {testimonials.map((testimonial, i) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1} of ${count}`}
                aria-current={i === index}
                className="group p-2.5"
              >
                <span
                  className={`block h-2 w-2 rounded-full transition-colors ${
                    i === index
                      ? "bg-gold-deep"
                      : "bg-ink/20 group-hover:bg-ink/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold-deep"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
