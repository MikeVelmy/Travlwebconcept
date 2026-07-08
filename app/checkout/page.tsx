import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import CheckoutFlow from "@/components/checkout/CheckoutFlow";
import Logo from "@/components/Logo";
import { getTourById } from "@/data/tours";

export const metadata: Metadata = {
  title: "Secure checkout — Your Company's Name",
  description: "Complete your booking.",
  robots: { index: false },
};

interface CheckoutPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function CheckoutPage({
  searchParams,
}: CheckoutPageProps) {
  const params = await searchParams;

  const tourId = typeof params.tour === "string" ? params.tour : "";
  const tour = getTourById(tourId);

  const rawGuests =
    typeof params.guests === "string" ? parseInt(params.guests, 10) : NaN;
  const initialGuests = Number.isFinite(rawGuests)
    ? Math.min(12, Math.max(1, rawGuests))
    : 2;

  return (
    <>
      <header className="bg-abyss text-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <p className="flex items-center gap-2 text-sm text-white/70">
            <Lock className="h-4 w-4 text-gold" aria-hidden="true" />
            Secure checkout
          </p>
        </div>
      </header>

      <main className="min-h-svh bg-mist/40">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:py-12">
          {tour ? (
            <>
              <Link
                href={`/tours/${tour.id}`}
                className="mb-6 inline-flex items-center gap-2 py-2 text-sm text-storm transition-colors hover:text-gold-deep"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to trip details
              </Link>
              <CheckoutFlow tour={tour} initialGuests={initialGuests} />
            </>
          ) : (
            <div className="mx-auto max-w-lg py-20 text-center">
              <h1 className="font-display text-3xl text-ink">
                No trip selected yet.
              </h1>
              <p className="mt-4 leading-relaxed text-storm">
                Checkout starts from a journey page — pick a tour, choose your
                travelers, and the booking carries over here.
              </p>
              <Link
                href="/tours"
                className="mt-8 inline-flex min-h-12 items-center rounded-full bg-gold px-8 font-medium text-abyss transition-colors hover:bg-gold-deep"
              >
                Browse all journeys
              </Link>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-ink/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 text-xs text-storm/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Your Company&rsquo;s Name</p>
          <p>Demo checkout — no payments are processed.</p>
        </div>
      </footer>
    </>
  );
}
