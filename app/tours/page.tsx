import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ToursExplorer from "@/components/ToursExplorer";
import { getAllTags, tours, type TourTag } from "@/data/tours";

export const metadata: Metadata = {
  title: "All journeys — Your Company's Name",
  description:
    "Browse every small-group journey — filter by destination, budget, trip length, difficulty, and travel style, then compare itineraries side by side.",
};

interface ToursPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ToursPage({ searchParams }: ToursPageProps) {
  const params = await searchParams;

  const rawDestination =
    typeof params.destination === "string" ? params.destination : "";
  const destination = tours.some((tour) => tour.location === rawDestination)
    ? rawDestination
    : "";

  const rawType = typeof params.type === "string" ? params.type : "";
  const style = (getAllTags() as string[]).includes(rawType)
    ? (rawType as TourTag)
    : undefined;

  const travelDate = typeof params.date === "string" ? params.date : undefined;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-ink pb-14 pt-28 text-white lg:pb-20 lg:pt-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              The collection
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.08]">
              Every journey, <em className="italic text-gold">drawn to scale</em>
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-white/75">
              {tours.length} small-group departures across five continents —
              each one guided by locals, capped at twelve travelers, and
              adjustable to the people on it.
            </p>
          </div>
        </section>

        <ToursExplorer
          initialDestination={destination}
          initialStyle={style}
          travelDate={travelDate}
        />
      </main>
      <SiteFooter />
    </>
  );
}
