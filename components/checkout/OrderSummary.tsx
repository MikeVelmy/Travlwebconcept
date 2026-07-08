"use client";

import Image from "next/image";
import { Minus, Plus, Star } from "lucide-react";
import { MAX_GUESTS, useBooking } from "./BookingContext";
import { formatMoney } from "./ui";

export default function OrderSummary() {
  const { tour, guests, setGuests, lines, total } = useBooking();

  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-xl shadow-ink/5 lg:sticky lg:top-8">
      <div className="flex gap-4">
        <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg">
          <Image
            src={tour.images[0]}
            alt={`${tour.title} — ${tour.location}`}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] text-gold-deep">
            {tour.location}
          </p>
          <h2 className="mt-1 font-display text-lg leading-snug text-ink">
            {tour.title}
          </h2>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-storm">
            <Star
              className="h-3.5 w-3.5 fill-gold text-gold"
              aria-hidden="true"
            />
            {tour.rating.toFixed(1)} · {tour.durationDays} days ·{" "}
            {tour.durationDays - 1} nights
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-y border-ink/10 py-4">
        <p className="text-sm font-medium text-ink">Travelers</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setGuests(guests - 1)}
            disabled={guests <= 1}
            aria-label="Remove one traveler"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold-deep disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Minus className="h-4 w-4" aria-hidden="true" />
          </button>
          <span
            aria-live="polite"
            className="w-6 text-center font-semibold text-ink"
          >
            {guests}
          </span>
          <button
            type="button"
            onClick={() => setGuests(guests + 1)}
            disabled={guests >= MAX_GUESTS}
            aria-label="Add one traveler"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold-deep disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul className="mt-4 space-y-2.5">
        {lines.map((line) => (
          <li
            key={line.label}
            className="flex items-baseline justify-between gap-4 text-sm text-storm"
          >
            <span>{line.label}</span>
            <span className="shrink-0 font-medium text-ink">
              {formatMoney(line.amount)}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-baseline justify-between border-t border-ink/10 pt-4">
        <p className="font-medium text-ink">Total</p>
        <p className="font-display text-2xl text-ink">{formatMoney(total)}</p>
      </div>
      <p className="mt-2 text-xs text-storm/60">
        Free cancellation up to 30 days before departure.
      </p>
    </div>
  );
}
