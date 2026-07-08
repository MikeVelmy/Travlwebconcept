"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { Tour } from "@/data/tours";
import { BookingProvider } from "./BookingContext";
import Confirmation from "./Confirmation";
import OrderSummary from "./OrderSummary";
import StepAddOns from "./StepAddOns";
import StepPayment from "./StepPayment";
import StepTravelers from "./StepTravelers";

const steps = [
  { number: 1, label: "Travelers" },
  { number: 2, label: "Add-ons" },
  { number: 3, label: "Payment" },
];

export default function CheckoutFlow({
  tour,
  initialGuests,
}: {
  tour: Tour;
  initialGuests: number;
}) {
  const [step, setStep] = useState(1);
  const [reference, setReference] = useState<string | null>(null);

  return (
    <BookingProvider tour={tour} initialGuests={initialGuests}>
      {reference ? (
        <Confirmation reference={reference} />
      ) : (
        <>
          <ol className="flex items-center gap-2 sm:gap-3" aria-label="Checkout progress">
            {steps.map((item, index) => {
              const isComplete = step > item.number;
              const isCurrent = step === item.number;
              return (
                <li key={item.number} className="flex items-center gap-2 sm:gap-3">
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className={`h-px w-6 sm:w-10 ${
                        step >= item.number ? "bg-gold-deep" : "bg-ink/15"
                      }`}
                    />
                  )}
                  <span
                    aria-current={isCurrent ? "step" : undefined}
                    className="flex items-center gap-2"
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                        isComplete
                          ? "bg-gold-deep text-white"
                          : isCurrent
                            ? "bg-ink text-white"
                            : "border border-ink/20 text-storm/60"
                      }`}
                    >
                      {isComplete ? (
                        <Check className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        item.number
                      )}
                    </span>
                    <span
                      className={`hidden text-sm sm:block ${
                        isCurrent ? "font-medium text-ink" : "text-storm/60"
                      }`}
                    >
                      {item.label}
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>

          <div className="mt-8 gap-10 lg:grid lg:grid-cols-[1fr_400px] lg:items-start">
            <div className="order-first mb-8 lg:order-none lg:mb-0 lg:hidden">
              <OrderSummary />
            </div>

            <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
              {step === 1 && <StepTravelers onNext={() => setStep(2)} />}
              {step === 2 && (
                <StepAddOns
                  onNext={() => setStep(3)}
                  onBack={() => setStep(1)}
                />
              )}
              {step === 3 && (
                <StepPayment
                  onBack={() => setStep(2)}
                  onConfirm={setReference}
                />
              )}
            </div>

            <aside className="hidden lg:block">
              <OrderSummary />
            </aside>
          </div>
        </>
      )}
    </BookingProvider>
  );
}
