import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Clock,
  Gauge,
  Star,
  Users,
  X,
} from "lucide-react";
import BookingSidebar from "@/components/BookingSidebar";
import ItineraryTimeline from "@/components/ItineraryTimeline";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getTourById, tours } from "@/data/tours";

interface TourPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return tours.map((tour) => ({ id: tour.id }));
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { id } = await params;
  const tour = getTourById(id);
  if (!tour) return { title: "Journey not found — Your Company's Name" };
  return {
    title: `${tour.title} — Your Company's Name`,
    description: tour.description,
  };
}

export default async function TourPage({ params }: TourPageProps) {
  const { id } = await params;
  const tour = getTourById(id);
  if (!tour) notFound();

  const facts = [
    {
      icon: Clock,
      label: "Duration",
      value: `${tour.durationDays} days · ${tour.durationDays - 1} nights`,
    },
    { icon: Gauge, label: "Difficulty", value: tour.difficulty },
    { icon: Users, label: "Group size", value: "Max 12 travelers" },
    {
      icon: Star,
      label: "Rating",
      value: `${tour.rating.toFixed(1)} (${tour.reviewsCount} reviews)`,
    },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-ink pb-10 pt-24 text-white lg:pt-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 py-2 text-sm text-white/70 transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All journeys
            </Link>

            <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  {tour.location}
                </p>
                <h1 className="mt-3 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08]">
                  {tour.title}
                </h1>
              </div>
              <div className="flex flex-wrap gap-2 pb-1">
                {tour.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/25 px-3.5 py-1.5 text-xs uppercase tracking-[0.14em] text-white/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-2 sm:h-[420px] sm:grid-cols-4 sm:grid-rows-2 lg:h-[480px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2 sm:row-span-2 sm:aspect-auto">
                <Image
                  src={tour.images[0]}
                  alt={`${tour.title} — ${tour.location}`}
                  fill
                  priority
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              {tour.images.slice(1, 3).map((src, i) => (
                <div
                  key={src}
                  className="relative hidden overflow-hidden rounded-xl sm:block"
                >
                  <Image
                    src={src}
                    alt={`${tour.title} — view ${i + 2}`}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="relative hidden overflow-hidden rounded-xl sm:col-span-2 sm:block">
                <Image
                  src={tour.images[3]}
                  alt={`${tour.title} — view 4`}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 sm:hidden">
              {tour.images.slice(1, 4).map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={src}
                    alt={`${tour.title} — view ${i + 2}`}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl gap-12 px-5 py-12 sm:px-8 lg:grid lg:grid-cols-[1fr_380px] lg:py-16">
            <div>
              <div className="grid grid-cols-2 gap-6 border-b border-ink/10 pb-8 sm:grid-cols-4">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <fact.icon
                      className="h-5 w-5 text-gold-deep"
                      aria-hidden="true"
                    />
                    <p className="mt-2.5 text-[11px] uppercase tracking-[0.18em] text-storm/60">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
                  The journey
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-storm sm:text-lg">
                  {tour.description}
                </p>
              </div>

              <div className="mt-14">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
                  Day by day
                </p>
                <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                  {tour.durationDays} days,{" "}
                  <em className="italic">drawn in detail</em>
                </h2>
                <div className="mt-6">
                  <ItineraryTimeline itinerary={tour.itinerary} />
                </div>
              </div>

              <div className="mt-14">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
                  The fine print
                </p>
                <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                  What&rsquo;s included
                </h2>
                <div className="mt-7 grid gap-10 sm:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink">
                      Included
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {tour.inclusions.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-storm"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink">
                      Not included
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {tour.exclusions.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-storm/80"
                        >
                          <X
                            className="mt-0.5 h-4 w-4 shrink-0 text-storm/40"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <aside className="mt-12 lg:mt-0">
              <BookingSidebar tour={tour} />
            </aside>
          </div>
          <div className="h-20 lg:hidden" />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
