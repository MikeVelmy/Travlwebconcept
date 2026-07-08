"use client";

import { ArrowRight } from "lucide-react";
import { useBooking } from "./BookingContext";
import { inputClass, labelClass } from "./ui";

export default function StepTravelers({ onNext }: { onNext: () => void }) {
  const { lead, updateLead, companions, setCompanion } = useBooking();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onNext();
      }}
    >
      <h2 className="font-display text-2xl text-ink">Lead traveler</h2>
      <p className="mt-2 text-sm leading-relaxed text-storm">
        Booking confirmation and trip documents go to this person. Names must
        match passports.
      </p>

      <div className="mt-6 space-y-5">
        <label className="block">
          <span className={labelClass}>Full name</span>
          <input
            type="text"
            required
            autoComplete="name"
            placeholder="As it appears on your passport"
            value={lead.fullName}
            onChange={(event) => updateLead({ fullName: event.target.value })}
            className={inputClass}
          />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Email</span>
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={lead.email}
              onChange={(event) => updateLead({ email: event.target.value })}
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className={labelClass}>Phone</span>
            <input
              type="tel"
              required
              autoComplete="tel"
              placeholder="Your reachable number"
              value={lead.phone}
              onChange={(event) => updateLead({ phone: event.target.value })}
              className={inputClass}
            />
          </label>
        </div>
      </div>

      {companions.length > 0 && (
        <>
          <h2 className="mt-10 font-display text-2xl text-ink">
            Traveling companions
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-storm">
            {companions.length}{" "}
            {companions.length === 1 ? "companion joins" : "companions join"}{" "}
            the lead traveler. Adjust the count in the order summary.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {companions.map((name, index) => (
              <label key={index} className="block">
                <span className={labelClass}>Traveler {index + 2}</span>
                <input
                  type="text"
                  required
                  placeholder="Full passport name"
                  value={name}
                  onChange={(event) => setCompanion(index, event.target.value)}
                  className={inputClass}
                />
              </label>
            ))}
          </div>
        </>
      )}

      <button
        type="submit"
        className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-8 font-medium text-abyss transition-colors hover:bg-gold-deep"
      >
        Continue to add-ons
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
