"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useBooking } from "./BookingContext";
import { formatMoney } from "./ui";

export default function Confirmation({ reference }: { reference: string }) {
  const { tour, guests, lead, total } = useBooking();
  const firstName = lead.fullName.trim().split(/\s+/)[0] || "traveler";

  return (
    <div className="mx-auto max-w-xl py-10 text-center lg:py-16">
      <CheckCircle2
        className="mx-auto h-14 w-14 text-gold-deep"
        aria-hidden="true"
      />
      <h1 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
        You&rsquo;re booked, <em className="italic">{firstName}</em>.
      </h1>
      <p className="mt-4 leading-relaxed text-storm">
        {tour.title} for {guests} {guests === 1 ? "traveler" : "travelers"} is
        confirmed. Your itinerary and travel documents are on their way to{" "}
        <strong className="font-medium text-ink">{lead.email}</strong>.
      </p>

      <div className="mx-auto mt-8 inline-flex flex-col items-center gap-1 rounded-xl border border-ink/10 bg-mist/60 px-8 py-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-storm/60">
          Booking reference
        </p>
        <p className="font-display text-2xl tracking-wide text-ink">
          {reference}
        </p>
        <p className="mt-1 text-sm text-storm">
          {formatMoney(total)} paid · {tour.location}
        </p>
      </div>

      <p className="mt-6 text-xs text-storm/60">
        This is a demo booking — no payment was taken and no email will
        actually arrive.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/tours"
          className="inline-flex min-h-12 items-center rounded-full bg-gold px-8 font-medium text-abyss transition-colors hover:bg-gold-deep"
        >
          Browse more journeys
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center rounded-full border border-ink/15 px-6 font-medium text-ink transition-colors hover:border-ink/40"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
