"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { tours } from "@/data/tours";

const labelClass =
  "block text-xs font-medium uppercase tracking-[0.18em] text-ink";
const inputClass =
  "mt-2 w-full rounded-lg border border-ink/15 bg-white px-3.5 py-3 text-base text-ink placeholder:text-storm/40 focus:border-gold-deep focus:outline-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ink/10 bg-white p-8 text-center sm:p-10">
        <CheckCircle2
          className="mx-auto h-12 w-12 text-gold-deep"
          aria-hidden="true"
        />
        <h2 className="mt-5 font-display text-2xl text-ink">
          Message sent.
        </h2>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-storm">
          A travel designer will reply within one working day — usually much
          faster on WhatsApp.
        </p>
        <p className="mt-4 text-xs text-storm/60">
          This is a demo form — no message was actually delivered.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8"
    >
      <h2 className="font-display text-2xl text-ink">Write to us</h2>
      <p className="mt-2 text-sm leading-relaxed text-storm">
        Tell us where you&rsquo;re dreaming of and who&rsquo;s coming — we
        build the rest.
      </p>

      <div className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Full name</span>
            <input
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className={labelClass}>Email</span>
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={inputClass}
            />
          </label>
        </div>

        <label className="block">
          <span className={labelClass}>Journey you&rsquo;re curious about</span>
          <select className={inputClass} defaultValue="">
            <option value="">Just a general question</option>
            {tours.map((tour) => (
              <option key={tour.id} value={tour.id}>
                {tour.title} — {tour.location}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className={labelClass}>Message</span>
          <textarea
            required
            rows={5}
            placeholder="Dates, group size, must-sees — anything helps."
            className={`${inputClass} resize-y`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-8 font-medium text-abyss transition-colors hover:bg-gold-deep"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send message
      </button>
    </form>
  );
}
