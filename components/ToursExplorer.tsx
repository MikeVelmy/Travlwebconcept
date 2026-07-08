"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import {
  getAllTags,
  tours,
  type Difficulty,
  type Tour,
  type TourTag,
} from "@/data/tours";
import TourCard from "./TourCard";

const PRICE_MAX = 6500;

const durationOptions = [
  { id: "any", label: "Any length" },
  { id: "short", label: "Up to 6 days" },
  { id: "medium", label: "7 – 8 days" },
  { id: "long", label: "9+ days" },
] as const;
type DurationId = (typeof durationOptions)[number]["id"];

const difficultyOptions: Difficulty[] = ["Easy", "Moderate", "Challenging"];

const sortOptions = [
  { id: "recommended", label: "Recommended" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "rating", label: "Top rated" },
] as const;
type SortId = (typeof sortOptions)[number]["id"];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function matchesDuration(tour: Tour, duration: DurationId): boolean {
  if (duration === "short") return tour.durationDays <= 6;
  if (duration === "medium")
    return tour.durationDays >= 7 && tour.durationDays <= 8;
  if (duration === "long") return tour.durationDays >= 9;
  return true;
}

interface ToursExplorerProps {
  initialDestination?: string;
  initialStyle?: TourTag;
  travelDate?: string;
}

export default function ToursExplorer({
  initialDestination = "",
  initialStyle,
  travelDate,
}: ToursExplorerProps) {
  const [destination, setDestination] = useState(initialDestination);
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
  const [duration, setDuration] = useState<DurationId>("any");
  const [difficulties, setDifficulties] = useState<Difficulty[]>([]);
  const [styles, setStyles] = useState<TourTag[]>(
    initialStyle ? [initialStyle] : []
  );
  const [sort, setSort] = useState<SortId>("recommended");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const locations = useMemo(
    () => [...new Set(tours.map((tour) => tour.location))],
    []
  );

  const filtered = useMemo(() => {
    const list = tours.filter(
      (tour) =>
        (!destination || tour.location === destination) &&
        tour.pricePerPerson <= maxPrice &&
        matchesDuration(tour, duration) &&
        (difficulties.length === 0 ||
          difficulties.includes(tour.difficulty)) &&
        (styles.length === 0 ||
          styles.some((style) => tour.tags.includes(style)))
    );
    if (sort === "price-asc")
      list.sort((a, b) => a.pricePerPerson - b.pricePerPerson);
    if (sort === "price-desc")
      list.sort((a, b) => b.pricePerPerson - a.pricePerPerson);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [destination, maxPrice, duration, difficulties, styles, sort]);

  const hasActiveFilters =
    destination !== "" ||
    maxPrice < PRICE_MAX ||
    duration !== "any" ||
    difficulties.length > 0 ||
    styles.length > 0;

  const activeCount =
    (destination ? 1 : 0) +
    (maxPrice < PRICE_MAX ? 1 : 0) +
    (duration !== "any" ? 1 : 0) +
    difficulties.length +
    styles.length;

  const resetFilters = () => {
    setDestination("");
    setMaxPrice(PRICE_MAX);
    setDuration("any");
    setDifficulties([]);
    setStyles([]);
  };

  const toggleDifficulty = (level: Difficulty) =>
    setDifficulties((current) =>
      current.includes(level)
        ? current.filter((item) => item !== level)
        : [...current, level]
    );

  const toggleStyle = (tag: TourTag) =>
    setStyles((current) =>
      current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag]
    );

  const dateNote = useMemo(() => {
    if (!travelDate) return null;
    const [year, month] = travelDate.split("-").map(Number);
    if (!year || !month || month < 1 || month > 12) return null;
    return `${monthNames[month - 1]} ${year}`;
  }, [travelDate]);

  const filterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink">
          Destination
        </h3>
        <span className="relative mt-3 block">
          <select
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            className="w-full appearance-none rounded-lg border border-ink/15 bg-white px-3.5 py-2.5 pr-9 text-base text-ink focus:outline-none"
          >
            <option value="">Anywhere</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-storm/50"
          />
        </span>
      </div>

      <div>
        <div className="flex items-baseline justify-between">
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink">
            Budget per person
          </h3>
          <span className="text-sm font-medium text-gold-deep">
            {maxPrice >= PRICE_MAX
              ? "Any"
              : `≤ $${maxPrice.toLocaleString("en-US")}`}
          </span>
        </div>
        <input
          type="range"
          min={1500}
          max={PRICE_MAX}
          step={100}
          value={maxPrice}
          onChange={(event) => setMaxPrice(Number(event.target.value))}
          aria-label="Maximum price per person"
          className="mt-4 w-full accent-gold-deep"
        />
        <div className="mt-1 flex justify-between text-xs text-storm/60">
          <span>$1,500</span>
          <span>${PRICE_MAX.toLocaleString("en-US")}+</span>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink">
          Trip length
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {durationOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setDuration(option.id)}
              aria-pressed={duration === option.id}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                duration === option.id
                  ? "border-ink bg-ink text-white"
                  : "border-ink/15 text-storm hover:border-ink/40"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink">
          Difficulty
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {difficultyOptions.map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => toggleDifficulty(level)}
              aria-pressed={difficulties.includes(level)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                difficulties.includes(level)
                  ? "border-ink bg-ink text-white"
                  : "border-ink/15 text-storm hover:border-ink/40"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink">
          Travel style
        </h3>
        <div className="mt-3 space-y-1">
          {getAllTags().map((tag) => {
            const count = tours.filter((tour) =>
              tour.tags.includes(tag)
            ).length;
            return (
              <label
                key={tag}
                className="flex min-h-11 cursor-pointer items-center justify-between gap-3 rounded-lg px-1 py-1.5 text-sm text-storm transition-colors hover:bg-mist"
              >
                <span className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={styles.includes(tag)}
                    onChange={() => toggleStyle(tag)}
                    className="h-4 w-4 accent-gold-deep"
                  />
                  {tag}
                </span>
                <span className="text-xs text-storm/50">{count}</span>
              </label>
            );
          })}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={resetFilters}
          className="text-sm font-medium text-gold-deep underline-offset-4 hover:underline"
        >
          Reset all filters
        </button>
      )}
    </div>
  );

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-28">{filterPanel}</div>
          </aside>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-storm">
                  <strong className="font-semibold text-ink">
                    {filtered.length}
                  </strong>{" "}
                  of {tours.length} journeys
                  {hasActiveFilters && " match your filters"}
                </p>
                {dateNote && (
                  <p className="mt-1 text-xs text-storm/60">
                    Departures around {dateNote} — exact dates confirmed at
                    checkout.
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="flex min-h-11 items-center gap-2 rounded-full border border-ink/15 px-4 text-sm font-medium text-ink transition-colors hover:border-ink/40 lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                  Filters
                  {activeCount > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-semibold text-abyss">
                      {activeCount}
                    </span>
                  )}
                </button>

                <label className="relative flex min-h-11 items-center">
                  <span className="sr-only">Sort journeys</span>
                  <select
                    value={sort}
                    onChange={(event) =>
                      setSort(event.target.value as SortId)
                    }
                    className="appearance-none rounded-full border border-ink/15 bg-white py-2.5 pl-4 pr-9 text-sm font-medium text-ink focus:outline-none"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 h-4 w-4 text-storm/50"
                  />
                </label>
              </div>
            </div>

            {filtered.length > 0 ? (
              <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((tour) => (
                  <TourCard
                    key={tour.id}
                    tour={tour}
                    className="aspect-[4/5]"
                    sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-xl border border-ink/10 bg-mist px-6 py-16 text-center">
                <p className="font-display text-2xl text-ink">
                  No journeys match those filters.
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-storm">
                  Try widening the budget or clearing a filter — every journey
                  below $6,500 is in this collection.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 rounded-full bg-gold px-6 py-3 text-sm font-medium text-abyss transition-colors hover:bg-gold-deep"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
          <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
            <h2 className="font-display text-xl text-ink">Filters</h2>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close filters"
              className="-mr-2 flex h-11 w-11 items-center justify-center text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">{filterPanel}</div>

          <div className="border-t border-ink/10 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="w-full rounded-full bg-gold px-6 py-4 font-medium text-abyss transition-colors hover:bg-gold-deep"
            >
              Show {filtered.length}{" "}
              {filtered.length === 1 ? "journey" : "journeys"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
