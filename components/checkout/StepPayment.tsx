"use client";

import { useState } from "react";
import { ArrowLeft, Loader2, Lock } from "lucide-react";
import { useBooking } from "./BookingContext";
import { formatMoney, inputClass, labelClass } from "./ui";

function formatCardNumber(value: string): string {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export default function StepPayment({
  onBack,
  onConfirm,
}: {
  onBack: () => void;
  onConfirm: (reference: string) => void;
}) {
  const { lines, total } = useBooking();
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (processing) return;
    setProcessing(true);
    const reference = `MRD-${Math.random()
      .toString(36)
      .slice(2, 8)
      .toUpperCase()}`;
    setTimeout(() => onConfirm(reference), 1400);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-display text-2xl text-ink">Review & pay</h2>

      <ul className="mt-6 space-y-2.5 rounded-xl border border-ink/10 bg-mist/60 p-5">
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
        <li className="flex items-baseline justify-between border-t border-ink/10 pt-3">
          <span className="font-medium text-ink">Total due today</span>
          <span className="font-display text-xl text-ink">
            {formatMoney(total)}
          </span>
        </li>
      </ul>

      <div className="mt-8 space-y-5">
        <label className="block">
          <span className={labelClass}>Name on card</span>
          <input
            type="text"
            required
            autoComplete="cc-name"
            value={cardName}
            onChange={(event) => setCardName(event.target.value)}
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Card number</span>
          <input
            type="text"
            required
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="4242 4242 4242 4242"
            value={cardNumber}
            onChange={(event) =>
              setCardNumber(formatCardNumber(event.target.value))
            }
            pattern="(\d{4} ){3}\d{4}"
            title="16-digit card number"
            className={inputClass}
          />
        </label>

        <div className="grid grid-cols-2 gap-5">
          <label className="block">
            <span className={labelClass}>Expiry</span>
            <input
              type="text"
              required
              inputMode="numeric"
              autoComplete="cc-exp"
              placeholder="MM/YY"
              value={expiry}
              onChange={(event) => setExpiry(formatExpiry(event.target.value))}
              pattern="(0[1-9]|1[0-2])\/\d{2}"
              title="Expiry as MM/YY"
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className={labelClass}>CVC</span>
            <input
              type="text"
              required
              inputMode="numeric"
              autoComplete="cc-csc"
              placeholder="123"
              value={cvc}
              onChange={(event) =>
                setCvc(event.target.value.replace(/\D/g, "").slice(0, 4))
              }
              pattern="\d{3,4}"
              title="3 or 4 digit security code"
              className={inputClass}
            />
          </label>
        </div>
      </div>

      <p className="mt-5 flex items-center gap-2 text-xs text-storm/70">
        <Lock className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
        Demo checkout — no real payment is processed and card details never
        leave this page.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={onBack}
          disabled={processing}
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink/15 px-6 font-medium text-ink transition-colors hover:border-ink/40 disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
        <button
          type="submit"
          disabled={processing}
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-8 font-medium text-abyss transition-colors hover:bg-gold-deep disabled:opacity-70"
        >
          {processing ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Processing…
            </>
          ) : (
            <>
              <Lock className="h-4 w-4" aria-hidden="true" />
              Pay {formatMoney(total)}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
