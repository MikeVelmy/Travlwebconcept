"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { addOnCatalog, useBooking, type AddOnId } from "./BookingContext";
import { formatMoney } from "./ui";

export default function StepAddOns({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { addOns, toggleAddOn, guests } = useBooking();

  return (
    <div>
      <h2 className="font-display text-2xl text-ink">Add-ons & upgrades</h2>
      <p className="mt-2 text-sm leading-relaxed text-storm">
        All optional — toggle anything on and the total updates in the order
        summary.
      </p>

      <div className="mt-6 space-y-4">
        {(Object.keys(addOnCatalog) as AddOnId[]).map((id) => {
          const addOn = addOnCatalog[id];
          const selected = addOns[id];
          const effective =
            addOn.per === "traveler" ? addOn.price * guests : addOn.price;
          return (
            <label
              key={id}
              className={`flex cursor-pointer items-start gap-4 rounded-xl border p-5 transition-colors ${
                selected
                  ? "border-gold-deep bg-gold/5"
                  : "border-ink/15 hover:border-ink/35"
              }`}
            >
              <input
                type="checkbox"
                checked={selected}
                onChange={() => toggleAddOn(id)}
                className="mt-1 h-4 w-4 shrink-0 accent-gold-deep"
              />
              <span className="flex-1">
                <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="font-medium text-ink">{addOn.label}</span>
                  <span className="text-sm font-medium text-gold-deep">
                    +{formatMoney(effective)}
                    <span className="font-normal text-storm/60">
                      {addOn.per === "traveler"
                        ? ` · ${formatMoney(addOn.price)} per traveler`
                        : " · per booking"}
                    </span>
                  </span>
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-storm">
                  {addOn.description}
                </span>
              </span>
            </label>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink/15 px-6 font-medium text-ink transition-colors hover:border-ink/40"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-8 font-medium text-abyss transition-colors hover:bg-gold-deep"
        >
          Continue to payment
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
