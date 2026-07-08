import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tours } from "@/data/tours";
import TourCard from "./TourCard";

const featuredIds = [
  "santorini-sunset-serenade",
  "serengeti-luxury-safari",
  "patagonia-wild-frontiers",
  "kyoto-cultural-odyssey",
  "maldives-overwater-hideaway",
  "sahara-starlight-expedition",
];

export default function TrendingTours() {
  const featured = featuredIds
    .map((id) => tours.find((tour) => tour.id === id))
    .filter((tour) => tour !== undefined);

  return (
    <section id="trending" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
              Trending this season
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-ink">
              Journeys travelers are{" "}
              <em className="italic">booking right now</em>
            </h2>
          </div>
          <Link
            href="/tours"
            className="hidden shrink-0 items-center gap-2 border-b border-ink/20 pb-1 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold-deep sm:inline-flex"
          >
            All {tours.length} journeys
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid auto-rows-[300px] gap-4 sm:auto-rows-[260px] sm:grid-cols-2 lg:grid-cols-6">
          {featured.map((tour, i) => (
            <TourCard
              key={tour.id}
              tour={tour}
              featured={i === 0}
              className={
                i === 0
                  ? "sm:col-span-2 sm:row-span-2 lg:col-span-4"
                  : "lg:col-span-2"
              }
              sizes={
                i === 0
                  ? "(min-width: 1024px) 66vw, 100vw"
                  : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              }
            />
          ))}
        </div>

        <Link
          href="/tours"
          className="mt-8 flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold-deep sm:hidden"
        >
          All {tours.length} journeys
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
