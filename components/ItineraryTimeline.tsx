"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ItineraryDay } from "@/data/tours";

export default function ItineraryTimeline({
  itinerary,
}: {
  itinerary: ItineraryDay[];
}) {
  const [openDay, setOpenDay] = useState<number | null>(1);

  return (
    <ol className="relative">
      <span
        aria-hidden="true"
        className="absolute bottom-5 left-5 top-5 w-px bg-ink/10"
      />
      {itinerary.map((day) => {
        const isOpen = openDay === day.day;
        return (
          <li key={day.day} className="relative">
            <button
              type="button"
              onClick={() => setOpenDay(isOpen ? null : day.day)}
              aria-expanded={isOpen}
              className="group flex w-full items-center gap-4 py-3 text-left"
            >
              <span
                className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-300 ${
                  isOpen
                    ? "border-gold bg-gold text-abyss"
                    : "border-ink/20 bg-white text-ink group-hover:border-gold-deep"
                }`}
              >
                {day.day}
              </span>
              <span className="flex-1">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-storm/60">
                  Day {day.day}
                </span>
                <span className="mt-0.5 block font-display text-lg leading-snug text-ink">
                  {day.title}
                </span>
              </span>
              <ChevronDown
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-storm/50 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-gold-deep" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pl-14 pr-8 text-sm leading-relaxed text-storm">
                  {day.description}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
