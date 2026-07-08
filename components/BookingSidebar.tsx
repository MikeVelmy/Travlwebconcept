"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import type { Tour } from "@/data/tours";

const MAX_GUESTS = 12;

export default function BookingSidebar({ tour }: { tour: Tour }) {
  const [guests, setGuests] = useState(2);
  const total = guests * tour.pricePerPerson;
  const checkoutHref = `/checkout?tour=${tour.id}&guests=${guests}`;

  return (
    <>
      <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-xl shadow-ink/5 lg:sticky lg:top-24">
        <div className="flex items-end justify-between gap-4">
          <p className="text-storm">
            <span className="text-sm">From</span>{" "}
            <span className="font-display text-3xl text-ink">
              ${tour.pricePerPerson.toLocaleString("en-US")}
            </span>{" "}
            <span className="text-sm">/ person</span>
          </p>
          <p className="flex items-center gap-1 text-sm font-medium text-ink">
            <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
            {tour.rating.toFixed(1)}
            <span className="font-normal text-storm/60">
              ({tour.reviewsCount})
            </span>
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-y border-ink/10 py-5">
          <div>
            <p className="text-sm font-medium text-ink">Travelers</p>
            <p className="mt-0.5 text-xs text-storm/60">
              Max {MAX_GUESTS} per departure
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setGuests(Math.max(1, guests - 1))}
              disabled={guests <= 1}
              aria-label="Remove one traveler"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold-deep disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Minus className="h-4 w-4" aria-hidden="true" />
            </button>
            <span
              aria-live="polite"
              className="w-6 text-center text-lg font-semibold text-ink"
            >
              {guests}
            </span>
            <button
              type="button"
              onClick={() => setGuests(Math.min(MAX_GUESTS, guests + 1))}
              disabled={guests >= MAX_GUESTS}
              aria-label="Add one traveler"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold-deep disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-5 flex items-baseline justify-between">
          <p className="text-sm text-storm">
            Total for {guests} {guests === 1 ? "traveler" : "travelers"}
          </p>
          <p className="font-display text-2xl text-ink">
            ${total.toLocaleString("en-US")}
          </p>
        </div>

        <Link
          href={checkoutHref}
          className="mt-5 block rounded-full bg-gold px-6 py-4 text-center font-medium text-abyss transition-colors hover:bg-gold-deep"
        >
          Book this trip
        </Link>
        <p className="mt-3 text-center text-xs text-storm/60">
          You won&rsquo;t be charged yet — review everything at checkout.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-storm">
          <li className="flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-gold-deep" aria-hidden="true" />
            Free cancellation up to 30 days out
          </li>
          <li className="flex items-center gap-2.5">
            <Users className="h-4 w-4 text-gold-deep" aria-hidden="true" />
            Small group — never more than {MAX_GUESTS}
          </li>
          <li className="flex items-center gap-2.5">
            <MessageCircle
              className="h-4 w-4 text-gold-deep"
              aria-hidden="true"
            />
            <a
              href="https://wa.me/"
              className="underline decoration-ink/20 underline-offset-4 transition-colors hover:text-gold-deep"
            >
              Questions? Chat with us on WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 border-t border-ink/10 bg-white px-5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <div>
          <p className="font-display text-xl leading-tight text-ink">
            ${total.toLocaleString("en-US")}
          </p>
          <p className="text-xs text-storm/70">
            {guests} {guests === 1 ? "traveler" : "travelers"} · $
            {tour.pricePerPerson.toLocaleString("en-US")}/person
          </p>
        </div>
        <Link
          href={checkoutHref}
          className="rounded-full bg-gold px-7 py-3.5 font-medium text-abyss transition-colors hover:bg-gold-deep"
        >
          Book this trip
        </Link>
      </div>
    </>
  );
}
