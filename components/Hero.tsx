import { ArrowDown } from "lucide-react";
import HeroBackdrop from "./HeroBackdrop";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-abyss text-white">
      <HeroBackdrop />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-8 pt-32 sm:px-8 lg:pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          Small-group journeys · 32 countries
        </p>

        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[1.05] text-white">
          The world is best{" "}
          <em className="italic text-gold">read in person</em>.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          We pair you with vetted local guides on handcrafted
          itineraries — Aegean calderas, Serengeti plains, Patagonian ice.
          Find the journey with your name on it.
        </p>

        <div className="mt-9">
          <SearchBar />
        </div>

        <a
          href="#trending"
          className="mt-9 inline-flex items-center gap-2 py-2 text-xs uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-gold"
        >
          <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          Trending this season
        </a>
      </div>
    </section>
  );
}
