import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Tour } from "@/data/tours";

interface TourCardProps {
  tour: Tour;
  className?: string;
  sizes?: string;
  featured?: boolean;
}

export default function TourCard({
  tour,
  className = "",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  featured = false,
}: TourCardProps) {
  return (
    <Link
      href={`/tours/${tour.id}`}
      className={`group relative block overflow-hidden rounded-xl bg-ink ${className}`}
    >
      <Image
        src={tour.images[0]}
        alt={`${tour.title} — ${tour.location}`}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-abyss/25 to-abyss/10 transition-colors duration-500 group-hover:via-abyss/40" />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
        <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          {tour.tags[0]}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-abyss/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          <Star
            className="h-3.5 w-3.5 fill-gold text-gold"
            aria-hidden="true"
          />
          {tour.rating.toFixed(1)}
          <span className="text-white/60">({tour.reviewsCount})</span>
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
          {tour.location}
        </p>
        <h3
          className={`mt-1.5 font-display text-white ${
            featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
          }`}
        >
          {tour.title}
        </h3>
        <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3.5 text-sm text-white/80">
          <span>
            {tour.durationDays} days · {tour.durationDays - 1} nights
          </span>
          <span>
            From{" "}
            <strong className="font-semibold text-white">
              ${tour.pricePerPerson.toLocaleString("en-US")}
            </strong>
          </span>
        </div>
      </div>
    </Link>
  );
}
