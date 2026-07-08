import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { MeridianMark } from "./Logo";

const exploreLinks = [
  { label: "All tours", href: "/tours" },
  { label: "Trending destinations", href: "/#trending" },
  { label: "Why Us", href: "/#why" },
  { label: "Traveler reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-abyss text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 lg:py-20">
        <div className="md:col-span-6 lg:col-span-5">
          <span className="flex items-center gap-2.5 text-white">
            <MeridianMark className="h-7 w-7 text-gold" />
            <span className="font-display text-lg tracking-wide sm:text-xl">
              Your Company&rsquo;s Name
            </span>
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Small-group journeys drawn by hand — vetted local guides, flexible
            plans, and itineraries that never run the same way twice.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3 lg:col-span-3">
          <h3 className="text-xs uppercase tracking-[0.25em] text-gold">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3 lg:col-span-4">
          <h3 className="text-xs uppercase tracking-[0.25em] text-gold">
            Talk to a human
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="https://wa.me/"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 font-medium text-white transition-colors hover:bg-gold hover:text-abyss"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@yourcompany.com"
                className="transition-colors hover:text-gold"
              >
                hello@yourcompany.com
              </a>
            </li>
            <li>
              <a href="tel:+0000000000" className="transition-colors hover:text-gold">
                Your reachable number
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Your Company&rsquo;s Name. All rights reserved.</p>
          <p className="tracking-[0.15em]">
            0.0000° N · 0.0000° E — Your location
          </p>
        </div>
      </div>
    </footer>
  );
}
